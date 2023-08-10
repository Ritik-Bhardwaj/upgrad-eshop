import React from 'react'
import { Grid, TextField, Button } from '@mui/material';
function AddProduct() {
  return (
    <>
    <Grid container direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }} spacing={2}>
      <Grid item>
      <h4>Add Product</h4>
      </Grid>

      <Grid item>
       <TextField type='text' sx={{ width: 400 }}  variant="outlined"  label="Name*"/>
      </Grid>
        {/* TODO Add "Creatable Select" */}
      <Grid item>
      <TextField type='text' sx={{ width: 400 }}  variant="outlined" label="Manufacturer*"/>
      </Grid>

      <Grid item>
      <TextField type='text' sx={{ width: 400 }}  variant="outlined" label="Available Items*"/>
      </Grid>

      <Grid item>
      <TextField type='text' sx={{ width: 400 }}  variant="outlined" label="Price*"/>       
      </Grid>

      <Grid item>
      <TextField type='text' sx={{ width: 400 }} variant="outlined"  label="Image URL"/>       
      </Grid>
    
      <Grid item>
      <TextField type='text' sx={{ width: 400 }} variant="outlined"  label="Product Description"/>       
      </Grid>

      <Grid item>
      <Button variant="contained" sx={{ width: 400, backgroundColor:'#3f51b5' }}>Save Product</Button>       
      </Grid>     

       </Grid>
    </>

  )
}

export default AddProduct;
