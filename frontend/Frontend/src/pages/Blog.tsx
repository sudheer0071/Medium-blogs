 
import { Appbar } from "../components/Appbar";
import { Avatar } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeletons";
import { ViewBlog } from "../components/ViiewBlog";
import { useBlog } from "../hooks";

Avatar
export function Blog(){
 const {loading, blog} = useBlog({id:localStorage.getItem('id')||''})  
 console.log("id of blog: "+localStorage.getItem('id'));
 return <div>
         <Appbar name={localStorage.getItem('name')} /> 
 {loading?(<div className=" flex justify-center flex-col w-3/4 items-center">
  <BlogSkeleton />
  <BlogSkeleton />
 </div>):(<div>
 <ViewBlog blog={blog}/>
 </div>)}
 </div>  
}