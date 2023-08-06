import React from 'react'
import { useEffect, useState } from "react";


function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);




  

  return (
    <>
    
           {data.map(item => (
                <table key={item.id}>   
                <tr>Category{item.category}</tr> 
                <tr><img src={item.image} style ={{height:100}} alt={item.image}/></tr>
                <tr>Title: {item.title}</tr>
                <tr>Price: {item.price} $</tr>   
                <tr>{item.description}</tr>       
     </table>
        ))}
      
    </>
  )
}

export default Home
