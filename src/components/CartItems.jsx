import React from 'react'
import { useContext } from 'react'
import { Context } from '../App'
import '../App.css'

function CartItems() {
  const {data, cartItems , removeFromCart} = useContext(Context);
  return (
    <div className='mx-24 my-24'>
        <div className='cart font-bold text-xl'>
            <p>Products</p>
            <p>Title</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='h-0.5  bg-green-500 border-0'  />
        {data.map((item)=>{
            if(cartItems[item.id]>0)
            {
                return(
                    <div>
                        <div className='cart'>
                            <img src={item.img} alt="" />
                            <p>{item.name}</p>
                            <button className='border-2 border-green-500 h-8 w-8 ml-12 rounded-md py-1'>{cartItems[item.id]}</button>
                            <p className='ml-6'>{item.newPrice*cartItems[item.id]}$</p>
                            <ion-icon class='text-3xl ml-8 cursor-pointer' onClick={()=>removeFromCart(item.id)} name="trash"></ion-icon>
                        </div>
                        <hr className='h-[1.25px]  bg-green-500 border-0' />
                    </div>
                )
            }
            return null;
        }
        )}  
    </div>
  )
}

export default CartItems