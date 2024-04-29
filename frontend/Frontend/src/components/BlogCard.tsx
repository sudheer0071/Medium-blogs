import { Link } from "react-router-dom"

interface BlogCardProps{
  authorName:string,
  title:string,
  content:string,
  publishDate:any,
  id:string
}

export const BlogCard = ({authorName,title,content,publishDate,id}:BlogCardProps) =>{
  return <Link to={`/blog/${id}`}>
  <div className=" w-full py-4 cursor-pointer" onClick={()=> localStorage.setItem('id',id)}>
    <div className="flex justify-start">
    <div>
     <Avatar size={6} name={authorName}/> {authorName}  
    </div>
    <div className=" flex justify-center flex-col pl-2">
       <div className=" w-1 h-1 rounded-full bg-slate-500">

       </div>
    </div>
    <div className=" pl-2 font-thin text-slate-500">
      {publishDate}
    </div>
    </div>
    <div className=" text-2xl font-bold pt-2">
      {title}
    </div>
    <div className="text-xl">
      {content.slice(0,127)+"..."}
    </div>
    <div className=" flex justify-between py-5">
      <div className=" font-light">
        {`${ Math.ceil(content.length/100)} min read`} 
      </div>
      <div className=" ">
        icons
      </div>
    </div>
    <div className=" bg-slate-100 h-px w-full"></div>
  </div>
  </Link> 
}

export function Avatar({ name,size,text_size='xs' }:{name: string,size?:number, text_size?:string}){
  return <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-300`}>
  <span className={` text-gray-600 text-${text_size}`}>{name.split(' ')[0][0].toUpperCase()+name.split(' ')[1][0].toUpperCase()}</span>
</div>
}