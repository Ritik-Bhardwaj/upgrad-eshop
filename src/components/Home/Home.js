import React from 'react'
import { useEffect, useState } from "react";
import { ToggleButton } from '@mui/material';
import './Home.css'


function Home() {
  const [data, setData] = useState([]);

   function getProduct(){
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => setData(data));
   }

  useEffect(() => {
   getProduct()
  }, []);  

  return (
    <>
    <ToggleButton id='btn' id='category_btn1' value="all">All</ToggleButton>
    <ToggleButton id='btn' value="apparel">Apparel</ToggleButton>
    <ToggleButton id='btn' value="electronics">Electronics</ToggleButton>
    <ToggleButton id='btn'  value="personal_care">Personal Care</ToggleButton>

    <div className='homePage__styling'>


           {data.map(item => (
                <table key={item.id}>   
                <tr>Category{item.category}</tr> 
                <tr><img src={item.image} style ={{height:100}} alt={item.image}/></tr>
                <tr>Title: {item.title}</tr>
                <tr>Price: {item.price} $</tr>   
                <tr>{item.description}</tr>       
     </table>
        ))}
      
    </div>
    </>
  )
}

export default Home
