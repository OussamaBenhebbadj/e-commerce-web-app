import React, { useContext } from 'react'
import image3 from './images/image 3.png';
import { useNavigate } from 'react-router-dom';
import { Context } from '../App';

function Kids() {
  const {products} = useContext(Context) ;
  const navigate = useNavigate();
  const kidsData = products.filter((item)=>{
    return item.categorie === "Kids";
  });
  const handleProductDetails = (id) =>
  {
    navigate(`/kids/${id}`);
  }
  return (
    <div>
      <div className=' flex items-center mt-64 md:mx-80 mx-8 my-24 md:my-16 h-40 md:px-12 md:py-8 bg-yellow-100 rounded-2xl shadow-2xl'>
        <div>
          <h1 className='font-black text-xl mx-8 md:mx-0 md:text-5xl text-green-500'>FLAT 50% OFF</h1>
          <h3 className='font-semibold ml-8 md:ml-0 text-xl my-2'><span className='text-green-500'>12</span> Hours <span className='text-green-500'>40</span> mins</h3>
          <button className='px-4 ml-8 md:ml-0 py-2 my-1 border-black border-2 rounded-xl shadow-2xl hover:bg-green-500 hover:text-white hover:scale-95'>Explore Now</button>
        </div>
        <div>
          <img src={image3} className='w-32 h-32 ml-16 md:w-40 md:h-40 md:ml-60' alt="" />
        </div>
      </div>
      <div className='md:flex md:flex-wrap'>
        {kidsData.map((item)=>{
          return(
            <div key={item._id} onClick={()=>{handleProductDetails(item._id)}} className='cursor-pointer hover:scale-90 md:h-[350px] md:w-[16%] mx-48 md:mx-16 rounded-md md:my-16'>
              <img className='rounded-md h-[100%] w-[100%] shadow-2xl' src={item.img} alt="" />
              <h1 className='font-bold text-xl my-4'>{item.name}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Kids