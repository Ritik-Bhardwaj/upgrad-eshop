import React from 'react'
import { TextField,Button } from '@mui/material'
function PlaceOrder() {
  return (
    <>
       <h4>Add Address</h4>
     
       <TextField type='text' variant="outlined"  label="Name*"/>
     <br/><br/>
       <TextField type='text'  variant="outlined" label="Contact Number*"/>
     <br/><br/>
     <TextField type='text' variant="outlined"  label="Street*"/>
     <br/><br/>
       <TextField type='text'  variant="outlined" label="City*"/>
     <br/><br/>
       <TextField type='text'  variant="outlined" label="State*"/>
     <br/><br/>
     <TextField type='text' variant="outlined"  label="Landmark"/>
     <br/><br/>
     <TextField type='text' variant="outlined"  label="Zip Code"/>
    <br/><br/>
     <Button variant="contained">Save Address</Button>
     <br/> <br/>
     <Button variant="contained">back</Button>
     <Button variant="contained">next</Button>
      
    </>
  )
}

export default PlaceOrder ;
