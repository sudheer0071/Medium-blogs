import axios from "axios";
import { useEffect, useState } from "react" 
import { BACKEND_URL } from "../config";


  export interface Blogs{ 
    id:string
    title: string
    content: string 
    date: any
    author: {
        name:string
    }
  }
export const useBlog = ({id}:{ id:string }) =>{
  const [loading, setLoading]= useState(true)
  const[blog,setBlog] = useState<Blogs[]>([]);

  useEffect(()=>{
    axios.get(`${BACKEND_URL}/api/v1/blogs/${id}`,{
      headers:{
        Authorization:localStorage.getItem('token')
      }
    })
    .then(response => {
      setBlog(response.data.blog);
      setLoading(false)
      console.log('data blog: '+response.data.blog);
      
    })
  },[id])
  return {
    loading,
    blog
  }
}
export const  useBlogs = ()=>{

  const [loading, setLoading]= useState(true)
  const[blogs,setBlogs] = useState<Blogs[]>([]);

  useEffect(()=>{
    axios.get(`${BACKEND_URL}/api/v1/blogs/bulk`,{
      headers:{
        Authorization:localStorage.getItem('token')
      }
    })
    .then(response => {
      setBlogs(response.data.blogs);
      setLoading(false)
      console.log('data: '+response.data.blogs);
      
    })
  },[])
  return {
    loading,
    blogs
  }
}