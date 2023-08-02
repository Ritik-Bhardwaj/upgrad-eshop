import React from 'react'
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';

function SignIn() {
  return (
    <>
    <h1>Sign In</h1>
       <LockIcon />
       <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
    </>
  )
}

export default SignIn
