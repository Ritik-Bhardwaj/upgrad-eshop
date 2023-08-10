import { useState } from 'react';
import './App.css';
import NavigationBar from './common/NavigationBar/NavigationBar';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import ProductCard from './components/ProductCard/ProductCard';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ModifyProduct from './components/Addmin/modifyProduct/ModifyProduct';
import AddProduct from './components/Addmin/addProduct/AddProduct';
function App() {

  return (
    
    <div>
    <BrowserRouter>    
     <NavigationBar />
     <ModifyProduct />
     <AddProduct />
       <Routes>
       <Route path='/signin' element ={<SignIn />} />
       <Route path='/signup' element ={<SignUp />} />
       <Route path='/placeorder' element ={<PlaceOrder />} />   
       <Route path='/product' element ={<ProductCard />} />
       <Route path='/' exact          element ={<Home />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
