import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeletons"
import { useBlogs } from "../hooks"
import { Plus } from "../icons/Plus"

export function Blogs(){
  // store it in state
  // stor it directly here
  const {loading, blogs} = useBlogs()
  console.log(localStorage.getItem('token'));
  
  return <div>
         <Appbar name={localStorage.getItem('name')} write={true} /> 
   <div className=" px-6"> 
    {loading?
       (  <div className=" flex justify-center">
          <div className="max-w-sm md:max-w-screen-sm w-full lg:max-w-screen-lg sm:max-w-screen-sm">   
       <BlogSkeleton/>
       <BlogSkeleton/>
       <BlogSkeleton/>
        </div>
     </div>) :
   
    ( <div> 
       <div className="flex justify-center flex-col items-center ">
       <div className= "flex border-b-2 p-6 max-w-sm md:max-w-screen-sm w-full lg:max-w-screen-lg sm:max-w-screen-sm">  
       <div className="">
        <Plus/>
       </div>
       <div className=" px-4">
         For you
       </div>
       <div >
         Following
       </div> 
       </div>
       <div className="max-w-sm md:max-w-screen-sm w-full lg:max-w-screen-lg sm:max-w-screen-sm"> 
         {blogs.map((blog,index)=> <BlogCard key={index} imageUrl={blog.image} updatedOn={blog.updatedOn} id={blog.id} title={blog.title} content={blog.content} authorName={blog.author.name} publishDate={blog.date}/>)}
         
       </div>
       </div>
     </div>)}
  </div>
  </div>
   }