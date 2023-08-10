import React from 'react'
import {AppBar, Typography, Toolbar, Button, Stack} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';


function NavigationBar() {

  const navigate = useNavigate();

  return (
    <>
    <AppBar position='static'  sx={{backgroundColor: '#3f51b5'}}>
        <Toolbar>
        <ShoppingCartIcon />
            <Typography variant='body1'>UpGrad E-Shop </Typography>
            <Stack direction="row" spacing={2}>
            <Button variant='contained' onClick={()=> navigate("/login")}>Login</Button>
            <Button variant='contained' onClick={()=> navigate("/signup")}>Sign Up</Button>
            <Button variant='contained' onClick={()=> navigate("/products")}>Home</Button>
            <Button variant='contained' onClick={()=> navigate("/addproduct")}>Add Product</Button>
            <Button variant='contained' onClick={()=> navigate("")}>Logout</Button>
            </Stack>            
        </Toolbar>
    </AppBar>
      
    </>
  )
}

export default NavigationBar;
