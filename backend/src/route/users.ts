import { Hono } from "hono";
import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode, sign, verify} from 'hono/jwt'
import { signupSchema } from "@sudheer0071/medium-common";

const userRouter = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET:string
  }
}>()

 
userRouter.post('/signup', async (c) => {
  // const dbUrl = c.env.DATABASE_URL
  const prisma = new PrismaClient({ 
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

const body = await c.req.json()
console.log("body: "+body.password);

const {success} = signupSchema.safeParse(body)
if (!success) {
  return c.json({message:'Make sure to enter email in correct formate and password must be more than 5 characters'})
}
const alreadyExist = await prisma.user.findUnique({
  where:{email:body.email}
})
if (alreadyExist) {
  return c.json({message:"User already Exists!"})
}

else{
  const uesr =  await prisma.user.create({
    data:{
      name:body.name,
      email:body.email,
      password:body.password
    }
  }) 
  
const token = await sign({id:uesr.id},c.env.JWT_SECRET)  

  return c.json({message:"user created successfully",token:token})
}
})  
 
userRouter.post('/signin',async (c) => {
  // const dbUrl = c.env.DATABASE_URL
  const prisma = new PrismaClient({ 
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

const body = await c.req.json()
const exist = await prisma.user.findUnique({
where:{email:body.email}
})
const credentials = await prisma.user.findUnique({
  where:{email:body.email,password:body.password}
})
if (!exist) {
return c.json({message:"User not found"})
}

if (!credentials) {
  return c.json({message:"wrong credentials"})
  
}
else{ 
const token = await sign({id:credentials.id},c.env.JWT_SECRET)  

return c.json({message:"fetching detials...",token:token, name:credentials.name})
}
})  
 
export {userRouter}