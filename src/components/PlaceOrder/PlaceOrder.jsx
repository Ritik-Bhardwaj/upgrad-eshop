import React from 'react'
import { TextField,Button,Grid } from '@mui/material'


function PlaceOrder() {
  return (
    <>
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
        <Button variant="contained">back</Button>
        <Button variant="contained">next</Button>
       </div>      
      </Grid>     

       </Grid>
    </>
  )
}

export default PlaceOrder ;
