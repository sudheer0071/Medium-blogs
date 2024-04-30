import { Link } from "react-router-dom"
import { Save } from "../icons/Save"
import { Less } from "../icons/Less"
import { More } from "../icons/More"

interface BlogCardProps{
  authorName:string,
  title:string,
  content:string,
  publishDate:any,
  id:string
}

export const BlogCard = ({authorName,title,content,publishDate,id}:BlogCardProps) =>{ 
  
  return <Link to={`/blog/${id}`}>
    <div className=" flex">
  <div className=" w-full py-4 cursor-pointer" onClick={()=> localStorage.setItem('id',id)}>
    <div className="flex justify-start">
    <div className="">
     <Avatar size={5} name={authorName|| 'Annoymous'}/> {authorName}  
    </div>
    <div className=" flex justify-center flex-col pl-2">
       <div className=" w-1 h-1 rounded-full bg-slate-500">

       </div>
    </div>
    <div className=" pl-2 font-thin text-slate-500">
      {publishDate}
    </div>
    </div>
    <div className=" text-md font-extrabold sm:font-bold pt-2 max-w-sm md:max-w-screen-sm w-full lg:max-w-screen-lg sm:max-w-screen-sm sm:text-2xl md:text-2xl lg:text-2xl ">
      {title}
    </div>
    <div className="text-lg max-w-sm md:max-w-screen-sm w-full lg:max-w-screen-lg sm:max-w-screen-sm md:inline lg:inline sm:inline hidden">
      {content.slice(0,227)+"..."}
    </div>
    <div className=" flex justify-between py-5">
      <div className=" text-slate-600">
        {`${ Math.ceil(content.length/100)} min read`} 
      </div>
      <div className="flex -mr-20 sm:mr-5">
        <div>
          <Save/>
        </div>
        <div className=" px-3">
          <Less/>
        </div>
        <div>
          <More/>
        </div>
      </div>
    </div>
    <div className=" bg-slate-100 h-px w-full"></div>
  </div>
  <div className="flex justify-center items-center pr-2 mb-5 w-28 max-w-sm md:px-4 lg:px-6 sm:px-10 sm:w-60 md:w-52">
    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*TQlEMeYwwWc38Wqm7EfCTg.png" alt="" />
  </div>
    </div>
  </Link> 
}

export function Avatar({ name,size,text_size='xs' }:{name: string,size?:number, text_size?:string}){
  return <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-300`}>
  <span className={` text-gray-600 text-${text_size}`}>{name.split(' ')[0][0].toUpperCase() }</span>
</div>
}