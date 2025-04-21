import React, { useRef, useState } from 'react'
import Header from './Header'
import checkValidData from '../utils/validation'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";



//rafce - react arrow func component export
const Login = () => {

  const[isSignIn, setIsSignIn] = useState(true)
  const[errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const email = useRef(null);
  const password = useRef(null);

  const toggelSignInForm = () =>{

    setIsSignIn(!isSignIn);
  }

  const handleButtonClick = () =>{
   
     // checkValidData()
     const msg = checkValidData(email.current.value,password.current.value)
    setErrorMessage(msg);

    if(msg) return


    if(!isSignIn){
      //signup form 
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    //setErrorMessage(errorMessage);
    // ..
  });
       
    }else{
    
      //signin form
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    //console.log(user)
    navigate("/browse");
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage);
  });

    }
    
     
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
     ref={email} type="Email" placeholder='Email Address' required className='my-3 p-2 bg-gray-600 rounded-xs w-full'/>

{ errorMessage?.includes('Email')&& (
  <p className="text-red-600">{errorMessage}</p>
)}

      <input 
      ref={password} type="password" placeholder='Password' required className='my-3 p-2 bg-gray-600 rounded-xs w-full' />

{ (errorMessage?.includes('Password') || errorMessage?.includes('auth/invalid-credential')) && (
  <p className="text-red-600">{errorMessage}</p>
)}
      <button className='p-2 my-3 bg-red-700 rounded-xs  w-full cursor-pointer' onClick={handleButtonClick}>{isSignIn? "Sign In" : "Sign Up"}</button>

      <p className='py-4 text-xs font-bold cursor-pointer' onClick={toggelSignInForm}>{isSignIn? "New to Netflix?  Sign Up Now." : "Already Registered User? Sign In"} </p>
    </form>
    </div>
    
    
  )
} 

export default Login
