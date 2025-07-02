import React from 'react'
import logo from './images/logo.png'

function Footer() {
  return (
    <div className=''>
        <hr className='h-[1px]  bg-gray-600 border-0 mt-16' />
        <div className='flex items-center md:px-96 md:pt-8'>
            <img src={logo} className='h-16 w-16 md:h-32 md:w-32 ml-16 md:ml-32' alt="" />
            <h1 className='text-5xl font-black ml-8 mt-4'>SHOPPER</h1>
        </div>
    </div>
  )
}

export default Footer