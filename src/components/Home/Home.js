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
    <div>
           {data.map(item => (
                <table>    
                <tr key={item.id}><img src={item.image} style ={{height:100}} alt={item.image}/></tr>
                <tr>Title: {item.title}</tr>
                <tr>Price: {item.price} &#8377; </tr>          
     </table>
        ))}
      
    </div>
  )
}

export default Home
