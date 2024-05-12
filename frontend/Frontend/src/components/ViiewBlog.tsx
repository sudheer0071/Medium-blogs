import { useNavigate } from "react-router-dom"
import { Blogs } from "../hooks"  
import { Avatar } from "./BlogCard"
import { FilePenLine } from 'lucide-react';
export const ViewBlog = ({blog}:{blog: Blogs})=>{ 
  console.log("author name: "+blog.author.name);
  console.log("author name on localstorage: "+localStorage.getItem('name'));
  
   const navigate = useNavigate()
  return  <div className=" flex justify-center">
  <div className=" grid grid-cols-12 px-10 pt-12 w-full max-w-screen-xl">
    <div className=" col-span-full sm:col-span-8 max-w-2xl">
    <div className=" text-3xl font-bold sm:text-5xl">
      {blog.title || 'title'}
    </div>
    <div className=" font-medium text-slate-400 pt-2">
    {blog.updatedOn!=''?'Updated On '+blog.updatedOn:'Published on '+blog.date}
    {/* Published on {blog.date} */}
    </div>
    <div className=" mt-8">
      <img src={blog.image} alt="" />
    </div>
    <div className=" pt-3 text-lg p">
    {blog.content}
    </div>
    </div>

    <div className=" ml-10 col-span-4 "> 
    <div className=" text-lg text-slate-600  sm:inline hidden">
      Author
    </div>
    <div className=" hidden w-full sm:flex">
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
    
    {blog.author.name == localStorage.getItem('name')?.toLowerCase()?<div className=" fixed right-3 -m-px text-slate-500 top-9 sm:relative sm:right-0 sm:top-0"> <div className=" mt-8 h-10 sm:bg-slate-300 hover:bg-none sm:hover:bg-slate-400 cursor-pointer rounded-md flex justify-center " onClick={()=> { 
      localStorage.setItem('title',blog.title)
      localStorage.setItem('content',blog.content)
      navigate(`/blog/${blog.id}/edit`)} } >
    <FilePenLine className=" w-9 h-9 p-1"/>
    </div></div> :null}
  
    </div>
  </div>
    </div> 
}