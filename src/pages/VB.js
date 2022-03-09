import React,{useState} from 'react';
import Header from '../Components/Header';
import Cart from '../Components/Cart';
import {useCart} from 'react-use-cart';
import '../css/VB.css';
import  image from '../images/Image.png';
import {list} from '../data'
function VB(){
  const {addItem}=useCart();
    const{
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
    }=useCart();
    const test=JSON.parse(window.localStorage.getItem('react-use-cart'));
    let currentItem= parseInt(window.location.href.slice(26)) - 1;
    return(
    <>
    <Header />
    <main className='flex center direction_column '>
    <Cart data={test} />
     <div className='flex direction_row'>
     <div className='flex direction_column'>
     <span className='little_photos'><img src={image} alt='idk some photo is here' className='full_width full_height' /></span>
     <span className='little_photos'><img src={image} alt='idk some photo is here' className='full_width full_height' /></span>
     <span className='little_photos'><img src={image} alt='idk some photo is here' className='full_width full_height' /></span>
     </div>
     <div>
       <span className='big_photo'><img src={image} className='full_width full_height'/></span>
     </div>
     <div className='flex direction_column' >
       <p className='itemname'> Apollo  <br/> Running Short </p>
       <p className='sise'>SIZE:</p>
       <span className='flex direction_row sizes'>
        <a className='size_unavalible'>XS</a>
        <a className='size_active'>S</a>
        <a className='size_inactive'>M</a>
        <a className='size_inactive'>L</a>
       </span>
       <p className='price'>Price:</p>
       <p className='real_price'>${list[currentItem].price}</p>
     
             <a className='add_cart' onClick={()=>  addItem(list[currentItem]) } >Add to cart  </a>
           
           
          
       
       
       <p className='desc'></p>
     </div>
     </div>
    </main>
    </>
    );
}
export default VB
