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
    .then(data => {
      setData(data)
      console.log(data);
    });
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

  <Grid  container direction="row" justifyContent="space-evenly">
    {data.map((item ) =>{
      return(
        <Grid item key={item.id}>
        <ProductCard value={item}/>
         </Grid>
      )
    })}
      
  </Grid>

    </>
  )
}

export default Home
