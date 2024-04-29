 
export const BlogSkeleton = () =>{ 
  return <div className="flex">
 <div role="status" className=" w-full py-4 animate-pulse "> 
    <div className="flex justify-start">
    <div>
       <div className="h-2 bg-gray-200 rounded-full  w-48 mb-4"></div> 
    </div>
    
    <div className=" pl-2 font-thin text-slate-500">
    <div className="h-2 bg-gray-200 rounded-full  w-48 mb-4"></div>
    </div>
    </div>
    <div className=" text-2xl ">
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
  <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        
      </div>
      <div className=" ">
      <div className="h-2.5 bg-gray-200 rounded-full w-20 mb-4"></div> 
      </div>
    </div>
    <div className=" bg-slate-100 h-px w-full"></div> 
</div> 
<div role="status" className="animate-pulse flex justify-center items-center pr-2 mb-5 w-28 max-w-sm md:px-4 lg:px-6 sm:px-10 sm:w-60 md:w-52">
<div className="h-32 w-32 rounded-lg bg-gray-200 mb-4"></div>  
  </div>
  <span className="sr-only">Loading...</span>
</div>
}

export const ViewBlogSkelaton = ()=>{
  return <div role="status" className=" animate-pulse flex justify-center">
  <div className=" grid grid-cols-12 px-10 pt-12 w-full max-w-screen-xl">
    <div className=" col-span-full sm:col-span-8">
    <div className=" text-4xl font-bold sm:text-5xl">
    <div className=" h-8 bg-gray-200 rounded-full  mb-4"></div>
    <div className=" h-8 bg-gray-200 rounded-full w-48 mb-4"></div>
    </div>
    <div className=" font-medium text-slate-400 pt-2">
    <div className="h-2 bg-gray-200 rounded-full w-48 sm:w-96 mb-4"></div> 

    </div>
    <div className=" pt-3 text-lg p">
    <div className="h-2.5 bg-gray-200 rounded-full  mb-4"></div>
  <div className="h-2.5 bg-gray-200 rounded-full  mb-4"></div>
  <div className="h-2.5 bg-gray-200 rounded-full  mb-4"></div>
  <div className="h-2.5 bg-gray-200 rounded-full  mb-4"></div>
  <div className="h-2.5 bg-gray-200 rounded-full  mb-4"></div>
  <div className="h-2.5 bg-gray-200 rounded-full  mb-4"></div>
  <div className="h-80 bg-gray-200 mb-4"></div>
  <div className="h-2.5 bg-gray-200 rounded-full  mb-4"></div>
  <div className="h-2.5 bg-gray-200 rounded-full  mb-4"></div>
  <div className="h-2.5 bg-gray-200 rounded-full  mb-4"></div>
    </div>
    </div>

    <div className=" px-32 col-span-4 md:inline lg:inline sm:inline hidden"> 
    <div className=" text-lg text-slate-600">
    <div className=" h-5 bg-gray-200 rounded-full w-48 mb-4"></div>

    </div>
    <div className=" flex w-full">
      <div className=" pr-4 flex flex-col justify-center">
      <div className=" h-5 bg-gray-200 rounded-full w-5 mb-4"></div>

      </div>
      <div>
    <div className=" text-2xl font-bold ">
    <div className=" h-5 bg-gray-200 rounded-full w-48 mb-4"></div>
    </div>
    <div className=" text-slate-500">
    <div className="h-2.5 bg-gray-200 rounded-full w-96 mb-4"></div>
    <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>

    </div>
      </div>
    </div>
    </div>
  </div>
    </div> 
}