import React from 'react'

import {Container, Grid, Box, Link} from '@mui/material'
import SchoolIcon from '@mui/icons-material/School';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
        <Box bgcolor="#000" marginTop={5} paddingY={4}>

            <Container maxWidth="lg">

                <Grid container justifyContent="center">

                    <Grid columnGap={4}>

                        <Link href='https://www.linkedin.com/in/shaik-haneef-3b8a1a202/' px={3}>

                            <LinkedInIcon color='success' sx={{fontSize : 40}}>
                            </LinkedInIcon>

                        </Link>

                        <Link href='https://github.com/Haneef99' px={3}>

                            <GitHubIcon color='success' sx={{fontSize : 40}}>
                            </GitHubIcon>

                        </Link>

                        <Link href='' px={3}>

                            <InstagramIcon color='success' sx={{fontSize : 40}}>
                            </InstagramIcon >

                        </Link>

                        <Link href='https://www.nitw.ac.in/' px={3}>

                            < SchoolIcon color='success' sx={{fontSize : 40}}>
                            </SchoolIcon>
                            
                        </Link>

                    </Grid>

                </Grid>
                

            </Container>

        </Box>
  )
}

export default Footer