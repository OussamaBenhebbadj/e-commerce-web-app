import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className='w-full h-full flex items-start'>
          <div>
            <div className='bg-yellow-100 h-[500px] rounded-2xl w-[700px] mx-[60%] mt-[10%]'>
              <h1 className='text-5xl text-green-500 font-black text-center py-4'>Welcome Back</h1>
              <p className='text-center text-sm'>Already have an Account? <Link to='/login'><span className='text-md cursor-pointer font-black'>Login</span></Link></p>
              <input className='mt-16 mx-32 px-4 h-8 w-[450px] rounded-xl border-0' type="text" placeholder='First Name' />
              <br />
              <br />
              <input className='mx-32 px-4 h-8 w-[450px] rounded-xl border-0' type="text" placeholder='Last Name' />
              <br />
              <br />
              <input className='mx-32 px-4 h-8 w-[450px] rounded-xl border-0' type="password" placeholder='Email' />
              <br />
              <br />
              <input className='mx-32 px-4 h-8 w-[450px] rounded-xl border-0' type="password" placeholder='Your Password' />
              <br />
              <br />
              <button className='bg-green-500 text-white py-2 px-32 rounded-xl my-4 ml-48 hover:scale-95 shadow-2xl'>Sign Up</button>
            </div> 
          </div>
        </div>
      )
}

export default Register