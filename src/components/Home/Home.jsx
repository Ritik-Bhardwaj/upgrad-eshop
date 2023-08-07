import React from 'react'
import { useEffect, useState } from "react";
import { CardContent, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Card, CardActionArea, CardActions, CardMedia } from '@mui/material';


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

    <>
           {data.map(item => (
                <table key={item.id}>   
     </table>
        ))}
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"  />
         {/* <img src={item.image} style ={{height:100}} alt={item.image}/> */}
        <CardContent>
        <tr>Title: {item.title}</tr>
        <tr>Price: {item.price} $</tr>          
        </CardContent>

        <CardContent>
        <tr>{item.description}</tr>       
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant='contained' color="primary">
          Buy
        </Button>
      </CardActions>
    </Card>

      
    </>
    </>
  )
}

export default Home
