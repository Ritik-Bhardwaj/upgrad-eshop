import React from 'react'
import {AppBar, Typography, Toolbar, Button} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
  const navigate = useNavigate(

  );
  return (
    <>
    <AppBar>
        <Toolbar>
        <ShoppingCartIcon />
            <Typography variant='body1'>UpGrad E-Shop </Typography>
            <Button variant='contained' onClick={()=> navigate("/signin")}>Login</Button>
            <Button variant='contained' onClick={()=> navigate("/signup")}>Sign Up</Button>
        </Toolbar>
    </AppBar>
      
    </>
  )
}

export default NavigationBar;
