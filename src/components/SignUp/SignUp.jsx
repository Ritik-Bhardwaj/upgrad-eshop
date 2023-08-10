import React from 'react'
import {TextField, Button, Grid, Avatar} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { pink } from '@mui/material/colors';
import { Link } from 'react-router-dom';



function SignUp() {
  return (
    <>
    <form>
    <Grid container direction="column" justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }} spacing={2}>
  <Grid item>
  <Avatar sx={{ bgcolor: pink[500], color:'white' }}> 
  <LockIcon  />
  </Avatar>
  </Grid>

  <Grid item>
  <h3 >Sign Up</h3>
  </Grid>

  <Grid item>
  <TextField type='text' variant="outlined" sx={{ width: 400 }} label="First Name*"/>
  </Grid>

  <Grid item>
  <TextField type='text'  variant="outlined" sx={{ width: 400 }} label="Last Name*"/>
  </Grid>

  <Grid item>
  <TextField type='email' variant="outlined" sx={{ width: 400 }}  label="Email Address*"/>
  </Grid>

  <Grid item>
  <TextField type='password'  variant="outlined" sx={{ width: 400 }} label="Password*"/>
  </Grid>

  <Grid item>
  <TextField type='password'  variant="outlined" sx={{ width: 400 }} label="Confirm Password*"/>
  </Grid>

  <Grid item>
  <TextField type='text' variant="outlined" sx={{ width: 400 }}  label="Contact Number*"/>
  </Grid>

  <Grid item>
  <Button type="submit" variant="contained" sx={{ width: 400, backgroundColor:'#3f51b5' }}>Sign Up</Button>
  </Grid>
  <Grid item sx={{ textAlign: 'right', width: 400 }}>
          <Link to="/login">
            <span>Already have an account? Sign in</span>
          </Link>
        </Grid></Grid>

    </form>
      
    </>
  )
}

export default SignUp;
