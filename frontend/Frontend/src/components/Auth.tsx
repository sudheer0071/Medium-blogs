import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import {signupInput} from '@sudheer0071/validations'
import axios from 'axios'
import { BACKEND_URL } from "../config";
import { Medium } from "../icons/Medium";
import { Loader } from "./Loader";
export const Auth = ({type}:{type:"signup"| "signin"}) =>{
  const [popup, setPopup] = useState("")
  const [isOpen, setIsopen] = useState(false) 
const [loader, setLoader] = useState(false)

  const [postInputs, setPostInputs] = useState<signupInput>({
    name:'',
    email:'',
    password:''
  })
const navigate = useNavigate()
  async function sendRequest(){
    console.log(postInputs.name, postInputs.email, postInputs.password);
    if (postInputs.email==''||postInputs.password=='') {
      console.log("emptyy"); 
      setTimeout(() => {
        setIsopen(false),
        setPopup('')
      }, 2000);
      setIsopen(true),
      setPopup('Please enter all feilds')
    }
    
    else{
      setLoader(true)
      const res = await axios.post(`${BACKEND_URL}/api/v1/users/${type=='signin'?'signin':'signup'}`,{
       name:postInputs.name,
       email:postInputs.email,
       password:postInputs.password
      })
      const token = res.data.token
      const message = res.data.message 
      localStorage.setItem('name', type=='signin'?res.data.name:postInputs.name) 
      localStorage.setItem('token',token)
      if (message.includes('wrong')||message.includes('found')||message.includes('wrong')) {
        setTimeout(() => {
          setIsopen(false),
          setLoader(false)
          setPostInputs({name:' ',email:' ',password:' '})
          setPopup('') 
        }, 2000);
        setIsopen(true)
        setPopup(message)
      }
      else{
        setTimeout(() => {
          setIsopen(false),
          setLoader(false)
          setPopup('')
          navigate('/blogs')
        }, 2000);
        setIsopen(true)
        setPopup(message)
      }
      }  
  }
 return <div>
  <div>
      <Medium/>
      <div className={`popup ${isOpen ? 'active' : 'hide'} ${popup.includes('feilds') || popup.includes('found')||popup.includes('wrong')||popup.includes('already')?'bg-red-400 p-2 h-16': ''} flex justify-center text-center w-80 shadow-lg bg-green-500 rounded-lg ml-10 font-medium text-lg fixed top-4 h-11 p-1`}>{popup}</div>
    </div>
  <div className=" h-screen flex justify-center flex-col"> 
<div className="flex justify-center">
  <div>
 <div className=" text-3xl font-bold text-center">
 Create an account <br /><br />
 </div>
 <div className=" w-96">
  {type=='signup'?
  <InputBox onChange={(e)=>{setPostInputs({
    ...postInputs,
    name:e.target.value
  })}} label="Username" placeholder='Enter your username'/>:null}
  
  <InputBox onChange={(e)=>{setPostInputs({
    ...postInputs,
    email:e.target.value
  })}} label="Email" placeholder='m@example.com'/>
  <InputBox onChange={(e)=>{setPostInputs({
    ...postInputs,
    password:e.target.value
  })}}  
  onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendRequest();
    }
  }}
   label="Password" placeholder='Must be more than 5 character' password=' '/>
  <Button onclick={sendRequest} label={type=='signin'?'Sign In':'Sign Up'} height={1} loader={loader}/>
 </div>
 <div className=" text-gray-400 text-center"> 
  {type=="signin"?('No Account?'):'Alreedy have and account?'}
  <Link className=" pl-2 underline" to={type=='signin'?'/signup':'/signin'}>{type=='signin'?'Sign Up':'Log In'}</Link>
 </div>
  </div> 
</div>
 </div>
 </div>
}

interface LabeledInputType {
  placeholder:string;
  label:string;
  onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
  password?:string;  
  empty?:"";
  onKeyPress?:any
}
export function InputBox({onKeyPress,placeholder, label, onChange, password,  empty}:LabeledInputType){     
  // console.log("label: "+empty);   
  return <div className=" py-3"> 
      <div className="text-md font-semibold text-left py-1">
        {label}
      </div>
      <input onChange={onChange } onKeyDown={onKeyPress} className={`${empty?'error':''} w-full h-10 px-2 border rounded font-medium border-slate-200 py-1 bg-white border-1`} type={password?'password':"text"} placeholder={placeholder} />
  </div>
}
type props = {
  onclick:any,
  label:String,
  loader:boolean,
  height:number
}

export function Button({height=2,onclick, label, loader}:props){
   
  return <div className="py-4">
    <button className={`loader h-${height} bg-slate-800 text-slate-100 py-2 px-3 rounded-md w-full h-10 focus:outline-none focus:ring-4 focus:ring-gray-300 hover:bg-slate-700 `} onClick={onclick}>{loader? 
    <Loader/> 
    : label} 
    </button> 
  </div>
}