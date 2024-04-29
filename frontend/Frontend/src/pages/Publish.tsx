import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () =>{
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate()
  return <div className="  "> 
  <Appbar name={localStorage.getItem('name')} />
  <div className=" flex justify-center w-full">
    <div className=" max-w-sm md:max-w-screen-sm w-full lg:max-w-screen-lg sm:max-w-screen-sm">
    <label   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
<input onChange={(e)=>{
  setTitle(e.target.value)
}} type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    dark:placeholder-gray-400 font-medium dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" />
 
    </div>
  </div>
  <div className=" flex justify-center w-full pt-12">
  <div className=" max-w-sm md:max-w-screen-sm w-full lg:max-w-screen-lg sm:max-w-screen-sm">
    <TextEditor onchange={(e)=>{
      setContent(e.target.value)
    }}/>
    <button onClick={async () => {  
      console.log(localStorage.getItem('token'));
       
      const response = await axios.post(`https://backend.sam7655677280.workers.dev/api/v1/blogs`,{
        title:title, content:content
      },{
         headers:{
          authorizaton:localStorage.getItem('token')
         }
      })
      navigate(`/blog/${response.data.id}`)
     }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-300 hover:bg-blue-800">
         Publish post
     </button>
  </div>
  </div>

  </div>
}

 
function TextEditor({onchange}:{onchange:(e:ChangeEvent<HTMLTextAreaElement>) => void}){
  return  <form>
     <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50  ">
     
         <div className="px-4 py-2 bg-white rounded-b-lg  ">
             <label  className="sr-only">Publish post</label>
             <textarea onChange={onchange} id="editor" rows={8} className="block w-full font-medium px-0 text-md text-gray-800 bg-white border-0 focus:outline-none dark:placeholder-gray-400" placeholder="Write a blog..." required ></textarea>
         </div>
     </div> 
  </form>
  
}