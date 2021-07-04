

import Data from '../src/Data/Data.json';
import React,{useState,useEffect} from 'react';
import Employee from '../src/Employee/Employee';

import './App.css';
import Cart from './Cart/Cart';




function App() {

  const[employe , setEmploye]=useState([])
  const [cart, setCart]=useState([])
const AddEmployee=(pd)=>{

  const newCart =[...cart, pd]
  setCart(newCart);
}
  useEffect(()=>{

setEmploye(Data)
  },[])
  return (

    
    <div className="Employee-container">
     


   <div className="data-container">
   
      {

        employe.map(pd => <Employee pd={pd} AddEmployee={AddEmployee}></Employee>)
      
      }
   
  </div>
  <div className="cart-container">

  <Cart cart={cart}></Cart>
    
  </div>
    </div>
  );
}

export default App;
