import image from '../images/Image.png';
import React,{useState} from 'react'
import {useCart} from 'react-use-cart';
function Cart(props){
    const [totalItem,setTotalItem]=useState();
    const{
        cartTotal,
        updateItemQuantity,
    }=useCart();
    
   const name=localStorage.getItem('status');
    if (props.data.items.length===0) {
        return(
            <>
    
            <div   className={`disabled ${name=== 'enebled' ?'block' :'' }`} ></div>
               
             <div      className={`flex direction_column shopping_bag ${name==='enebled' ?' block':'' }  `} >
             
             <span className='flex direction_row'>
                <p className='bag'>My Bag,</p>
                <p className='itemCount'>0 items</p>
             </span>
                 
                 
                
                 
             <span className='flex direction_row justify_between align_center'>
                <p className='Total'>Total</p>
                <p className='total_price'>0 $</p>
             </span>
             <span className='flex direction_row justify_between viewer'>
                <a href='Big_cart'>View bag</a>
                <a>CHECK OUT</a>
             </span> 
             </div>
             
             
                 </>  
         
        )
        
    }else{
        return(
            <>
             
            <div   className={`disabled ${name=== 'enebled' ?'block' :'' }`} ></div>
               
             <div      className={`flex direction_column shopping_bag ${name==='enebled' ?' block':'' }  `} >
             
             <span className='flex direction_row'>
                <p className='bag'>My Bag,</p>
                <p className='itemCount'>{props.data.totalItems} items</p>
             </span>
                 {
                 
                  props.data.items.map((item)=>{
                     
                    return(
                        <>
             <span className='flex direction_row'>
                <span className='flex direction_column'>
                    <p className='itemName'>{item.title}</p>
                    <p className='itemPrice'>$ {item.price}</p>
                    <span className='flex direction_row '>
                        <p className='size active'>S</p>
                        <p className='size '>M</p>
                    </span>
                </span>
                <span className='flex direction_column increaser_box'>
                    <button className='active' onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button>
                    <p>{item.quantity}</p>
                    <button className='active' onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
                </span>
                <span className='Good_lidl'><img src={image} className='full_width full_height' alt="" /></span>
             </span>
             </>
                    );
                  }
             
                  )
                 }
                 
             <span className='flex direction_row justify_between align_center'>
                <p className='Total'>Total</p>
                <p className='total_price'>$ {props.data.cartTotal} </p>
             </span>
             <span className='flex direction_row justify_between viewer'>
                <a href='Big_cart'>View bag</a>
                <a>CHECK OUT</a>
             </span> 
             </div>
             
             
                 </>  
         
         
             );
    }
    
}
export default Cart;