import React from 'react'
import { TextField,Button } from '@mui/material'
import './PlaceOrder.css'

function PlaceOrder() {
  return (
    <div className='placeOrder__styling'>
       <h4>Add Address</h4>
     
       <TextField type='text' variant="outlined"  label="Name*"/>
       <TextField type='text'  variant="outlined" label="Contact Number*"/>
       <TextField type='text' variant="outlined"  label="Street*"/>
       <TextField type='text'  variant="outlined" label="City*"/>
       <TextField type='text'  variant="outlined" label="State*"/>
       <TextField type='text' variant="outlined"  label="Landmark"/>
       <TextField type='text' variant="outlined"  label="Zip Code"/>
       <Button variant="contained">Save Address</Button>
       <Button variant="contained">back</Button>
       <Button variant="contained">next</Button>
      
    </div>
  )
}

export default PlaceOrder ;
