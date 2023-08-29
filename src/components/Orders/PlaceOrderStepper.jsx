import React from 'react'
import { useState } from 'react';
import {Grid,Box,Stepper,Step,StepLabel } from '@mui/material'


function PlaceOrderStepper({activeStep}) {

  let stepsForOrdering  = [
		{
			labelOrder: 1,
			label: "Items",
			completed: false,
		},
		{
			labelOrder: 2,
			label: "Select Address",
			completed: false,
		},
		{
			labelOrder: 3,
			label: "Confirm Order",
			completed: false,
		},
	];
	for(let i=activeStep-1; i>=0; i--){
		stepsForOrdering[i].completed =true;
	}

	console.log(activeStep);
	console.log(stepsForOrdering);


  return (
		<Box sx={{flexGrow: 1}}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<Stepper 
							activeStep={activeStep}
							sx={{width: "80%"}}
						>
							{
								stepsForOrdering !== null && stepsForOrdering.length > 0 &&
								stepsForOrdering.map((element, index) => {
									return (
										<Step
											key={"step_" + index}
											active={index === activeStep}
											index={index}
											last={(index === 2)}
											completed={element.completed}
										>
											<StepLabel>
												{element.label}
											</StepLabel>
										</Step>
									);
								})
							}
						</Stepper>
					</div>
				</Grid>
				{/* {
					activeStep === 1 &&
					<Grid item xs={12}>
						<div style={{display: 'flex', justifyContent: 'center'}}>
							<Address
								callbackFunction={saveAddressForDelivery}
							/>
						</div>
					</Grid>
				}
				{
					activeStep === 2 &&
					<Grid item xs={12}>
						<div style={{display: 'flex', justifyContent: 'center'}}>
							{/* <OrderDetails
								quantity={orderDetails.quantity}
								product={json.product}
								address={orderDetails.addressObject}
							/> */}
						{/* </div>
					</Grid> */}
				} */}
				
			</Grid>
		</Box>
	);
}
  

export default PlaceOrderStepper ;
