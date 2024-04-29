 
import { Appbar } from "../components/Appbar";
import { Avatar } from "../components/BlogCard";
import { ViewBlogSkelaton } from "../components/BlogSkeletons";
import { ViewBlog } from "../components/ViiewBlog";
import { useBlog } from "../hooks";

Avatar
export function Blog(){
 const {loading, blog} = useBlog({id:localStorage.getItem('id')||''})  
 console.log("id of blog: "+localStorage.getItem('id'));
 return <div>
         <Appbar name={localStorage.getItem('name')} /> 
 {loading || !blog?(<div>
  <ViewBlogSkelaton /> 
 </div>):(<div>
 <ViewBlog blog={blog}/>
 </div>)}
 </div>  
}