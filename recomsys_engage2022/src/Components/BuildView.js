import React from 'react'
import {Box, Grid, Typography, Pagination } from '@mui/material'
import MovieDisplayCard from './MovieDisplayCard'

function BuildView(props) {  



    return (
        <Box padding={props.pd===1?4:0} >

            {
                props.title!==undefined 
                && 
                <Typography variant='h5' my={4}> {props.title} </Typography>
            }

            <Grid container my={4} >

                {
                    props.data.slice(0,0+(props.length===undefined?props.data.length:props.length)).map
                    (
                        a =>
                            <Grid item xs={6} md={2.4} py={props.pd===1?3:0}> 
                                <MovieDisplayCard movie={a} api = {props.api}></MovieDisplayCard>
                            </Grid>
                    )

                }


            </Grid>


        </Box>
    )
}

export default BuildView