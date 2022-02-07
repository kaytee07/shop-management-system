import React,{useEffect, useState, useReducer, createContext} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { reducer, initialState } from './Components/useReducer/useReducer';
import Login from './Components/screens/login';
import Signup from './Components/screens/signup';
import Home from './Components/screens/Home';
import AddProduct from './Components/screens/Addproduct';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sell from './Components/screens/sell';
import Inventory from './Components/screens/Inventory';
import Product from './Components/screens/products';
import SellItems from './Components/screens/sellItems';
export const userContext = createContext();

function App() {
const [state, dispatch] = useReducer(reducer, initialState);
const navigate = useNavigate();

  
useEffect(() => {
  const user = localStorage.getItem("user");
  if(user){
     dispatch({ type: "USER", payload: user }); 
  }else{
    navigate("/signin")
  }
}, []);

 

  return (
    <userContext.Provider value={{ dispatch, state }}>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/product/:name" element={<Product />} />
          <Route path="/" element={<SellItems />} />
        </Routes>
      </Navbar>
    </userContext.Provider>
  );
}

export default App;
