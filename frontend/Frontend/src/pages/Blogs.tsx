import { Appbar } from "../components/Appbar"
import { Avatar, BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeletons"
import { useBlogs } from "../hooks"

export function Blogs(){
  // store it in state
  // stor it directly here
  const {loading, blogs} = useBlogs()
  return <div> 
         <Appbar name={localStorage.getItem('name')} /> 
    {loading?
       (  <div className="flex justify-center flex-col items-center">
          <div className=" w-3/4 md:max-w-screen-2xl"> 
       <BlogSkeleton/> 
       <BlogSkeleton/> 
       <BlogSkeleton/> 
        </div>
     </div>) :
   
    ( <div> 
       <div className="flex justify-center flex-col items-center">
       <div className=" -ml-96 flex justify-center p-12"> 
       <div className=" px-4">
         For you
       </div>
       <div >
         Following
       </div>
       </div>
       <div className="p-2 max-lg:max-w-xl ">
         {blogs.map((blog,index)=> <BlogCard key={index} id={blog.id} title={blog.title} content={blog.content} authorName={blog.author.name} publishDate={blog.date}/>)}
         
       </div>
       </div>
     </div>)}
  </div>
   }