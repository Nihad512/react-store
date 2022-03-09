import React from 'react';
import Header from '../Components/Header';
import '../css/Big_cart.css';
import {useCart} from 'react-use-cart';
import image from '../images/Image.png';
 function Big_cart(){
    const{
        cartTotal,
        updateItemQuantity,
    }=useCart();
    const test=JSON.parse(window.localStorage.getItem('react-use-cart'));
    return(
    <>
    <Header/>
    <main className='flex center direction_column'>
    <section className='flex direction_column'>
    <h1 className='categ_name BG_cart'>CART</h1> 
    {
        test.items.map((item)=>{
            return(
<div className='flex direction_row  justify_between' >
    <span className='flex direction_column'>
    <p className='itemname BG_name'>{item.title}</p>
    <p className='real_price BG_name'>${item.price}</p>
       <span className='flex direction_row sizes BG_sizes'>
        <a className='size_active'>S</a>
        <a className='size_inactive'>M</a>
       </span>
      
    </span>
    <span className='flex direction_row'>
    <span className='flex direction_column increaser_box BG_sb'>
           <button className='active'onClick={()=>updateItemQuantity(item.id,item.quantity+1)} >+</button>
           <p>{item.quantity}</p>
           <button className='active' onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
       </span>
       <span className='Good_lidl'><img src={image} className='full_width full_height' alt="" /></span>
    </span> 
    </div>
            );
        })
    }
 
    
    </section>
    </main>
    </>
    );
}
export default Big_cart;