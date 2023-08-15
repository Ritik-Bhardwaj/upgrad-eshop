import React from 'react'
import { Grid, TextField, Button } from '@mui/material';
import { useState } from 'react';
import Select from "react-select";

function AddProduct() {
  const categoryList = [
    { value: "apparel", label: "Apparel" },
    { value: "electronics", label: "Electronics" },
    { value: "personal-care", label: "Personal Care" },
  ];

  const [categoryOption, selectCategoryOption] = useState("");
  const onChangeHandler = (e) => {
    selectCategoryOption(e.value);
  };
  const selectStyles = {
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
  };

  return (
    <>
    <Grid container direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }} spacing={2}>
      <Grid item>
      <h4>Add Product</h4>
      </Grid>

      <Grid item>
       <TextField type='text' sx={{ width: 400 }}  variant="outlined"  label="Name*"/>
      </Grid>

      <Grid item sx={{ width: 416 }}>
      <Select
            defaultValue={""}
            name="category"
            options={categoryList}
            onChange={onChangeHandler}
            isSearchable={true}            
            styles={selectStyles}
          />  
      </Grid>
      
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
