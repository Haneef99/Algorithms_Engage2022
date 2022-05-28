import React from 'react'
import { Toolbar, IconButton, AppBar, Typography, Box, Link, Button } from '@mui/material'
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function Navbar(props) {
  return (

    <AppBar position='static' color='grey'>

        <Toolbar >

            <IconButton size='large' edge='start' color='inherit' aria-label='logo'> 
                <ConnectedTvIcon />
            </IconButton>

            <Typography variant='h6' component='div' >
                STREAM
            </Typography>

            <Box sx={{flexGrow : 1}}>
              <Link sx={{  marginLeft : '20px' }} underline= 'none' color='GrayText' href='/explore'>
                Explore
              </Link>
            </Box>

            {
              //Display's the location of the viewer
            }
            <Box sx={{display : 'flex'}} color='GrayText'>
              <LocationOnIcon />
              <Typography variant='body1'>
                {props.location.city + ', ' + props.location.region}
              </Typography>
            </Box>

        </Toolbar>

    </AppBar>
  )
}

export default Navbar