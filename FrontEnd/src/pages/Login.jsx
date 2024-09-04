import React from 'react'
import Logo from '../assets/Logo.png'


function Login() {
  return (
    <div className='text-black h-[100vh] flex justify-center items-center bg-cover bg-gradient-to-r from-cyan-500 to-blue-500'>
      <div className='bg-slate-800 border border-slate-400 rounded-md pt-8 pb-8 pr-12 pl-12 shadow-lg backdrop-blur-sm bg-opacity-30 relative'>
      <img
              src={Logo}
              alt="Logo"
              className="mx-auto mb-2"
              style={{ maxWidth: '100px' }}
            />
        <h1 className='text-4xl text-white font-bold text-center mb-6'>Login</h1>
        <h1 className='text-sm text-white text-center mb-6'>Welcome back! Please enter your details.</h1>
        <form action=''>
            <div className='relative my-4'>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter Your Email' className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'/> 
            </div>
            <div className='relative my-4'>
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Password' className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'/>
            </div>
            <div className='flex flex-row justify-between p-2'>
                <div>
                    <input type="checkbox" id='remember' className='peer'/>
                    <label htmlFor="remember">Remember me</label>
                </div>
                <a href='#'>Forgot Password</a>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                <button type='submit' className='w-full bg-blue-400 p-2 rounded-md'>Login</button>
                <button type='submit' className='w-full bg-blue-400 p-2 rounded-md'>Sign in with Google</button>
            </div>
            <div className='flex justify-center mt-4'>
                <h1 className='text-sm'>Don't have an account? <span><a href='/sign-up'>Sign Up</a></span></h1>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
