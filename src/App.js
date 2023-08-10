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
    <>
    <BrowserRouter>    
    <NavigationBar />
       <Routes>
       <Route exact path='/login' element ={<SignIn />} />
       <Route exact path='/signup' element ={<SignUp />} />
       <Route exact path='/placeorder' element ={<PlaceOrder />} /> 
       <Route exact path='/product' element ={<ProductCard />} />
       <Route exact path='/products' element ={<Home />} />
       <Route exact path='/modifyproduct' element ={<ModifyProduct />} />
       <Route exact path='/addproduct' element ={<AddProduct />} />
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
