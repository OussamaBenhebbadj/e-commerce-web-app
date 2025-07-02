import React from 'react'
import main from './images/main.png'
import Popular from './Popular'
import Offers from './Offers'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <div className='flex justify-around grid md:grid-cols-2 grid-cols-1'>
        <div className='my-40 mx-8 md:mx-16 md:my-20'>
            <h3 className='mt-20 font-medium text-lg'>NEW ARRIVALS ONLY</h3>
            <h1 className='mt-4 font-black text-7xl'>New <ion-icon name="hand" class="text-yellow-500"></ion-icon> <br /> Collections <br />for everyone.</h1>
            <button className='my-12 px-8 py-4 border-2 border-black cursor-pointer rounded-xl shadow-2xl hover:bg-[#ffecb3]  hover:scale-95'>Latest Collection </button>
        </div>
        <div>
          <img src={main} className='w-auto py-24 hidden md:block' alt="" />
        </div>
      </div>
      <Popular />
      <Offers />
      <Footer />
    </div>
  )
}

export default Home
