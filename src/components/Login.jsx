import React from 'react'
import Header from './Header'

//rafce - react arrow func component export
const Login = () => {
  return (
    <div>
    <div>
      <Header/>
    </div>
    <form className='absolute'>
      <input type="email" placeholder='Email Address' className='p-2 m-2'/>
      <input type="password" placeholder='password' className='p-2 m-2'/>
      <button className='p-4 m-4'>Sign In</button>
    </form>
    </div>
  )
}

export default Login
