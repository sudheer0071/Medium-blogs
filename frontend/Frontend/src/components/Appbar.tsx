import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export function Appbar({name}:any){
  return <div className=" border-b flex justify-between px-10 py-4 bg-slate-100">
    <div>
    <Link to={'/blogs'}>
    <div className=" flex items-center">
      Medium
    </div>
    </Link>
    </div>
    <div className="flex justify-center"> 
    <div className=" flex items-center">
    <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2   ">Publish</button>  
    </div>
    <div className=" px-3 flex items-center">
      ...
    </div>
    <div className=" flex justify-center items-center px-4">
      notification
    </div>
    <div className="flex items-center">
      <Avatar size={9} text_size={'lg'} name={name}/>       
    </div>
    </div>
  </div>
}

