import React, { useCallback, useEffect, useRef, useState } from 'react';

function Passwordgenerator() {
  const [size,setSize]=useState(5);
  const [upper,setUpperCase]=useState(false);
  const [special,setSpecialChar]=useState(false);
  const [password,setPassword]=useState('');
  const handleSize=(e)=>{
    setSize(e.target.value)
  }
  const passwordGenerator =useCallback(()=>{
    let charSet="abcdefghijklmnopqrstuvwxyz";
  if(upper){
    charSet+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
   if(special){
    charSet+="!@#$%^&*()_+[]{}|;:,.<>?";
  }
    let password='';
    
    for(let i=0;i<size;i++){
      const randomPass=Math.floor(Math.random()*charSet.length)
      password+=charSet[randomPass]
    }
  
   setPassword(password)

  },[size,upper,special])
  useEffect(()=>{
    passwordGenerator()
  },[passwordGenerator])
  const refernce=useRef(null)
  const copyPassword=()=>{
    refernce.current.select();
    window.navigator.clipboard.writeText(refernce.current.value)
  }
 
  return (
    <div>
      <>
      <h1 className='font-bold'>Password Generator</h1>
      <input type="text" placeholder="Enter password length" className='border border-gray-500 w-xl p-1  ' value={password}  ref={refernce} />
      <button className='bg-blue-600 p-1 border-2 border-blue-600 cursor-pointer' onClick={copyPassword} >Copy</button>
     <div>
       <input type='range' min='1' max='100' className='m-2'  onChange={handleSize} value={size}/>
       <label htmlFor="size"> size:{size} </label>
      <input type='checkbox' className='border border-gray-500 m-2 ' checked={upper} onChange={(e)=>setUpperCase(e.target.checked)} /> Include Uppercase Letters
      <input type='checkbox' className='border border-gray-500 m-2'  checked={special}  onChange={(e)=>setSpecialChar(e.target.checked)} /> Special Characters
     </div>
      </>
    </div>
  )
}

export default Passwordgenerator
