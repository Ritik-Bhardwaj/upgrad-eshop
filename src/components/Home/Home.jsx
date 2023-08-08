import React from 'react'
import { useEffect, useState } from "react";
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';


function Home() {

  const [data, setData] = useState([]);
  const [alignment, setAlignment] = useState('web');
  

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

 

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
    <ToggleButtonGroup
  color="primary"
  value={alignment}
  exclusive
  onChange={handleChange}
  aria-label="Platform"
  >  
    <ToggleButton className='btn'  value="all">All</ToggleButton>
    <ToggleButton className='btn' value="apparel">Apparel</ToggleButton>
    <ToggleButton className='btn' value="electronics">Electronics</ToggleButton>
    <ToggleButton className='btn'  value="personal_care">Personal Care</ToggleButton>
   </ToggleButtonGroup>

  <Grid container direction="row" justifyContent="space-evenly">
    <Grid item>
   <ProductCard />
    </Grid>

    <Grid item>
   <ProductCard />
    </Grid>

    <Grid item>
   <ProductCard />
    </Grid>

    <Grid item>
   <ProductCard />
    </Grid>

    <Grid item>
   <ProductCard />
    </Grid>

    <Grid item>
   <ProductCard />
    </Grid>

    <Grid item>
   <ProductCard />
    </Grid>

    <Grid item>
   <ProductCard />
    </Grid>

    <Grid item>
   <ProductCard />
    </Grid>
    
  </Grid>

           {data.map(item => (
      <table key={item.id}>   
         <tr><img src={item.image} style ={{height:100}} alt={item.image}/></tr>
        <tr>Title: {item.title}</tr>
        <tr>Price: {item.price} $</tr>          
        <tr>{item.description}</tr>       
     </table>
        ))}; 

    </>
  )
}

export default Home
