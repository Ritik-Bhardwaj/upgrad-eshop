import { useState } from 'react';
import './App.css';
import NavigationBar from './common/NavigationBar/NavigationBar';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import ProductCard  from './components/Card/Card';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    
    <div>
    <BrowserRouter>
     <NavigationBar />
     <Routes>
       <Route path='/signin' element ={<SignIn />} />
       <Route path='/signup' element ={<SignUp />} />
       <Route path='/product' element ={<ProductCard />} />
       <Route path='/' element ={<Home />} />
       <Route path='/ordercart' element ={<PlaceOrder />} />   
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
