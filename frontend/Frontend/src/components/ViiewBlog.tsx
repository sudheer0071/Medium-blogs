import { Blogs } from "../hooks" 
import { Avatar } from "./BlogCard"

export const ViewBlog = ({blog}:{blog: Blogs})=>{
  return  <div className=" flex justify-center">
  <div className=" grid grid-cols-12 px-10 pt-12 w-full max-w-screen-xl">
    <div className=" col-span-full sm:col-span-8">
    <div className=" text-4xl font-bold sm:text-5xl">
      {blog.title || 'title'}
    </div>
    <div className=" font-medium text-slate-400 pt-2">
       Published on {blog.date||'no data'}
    </div>
    <div className=" pt-3 text-lg p">
    {blog.content}
    </div>
    </div>

    <div className=" p-3 col-span-4 md:inline lg:inline sm:inline hidden"> 
    <div className=" text-lg text-slate-600">
      Author
    </div>
    <div className=" flex w-full">
      <div className=" pr-4 flex flex-col justify-center">
      <Avatar size={7} text_size="sm" name={blog.author.name || "Annonymus"} />
      </div>
      <div>
    <div className=" text-2xl font-bold ">
      {blog.author.name || "Anonymus"}
    </div>
    <div className=" text-slate-500">
      Master of mirth, purveyor of puns, and the funniest person in the kingdom
    </div>
      </div>
    </div>
    </div>
  </div>
    </div> 
}