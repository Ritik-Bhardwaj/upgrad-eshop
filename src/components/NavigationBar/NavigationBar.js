import React from 'react'
import {AppBar, Typography, Toolbar} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function NavigationBar() {
  return (
    <>
    <AppBar>
        <Toolbar>
        <ShoppingCartIcon />
            <Typography>UpGrad E-Shop</Typography>
        </Toolbar>
    </AppBar>
      
    </>
  )
}

export default NavigationBar;
