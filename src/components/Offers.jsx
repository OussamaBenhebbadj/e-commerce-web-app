import React from 'react'
import data from '../data'
import { useNavigate } from 'react-router-dom';

function Offers() {
  const navi = useNavigate();
  const filteredOffre = data.filter((item)=>{
    return item.offre ;
  });
  const handleProductDetails = (id) =>
  {
    navi(`/men/${id}`);
  }
  return (
    <div>
        <h1 className='mt-32 ml-48 text-4xl md:ml-[47%] font-bold '>Offers <hr className='hr-offers' /></h1>
        <div className='md:flex md:items-center my-16 px-16 md:px-96 md:my-8'>
            {filteredOffre.map((product)=>{
                return(
                    <div key={product.id} className='my-4 mx-16 rounded-lg'>
                        <img className='w-64 h-72 rounded-lg' src={product.img} alt="" />
                        <h1 className='my-4 text-xl font-semibold'>{product.name}</h1>
                        <div className='flex items-center'>
                            <p className='text-2xl font-bold text-green-600'>{product.newPrice} $</p>
                            <p className='mx-12 text-lg font-medium line-through opacity-45'>{product.oldPrice} $</p>
                        </div>
                        <button onClick={()=>{handleProductDetails(product.id)}} className='cursor-pointer border-2 border-black px-4 py-2 ml-16 my-4 rounded-xl shadow-2xl hover:bg-green-600 hover:text-white hover:scale-95'>Check now</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Offers