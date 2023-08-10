import React from 'react';
import { Button, CardActions, Card, CardMedia, CardContent, Stack,Typography,IconButton } from '@mui/material';
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

 function ProductCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={props.value.image}
        alt="image is not loaded"
        style={{objectFit:"contain"}}
      />
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography>{props.value.title} </Typography>
    
          <Typography>
            <CurrencyRupeeIcon /> {props.value.price}
          </Typography>
        </Stack>

        <Typography variant="body2" color="text.secondary" 
        style={{height:100, overflow:"hidden"}} >
           {props.value.description}
        </Typography>
      </CardContent>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Button variant="contained">BUY</Button>
        <CardActions disableSpacing>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Stack>
    </Card>
  );
}
export default ProductCard;