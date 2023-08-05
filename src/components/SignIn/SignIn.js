import React from 'react'
import {TextField, Button} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

function SignIn() {
  return (
    <>
    

       <LockIcon />
       <h3>Sign In</h3>     
       <TextField type='email' variant="outlined"  label="Email Address*"/>
     <br/><br/>
       <TextField type='password'  variant="outlined" label="Password*"/>
     <br/><br/>
     <Button variant="contained">Sign In</Button>
    </>
  )
}

export default SignIn
