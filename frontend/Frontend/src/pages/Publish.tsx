import axios from "axios"
import { Appbar } from "../components/Appbar" 
import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"

export const Publish = () =>{
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [popup, setPopup] = useState("")
  const [isOpen, setIsopen] = useState(false) 
  const [file, setFile] = useState<File | null>(null) 
  const navigate = useNavigate()


  const handleFileChange = (event:ChangeEvent<HTMLInputElement>)=>{
    if(event.target.files){
      setFile(event.target.files[0])
    }
  }

  const photoUpload = async (event:FormEvent<HTMLFormElement>)=>{ 
    event.preventDefault()  
    if (title==''||content==''||!file) {
      console.log("emptyy"); 
      setTimeout(() => {
        setIsopen(false),
        setPopup('')
      }, 2000);
      setIsopen(true),
      setPopup('Please enter all feilds') 
    }
    else{
      const formData = new FormData() 
      formData.append('file',file)   
      const uploadFiles = formData.get('file') as File; 
      console.log("file: "+file);
      
      setIsopen(true)
      setPopup('Creating...') 
      const response = await axios.post(`${BACKEND_URL}/api/v1/blogs`,{
         title,  content, uploadFiles
      },{
        headers:{  
          "Content-Type":"multipart/form-data",
          authorization:localStorage.getItem('token')
        }
      }) 
      setTimeout(() => {
        setIsopen(false),
        setPopup('')
        localStorage.setItem('id',response.data.blog.id)
        navigate(`/blog/${response.data.blog.id}/`)
        console.log("id: "+response.data.blog.id);
        
      }, 2000);
      setIsopen(true),
      setPopup(response.data.message) 
    }      
  }
 
  return <div className="  "> 
  <div className="flex justify-center">
  <div className={`popup ${isOpen ? 'active' : 'hide'} ${popup.includes('feilds') || popup.includes('found')||popup.includes('wrong')||popup.includes('already')||popup.includes('Error')?'bg-red-400 p-2 h-10': ''} flex justify-center text-center w-80 shadow-slate-500 shadow-lg bg-green-500 rounded-lg font-medium text-lg fixed top-4 h-11 p-1`}>{popup}</div>
  </div>
  <Appbar name={localStorage.getItem('name')} write={false} />
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
    <form onSubmit={photoUpload }>
    <TextEditor onchange={(e)=>{
      setContent(e.target.value)
    }}/> 
        <input type="file" onChange={handleFileChange}  /> 
    <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-300 hover:bg-blue-800">
         Publish post
     </button>
      </form>
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