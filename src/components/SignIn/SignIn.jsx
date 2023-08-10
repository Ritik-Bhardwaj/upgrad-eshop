import {TextField, Button, Grid, Avatar} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { pink } from '@mui/material/colors';

function SignIn() {

  const handleClick = (event) =>{
    event.preventDefault();
    console.log('Checking......');
   }
      
  return (

    <>
    <form onSubmit={handleClick}>
    <Grid container direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }} spacing={2}>
    
    <Grid item>
    <Avatar sx={{ bgcolor: pink[500], color:'white' }}>
    <LockIcon /> 
    </Avatar>
     </Grid>

     <Grid item>
     <h3>Sign In</h3> 
     </Grid>

     <Grid item>
     <TextField id='email' sx={{ width: 400 }} type='email' variant="outlined"  label="Email Address*"/>   
     </Grid>

     <Grid item>
     <TextField  id='pass' sx={{ width: 400 }} type='password'  variant="outlined" label="Password*"/> 
     </Grid>

     <Grid item>
     <Button  type="submit" variant="contained" sx={{ width: 400, backgroundColor:'#3f51b5' }}>Sign In</Button>
     </Grid>

     </Grid>

    </form>
     
     
     </>
  )
}

export default SignIn
