import React from 'react';
import './Cart.css'
import Name from '../../components/Name/Name';

const Cart = (props) => {
    const {cart}=props

  let total=0;
  const names=[];


   console.log(names)

 // console.log(totalName)
    for(const detail of cart){
    //console.log(detail )


       total=total+detail.salary;
      const  name=detail.name
      names.push(name)




    }


    return (
        <div className="cart-container">
          <h2>Add To Cart</h2>
          <h3 className="cart-style" >Total add:{props.cart.length}</h3>
          <h3  id="names-list" className="cart-style">Name:{names.map(data=>
          <Name
           name={data}
           key={ Math.random() }



           >




          </Name>)}</h3>
          <h3 className="cart-style" >total:{total}$</h3>


        </div>
    );
};


export default Cart;