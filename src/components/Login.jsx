import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='w-full h-full flex items-start'>
      <div>
        <div className='bg-yellow-100 h-[500px] rounded-2xl w-[700px] mx-[60%] mt-[10%]'>
          <h1 className='text-5xl text-green-500 font-black text-center py-4'>Login</h1>
          <p className='text-center text-sm'>You don't have an Account? <Link to='/login/register'><span className='text-md cursor-pointer font-black'>Register Now</span></Link></p>
          <input className='mt-16 mx-32 px-4 h-8 w-[450px] rounded-xl border-0' type="text" placeholder='Your Email' />
          <br />
          <br />
          <input className='mx-32 px-4 h-8 w-[450px] rounded-xl border-0' type="password" placeholder='Your Password' />
          <br />
          <p className='text-sm text-center ml-80 mt-2 cursor-pointer'>Forget Password?</p>
          <br />
          <button className='bg-green-500 text-white py-2 px-32 rounded-xl my-4 ml-48 hover:scale-95 shadow-2xl'>Login</button>
          <p className='text-center font-bold text-xl'>Or</p>
          <div>
            <ion-icon class="h-12 w-12 ml-72 mt-4 cursor-pointer" name="logo-googleplus"></ion-icon>
            <ion-icon class="h-12 w-12 mx-8 mt-4 cursor-pointer" name="logo-facebook"></ion-icon>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Login