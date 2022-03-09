import '../css/main.css';
import image from '../images/Image.png';
import React from 'react'
import {Link } from 'react-router-dom';
import Empty_Cart from '../icons/Empty_Cart.svg';
import {list} from '../data';
import {useCart} from 'react-use-cart';
import Cart from './Cart';
function Main(){
    const {addItem}=useCart();
    const{
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
    }=useCart();
   const name=localStorage.getItem('status');
 
   const test=JSON.parse(window.localStorage.getItem('react-use-cart'));
 
    return(
    <>

    <main  className='flex center direction_column '>
    <section>
        <h1 className='categ_name'>Category Name</h1>
                 
      <Cart data={test} />
      
      </section>

    <section  className=''>
         {
            list.map((item)=>{
               
                return(
                
                <div className={`Merch flex  direction_column ${item.onStock ===true ?'' :'inactive' } `} key={list.id} >
                <span className='merch_img'>
                
                <p className= {item.onStock===true ? ' none' : 'Stock'}>out of stock</p>
                
                
                <button className={item.onStock===true?'Buy':'none'} onClick={()=>addItem(item)} ><img src=  {Empty_Cart} alt="" /></button>
                    <img src={image} className='full_width' alt="" />
                    
                    </span> 
                <Link  to={ item.onStock===true? `vb/:${item.id}` : ''}  >{item.title}</Link>
                <p>${item.price}</p> 
               
               </div>)
                
            })
        } 
  {/*      
        <div className='Merch flex  direction_column'>
         <span className='merch_img'>
         <button className='Buy'><img src={Empty_Cart} alt="" /></button>
             <img src={pinkSweter} className='full_width' alt="" />
             </span> 
         <p>Apollo Running Short</p>
         <p>$50.00</p> 
         
        </div>
        <div className='Merch flex  direction_column inactive'>
         <span className='merch_img '> <p className='Stock'>OUT OF STOCK</p><img src={grey_cloth} className='full_width' alt="" /></span> 
         <p>Apollo Running Short</p>
         <p>$50.00</p> 
        </div>
        <div className='Merch flex  direction_column'>
         <span className='merch_img'> 
         <button className='Buy'><img src={Empty_Cart} alt="" /></button>
         <img src={Pink_bag} className='full_width' alt="" /></span> 
         <p>Apollo Running Short</p>
         <p>$50.00</p> 
        
        </div>
        <div className='Merch flex  direction_column'>
         <span className='merch_img'>
         <button className='Buy'><img src={Empty_Cart} alt="" /></button>
             <img src={image} className='full_width' alt="" /></span> 
         <p>Apollo Running Short</p>
         <p>$50.00</p> 
        
        </div>
        <div className='Merch flex  direction_column'>
         <span className='merch_img'>
         <button className='Buy'><img src={Empty_Cart} alt="" /></button>
             <img src={grey_cloth} className='full_width' alt="" /></span> 
         <p>Apollo Running Short</p>
         <p>$50.00</p> 
         
        </div>
         */}
    </section>
    </main>
    </>
    );
};
export default Main