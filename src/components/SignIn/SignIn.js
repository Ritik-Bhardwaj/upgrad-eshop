import React from 'react'
import {TextField, Button} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import './SignIn.css'

function SignIn() {
  return (
    <div className="loginPage">
    <div className='logIn'>
       <LockIcon />
       <h3>Sign In</h3> 
           <TextField id='textField' type='email' variant="outlined"  label="Email Address*"/>    
       <TextField id='textField' type='password'  variant="outlined" label="Password*"/>
     
     <Button variant="contained">Sign In</Button>
     </div>
    </div>
  )
}

export default SignIn
