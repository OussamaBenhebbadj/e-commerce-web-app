import React from 'react'
import data from '../data'
import '../App.css'
import { useNavigate } from 'react-router-dom'

function Popular() {
  const navigate = useNavigate();
  const popularInKids = data.filter((item)=>{
    return item.popular;
  })
  const handleProductDetails = (id) =>
  {
    navigate(`/kids/${id}`);
  }
  return (
    <div>
        <h1 className='ml-24 md:my-16 text-4xl md:ml-[42%] font-bold '>Popular in Kids <hr className='hr-popular' /></h1>
        <div className='md:flex md:items-center my-16 px-16 md:px-64 md:my-8'>
            {popularInKids.map((product)=>{
                return(
                    <div key={product.id} onClick={()=>{handleProductDetails(product.id)}} className='mx-16 my-4 rounded-lg cursor-pointer hover:scale-90'>
                        <img className='w-64 h-72 rounded-lg' src={product.img} alt="" />
                        <h1 className='my-4 text-xl font-semibold'>{product.name}</h1>
                        <div className='flex items-center'>
                            <p className='text-2xl font-bold'>{product.newPrice} $</p>
                            <p className='mx-10 text-lg font-medium line-through opacity-45'>{product.oldPrice} $</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Popular