import React from 'react'
import {TextField, Button} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

function SignUp() {
  return (
    <>
       <LockIcon />
       <h3>Sign Up</h3>
     
       <TextField type='text' variant="outlined"  label="First Name*"/>
     <br/><br/>
       <TextField type='text'  variant="outlined" label="Last Name*"/>
     <br/><br/>
     <TextField type='email' variant="outlined"  label="Email Address*"/>
     <br/><br/>
       <TextField type='password'  variant="outlined" label="Password*"/>
     <br/><br/>
       <TextField type='password'  variant="outlined" label="Confirm Password*"/>
     <br/><br/>
     <TextField type='text' variant="outlined"  label="Contact Number*"/>
     <br/><br/>
     <Button variant="contained">Sign Up</Button>
    </>
  )
}

export default SignUp;
