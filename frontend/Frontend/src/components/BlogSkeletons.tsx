import { Avatar } from "./BlogCard"

export const BlogSkeleton = () =>{ 
  return <div>
 <div role="status" className="w-full py-4 animate-pulse"> 
    <div className="flex justify-start">
    <div>
       <div className="h-2 bg-gray-200 rounded-full  w-48 mb-4"></div> 
    </div>
    
    <div className=" pl-2 font-thin text-slate-500">
    <div className="h-2 bg-gray-200 rounded-full  w-48 mb-4"></div>
    </div>
    </div>
    <div className=" text-2xl font-bold pt-2">
    <div className=" h-5 bg-gray-200 rounded-full  mb-4"></div>
    <div className=" h-5 bg-gray-200 rounded-full w-48 mb-4"></div>
    </div>
    <div className="text-xl">
  <div className="h-2.5 bg-gray-200 rounded-full  mb-4"></div>
  <div className="h-2.5 bg-gray-200 rounded-full  mb-4"></div>
  <div className="h-2.5 bg-gray-200 rounded-full  mb-4"></div>
  <div className="h-2.5 bg-gray-200 rounded-full  mb-4"></div>
      
    </div>
    <div className=" flex justify-between py-5">
      <div className=" font-light">
  <div className="h-2.5 bg-gray-200 rounded-full   w-48 mb-4"></div>
        
      </div>
      <div className=" ">
      <div className="h-2.5 bg-gray-200 rounded-full w-20 mb-4"></div> 
      </div>
    </div>
    <div className=" bg-slate-100 h-px w-full"></div> 
</div>
 {/* <div className=" py-4 cursor-pointer">
    <div className="flex justify-start">
    <div>
     <Avatar size={6} name={'authorName sdfasdfjkls'}/> {'authorName'}  
    </div>
    <div className=" flex justify-center flex-col pl-2">
       <div className=" w-1 h-1 rounded-full bg-slate-500">

       </div>
    </div>
    <div className=" pl-2 font-thin text-slate-500">
      {'publishDate'}
    </div>
    </div>
    <div className=" text-2xl font-bold pt-2">
      {'title'}
    </div>
    <div className="text-xl">
      {'content'.slice(0,127)+"..."}
    </div>
    <div className=" flex justify-between py-5">
      <div className=" font-light">
        {`${ Math.ceil('content'.length/100)} min read`} 
      </div>
      <div className=" ">
        icons
      </div>
    </div>
    <div className=" bg-slate-100 h-px w-full"></div>
  </div> */}
   {/* <div role="status" className="max-w-sm animate-pulse">
  <div className="h-2.5 bg-gray-200 rounded-full   w-48 mb-4"></div>
  <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
  <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
  <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
  <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
  <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
  </div> */}
  <span className="sr-only">Loading...</span>
</div>
}