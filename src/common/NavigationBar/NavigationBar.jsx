import React from 'react';
import { AppBar, Typography, Toolbar, Button, Stack, IconButton, InputBase, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { alpha, styled } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '4px', 
  backgroundColor: 'rgba(255, 255, 255, 0.15)', 
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25)', 
  },

}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: '8px 8px 8px 0', 
    paddingLeft: 'calc(1em + 32px)', 
    transition: 'width 200ms ease', 
    width: '100%',
    ['@media (min-width:960px)']: { 
      width: '160px', 
    },
  },
}));

function NavigationBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" style={{ backgroundColor: '#3f51b5' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Stack direction="row" spacing={2} style={{ flex: 1 }}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" aria-label="open drawer">
              <ShoppingCartIcon />
            </IconButton>
            <Typography variant="body1">UpGrad E-Shop</Typography>
          </Box>
        </Stack>


        <Search sx={{ alignItems: "center", justifyContent: "center",flex: 0.7}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> 


      <Box style={{ justifyContent: 'flex-end' }}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={() => navigate('/login')}>
            Login
          </Button>
          <Button variant="contained" onClick={() => navigate('/signup')}>
            Sign Up
          </Button>
          <Button variant="contained" onClick={() => navigate('/')}>
            Home
          </Button>
          <Button variant="contained" onClick={() => navigate('/addproduct')}>
            Add Product
          </Button>
          <Button variant="contained" onClick={() => navigate('')}>
            Logout
          </Button>
        </Stack>
      </Box>

      </Toolbar>

   
    </AppBar>
  );
}

export default NavigationBar;
