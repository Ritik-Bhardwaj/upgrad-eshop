import React from 'react'
import { TextField,Button,Grid } from '@mui/material'
import PlaceOrderStepper from './PlaceOrderStepper';
import { useState } from 'react';


function PlaceOrder() {


  const [activeStep, setActiveStep] = useState(0);
  const moveToPreviousStep = () =>{
    if( activeStep > 0){

      setActiveStep(activeStep-1);
     
    }
    else{
      // Navigate to product page;
    }
 
  };
  const moveToNextStep= () => {
    if(activeStep < 2){
      setActiveStep(activeStep+1);
    }
  };
  return (
    <>
    <PlaceOrderStepper activeStep={activeStep}/>
    <Grid container direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }} spacing={2}>
      <Grid item>
      <h4>Add Address</h4>
      </Grid>

      <Grid item>
       <TextField type='text' sx={{ width: 400 }}  variant="outlined"  label="Name*"/>
      </Grid>

      <Grid item>
      <TextField type='text' sx={{ width: 400 }}  variant="outlined" label="Contact Number*"/>
      </Grid>

      <Grid item>
      <TextField type='text' sx={{ width: 400 }}  variant="outlined" label="City*"/>
      </Grid>

      <Grid item>
      <TextField type='text' sx={{ width: 400 }}  variant="outlined" label="State*"/>       
      </Grid>

      <Grid item>
      <TextField type='text' sx={{ width: 400 }} variant="outlined"  label="Landmark"/>       
      </Grid>
    
      <Grid item>
      <TextField type='text' sx={{ width: 400 }} variant="outlined"  label="Zip Code"/>       
      </Grid>

      <Grid item>
      <Button variant="contained" sx={{ width: 400, backgroundColor:'#3f51b5' }}>Save Address</Button>       
      </Grid>

      <Grid item>
      <div>
        <Button onClick={() => moveToPreviousStep()} variant="contained" sx={{mr:2}} >back</Button>
        <Button onClick={() => moveToNextStep()}  variant="contained">next</Button>

        
       </div>      
      </Grid>     

       </Grid>
    </>
  )
}

export default PlaceOrder ;
