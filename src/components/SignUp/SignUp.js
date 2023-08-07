import React from 'react'
import {TextField, Button} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import './SignUp.css'
function SignUp() {
  return (
    <div className='signUp'>
       <LockIcon />
       <h3>Sign Up</h3>
     
       <TextField type='text' variant="outlined"  label="First Name*"/>
       <TextField type='text'  variant="outlined" label="Last Name*"/>
     <TextField type='email' variant="outlined"  label="Email Address*"/>
       <TextField type='password'  variant="outlined" label="Password*"/>
       <TextField type='password'  variant="outlined" label="Confirm Password*"/>
     <TextField type='text' variant="outlined"  label="Contact Number*"/>
     <Button variant="contained">Sign Up</Button>
    </div>
  )
}

export default SignUp;
