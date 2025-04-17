import React, { useRef, useState } from 'react'
import Header from './Header'
import checkValidData from '../utils/validation'

//rafce - react arrow func component export
const Login = () => {

  const[isSignIn, setIsSignIn] = useState(true)

  const email = useRef(null);
  const password = useRef(null);

  const toggelSignInForm = () =>{

    setIsSignIn(!isSignIn);
  }

  const handleButtonClick = () =>{
   
     // checkValidData()
     console.log(email.current.value)
     console.log(password.current.value)

     const msg = checkValidData(email.current.value,password.current.value)
     
     if(msg == null) return console.log( "sucessfull")
     console.log(msg)
    
     
  }

  return (
    <div  >

      <Header/>

      <div className='absolute '>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_small.jpg" alt="logo"/>
    </div>
    
   
    
    <form onSubmit={(e)=> e.preventDefault()}  className='absolute p-12 bg-black/70 w-3/12 my-36 mx-auto right-0 left-0 flex flex-wrap rounded-lg text-white '>
       <h1 className=' m-2 mb-3 font-bold text-2xl'>{isSignIn? "Sign In" : "Sign Up"}</h1>
     
     { !isSignIn &&
       <input type="text" placeholder='Full Name' className='my-3 p-2 bg-gray-600 rounded-xs w-full'/>}

     <input
     ref={email} type="Email" placeholder='Email Address' className='my-3 p-2 bg-gray-600 rounded-xs w-full'/>

      <input 
      ref={password} type="password" placeholder='Password' className='my-3 p-2 bg-gray-600 rounded-xs w-full' />

      <button className='p-2 my-3 bg-red-700 rounded-xs  w-full cursor-pointer' onClick={handleButtonClick}>{isSignIn? "Sign In" : "Sign Up"}</button>

      <p className='py-4 text-xs font-bold cursor-pointer' onClick={toggelSignInForm}>{isSignIn? "New to Netflix?  Sign Up Now." : "Already Registered User? Sign In"} </p>
    </form>
    </div>
    
    
  )
} 

export default Login
