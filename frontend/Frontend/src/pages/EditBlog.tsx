import { useNavigate, useParams } from "react-router-dom"
import { ChangeEvent, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { Appbar } from "../components/Appbar"


export const EditBlog= ()=>{
  const [title, setTitle] = useState<string | null>(localStorage.getItem('title'))
  const [content, setContent] = useState<string |null>(localStorage.getItem('content'))
  const [popup, setPopup] = useState("")
  const [isOpen, setIsopen] = useState(false) 
  const [cursor,setCursor] = useState(true)
  // const [file, setFile] = useState<File | null>(null)
  const navigate = useNavigate()

 const {id} = useParams()
  // const handleFileChange = (event:ChangeEvent<HTMLInputElement>)=>{
  //   if(event.target.files){
  //     setFile(event.target.files[0])
  //   }
  // }

  // const photoUpload = async (event:FormEvent<HTMLFormElement>)=>{ 
  //   event.preventDefault()
  //   if (!file) {
  //     console.error("no file selected");
  //     return
  //   }
  //   const formData = new FormData()
    
  //   formData.append('file',file)
  //   console.log("formdata: "+formData);
  //     const response = await axios.post(`${BACKEND_URL}/api/v1/blogs/upload`, 
  //       {formData}
  //     ,{
  //       headers:{
  //         'Content-Type': 'multipart/form-data',
  //         authorization:localStorage.getItem('token')
  //       }
  //     })
  //     console.log("response: "+response.data); 
  // }

  return <div className="  "> 
  <div className="flex justify-center">
  <div className={`popup ${isOpen ? 'active' : 'hide'} ${popup.includes('feilds') || popup.includes('found')||popup.includes('wrong')||popup.includes('already')?'bg-red-400 p-2 h-10': ''} flex justify-center text-center w-80 shadow-slate-500 shadow-lg bg-green-500 rounded-lg font-medium text-lg fixed top-4 h-11 p-1`}>{popup}</div>
  </div>
  <Appbar name={localStorage.getItem('name')} write={false} />
  <div className=" flex justify-center w-full">
    <div className=" max-w-sm md:max-w-screen-sm w-full lg:max-w-screen-lg sm:max-w-screen-sm">
    <label   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
<input value={title || ''} onChange={(e)=>{
  setCursor(false)
  setTitle(e.target.value)
}} type="email" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    dark:placeholder-gray-400 font-medium dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" />
    </div>
  </div>
  <div className=" flex justify-center w-full pt-12">
  <div className=" max-w-sm md:max-w-screen-sm w-full lg:max-w-screen-lg sm:max-w-screen-sm">
    <TextEditor value={content||''} onchange={(e)=>{
      setCursor(false)
      setContent(e.target.value)
    }}/> 
      {/* <form onSubmit={photoUpload}>
        <input type="file" id="myFile" name="filename"  onChange={handleFileChange}  />
        <button type="submit">Upload</button>
      </form> */}
    <button onClick={async () => {    
      if (!cursor) {
        if (title==''||content=='') {
          console.log("emptyy"); 
          setTimeout(() => {
            setIsopen(false),
            setPopup('')
          }, 2000);
          setIsopen(true),
          setPopup('Please enter all feilds') 
        }
        else{
          setIsopen(true)
          setPopup('Updating...')
          console.log("id: "+id);
          
          const response = await axios.put(`${BACKEND_URL}/api/v1/blogs`,{
            title:title, content:content,id
          },{
            headers:{ 
              authorization:localStorage.getItem('token')
            }
          }) 
          setTimeout(() => {
            setIsopen(false),
            setPopup('') 
            navigate(`/blog/${id}/`) 
            
          }, 2000);
          setIsopen(true),
          setPopup(response.data.message) 
        }
      }
    }} type="submit" className={`inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white rounded-lg  ${cursor?'bg-blue-400 cursor-not-allowed':' cursor-pointer bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-300'}`}>
         Publish post
     </button>
  </div>
  </div>
  </div> 
}

function TextEditor({onchange,value}:{onchange:(e:ChangeEvent<HTMLTextAreaElement>) => void, value:string}){
  return  <form>
     <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50  ">
     
         <div className="px-4 py-2 bg-white rounded-b-lg  ">
             <label  className="sr-only">Publish post</label>
             <textarea value={value} onChange={onchange} id="editor" rows={8} className="block w-full font-medium px-0 text-md text-gray-800 bg-white border-0 focus:outline-none dark:placeholder-gray-400" placeholder="Write a blog..." required ></textarea>
         </div>
     </div> 
  </form>
  
}