import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../App';

function ProductDetailsKids() {
  const params = useParams();
  const context = useContext(Context);
  const filteredKidsProducts = context.data.filter((item) =>{
    return item.id === parseInt(params.id);
  })
  const {addToCart} = useContext(Context);
  return (
    <div>
      <div className='flex items-center px-64 py-16'>
        <div className='flex items-center'>
          <div className=' '>
            <img className='py-2 h-32 w-96' src={filteredKidsProducts[0].img} alt="" />
            <img className='py-2 h-32 w-full' src={filteredKidsProducts[0].img} alt="" />
            <img className='py-2 h-32 w-full' src={filteredKidsProducts[0].img} alt="" />
          </div>
          <img className='h-96 w-fit py-2 px-2' src={filteredKidsProducts[0].img} alt="" />
        </div>
        <div>
          <h1 className='text-4xl font-bold px-8'>{filteredKidsProducts[0].name}</h1>
          <div className='flex items-center px-8 py-4'>
            <ion-icon class='text-green-500' name="star"></ion-icon>
            <ion-icon class='mx-2 text-green-500' name="star"></ion-icon>
            <ion-icon class='text-green-500' name="star"></ion-icon>
            <ion-icon class='mx-2 text-green-500' name="star-half"></ion-icon>
            <p>(122)</p>
          </div>
          <div className='flex items-center px-8'>
            <p className='text-xl font-black text-green-500'>{filteredKidsProducts[0].newPrice}$</p>
            <p className='ml-16 line-through text-lg opacity-45'>{filteredKidsProducts[0].oldPrice}$</p>
          </div>
          <div className='text-sm mb-316 px-8 py-8'>
            {filteredKidsProducts[0].description}
          </div>
          <div>
            <h5 className='px-8'>Select Size</h5>
            <div className='flex items-center px-8 py-2'>
              <div className='h-8 w-16 pl-7 pt-1 rounded-xl align-middle hover:bg-green-500 active:bg-green-500 hover:text-white active:text-white hover:scale-95 active:scale-95 justify-center cursor-pointer bg-white'>S</div>
              <div className='px-4 mx-4 h-8 w-16 pl-7 pt-1 rounded-xl align-middle hover:bg-green-500 active:bg-green-500 hover:text-white active:text-white hover:scale-95 active:scale-95 justify-center cursor-pointer bg-white'>M</div>
              <div className='h-8 w-16 pl-7 pt-1 rounded-xl align-middle hover:bg-green-500 active:bg-green-500 hover:text-white active:text-white hover:scale-95 active:scale-95 justify-center cursor-pointer bg-white'>L</div>
              <div className='px-4 mx-4 h-8 w-16 pl-7 pt-1 rounded-xl align-middle hover:bg-green-500 active:bg-green-500 hover:text-white active:text-white hover:scale-95 active:scale-95 justify-center cursor-pointer bg-white'>XL</div>
            </div>
            <button onClick={()=>{addToCart(filteredKidsProducts[0].id)}} className='px-6 py-2 ml-32 mt-2 border-2 border-black cursor-pointer rounded-xl shadow-2xl hover:bg-green-500 hover:text-white hover:scale-95'>Add to chart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsKids