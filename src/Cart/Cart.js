import React from 'react';

const Cart = (props) => {

    const cart = props.cart;
    
    
    
    let Total = 0;

    for(let i=0; i<cart.length; i++){

        const kl = cart[i];
        const price = parseInt(kl.salary);
    
        Total+= price;

    }
    return (
        <div>
        <h1>Employee Information : </h1> 
        <p>Employee Length :{cart.length}</p>
        <p>Total Anual Salary :{Total}</p>
        <p>Name: </p>
        </div>
    );
};

export default Cart;