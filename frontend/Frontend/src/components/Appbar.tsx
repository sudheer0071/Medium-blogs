import { Link, useNavigate } from "react-router-dom"
import { Avatar } from "./BlogCard" 
import { Medium } from "../icons/Medium"


export function Appbar({name,write}:{name:any, write?:boolean}){
  const navigate = useNavigate()
  return <div className=" border-b flex justify-between px-6 py- bg-slate-100">
    <div>
    <Link to={'/blogs'}>
    <div className=" flex items-center">
       <Medium/>
    </div>
    </Link>
    </div>
    <div className="flex justify-center"> 
    {write?(<div className=" flex items-center px-4 cursor-pointer" onClick={()=>navigate('/publish')}>
    <svg width="24"  height="24" viewBox="0 0 24 24" fill="none" aria-label="Write"><path d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z" fill="currentColor"></path><path d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2" stroke="currentColor"></path></svg><p className=" px-2 text-slate-600">Write</p> 
    </div> ):''}
    
    <div className=" flex justify-center items-center pr-9">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Notifications"><path d="M15 18.5a3 3 0 1 1-6 0" stroke="currentColor" stroke-linecap="round"></path><path d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z" stroke="currentColor" stroke-linejoin="round"></path></svg>
    </div>
    <div className="flex items-center">
      <Avatar size={7} text_size={'lg'} name={name}/>       
    </div>
    </div>
  </div>
}

