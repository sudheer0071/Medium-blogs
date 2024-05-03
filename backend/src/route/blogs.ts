import { Hono } from "hono";
import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode, sign, verify} from 'hono/jwt'

const blogRouter = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string,
    HONO_R2_UPLOAD:R2Bucket
  },
  Variables:{
    userId:string
  }
}>()


blogRouter.use('/*',async(c,next)=>{
  // get the header
  // verify the header
  // if header is correct , we proceed with next()
  // if not we'll give token error
  try {
    const header = c.req.header('authorization') || ""
    const response = await verify(header,c.env.JWT_SECRET)
    if (response.id) {
      c.set("userId",response.id)
      await next()
    }else{
      c.status(403)
      return c.json({message:"token error"})
    }
  } catch (error) {
    c.status(403)
    return c.json({message:"unauthorized"})
  }
})

blogRouter.post('/', async (c) => {
  const prisma = new PrismaClient({ 
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

const body = await c.req.json()   
const authorId = c.get("userId")
try {
  const photo = await c.req.parseBody()
  console.log(photo['file']);
  
  const blog = await prisma.blog.create({
   data:{
     title:body.title,
     content:body.content, 
     date: new Date(),
     authorId,
     imageType:'mintype',
     imageName:'check',
     imageData:"photo['file'] "
    }
  })
 

 return c.json({message:`Blog is created`,blog})
 
} catch (error) {
  console.error(error)
  return c.json({message:`Error in creating blog`,error})
  
}
})  
blogRouter.put('/', async(c) => {
  const prisma = new PrismaClient({ 
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

const body = await c.req.json()  
   const blog = await prisma.blog.update({
    where:{
      id:body.id
    },
    data:{
      title:body.title,
      content:body.content, 
    }
   })
  return c.json({message:'Blog updated!'})
})  

blogRouter.get('/bulk',async(c)=>{
  const prisma = new PrismaClient({ 
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
//Todo: add pagination
const blogs = await prisma.blog.findMany({
  select:{
    title:true,
    content:true,
    id:true,
    date:true,
    author:{
      select:{
        name:true
      }
    }
  }
});

blogs.forEach((blog:any) => {
  blog.date = new Date(blog.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
});
return c.json({blogs:blogs}) 
})

blogRouter.get('/:id', async(c) => {
  const prisma = new PrismaClient({ 
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

const id =  c.req.param("id")
try {
   
   const blog = await prisma.blog.findFirst({
    where:{id
    },
    select:{
      id:true,
      title:true, 
      content:true,
      date:true,
      author:{
        select:{
          name:true
        }
      }
    } 
   })
  //  if (blog) {
  //   blog.date = new Date(blog.date).toLocaleDateString('en-US', {
  //     day: 'numeric',
  //     month: 'short',
  //     year: 'numeric'
  //   });
  // }
  
  return c.json({blog:blog})
} catch (error) {
  c.status(411)
  return c.json({
    message:"Error while fetching blog post"
  })
}
})  

blogRouter.post('/upload',async(c)=>{
  console.log("author id: "+c.get('userId'));
  
  const photo = await c.req.parseBody()
  const file = photo['formData'] 
  console.log("Files "+file);
  
  if (file && file instanceof File){
    console.log("Uploading file to R2"); 
  }
  
 return c.json({message:photo})
})
 
export {blogRouter}
