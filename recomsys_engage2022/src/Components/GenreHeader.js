import React from 'react'

import {Box, Typography, Stack,Button, Link} from '@mui/material'

function GenreHeader(props) {

  return (

    <Box sx={{display : 'flex'}} justifyContent="space-between">

        <Stack direction="column" spacing={2}>

            <Typography variant='h5'>
                {props.title}
            </Typography>

            <Typography variant='body2'>
                {props.subtitle}
            </Typography>
            
        </Stack>

        <Link href={props.link} underline='none'>
            <Button variant='outlined'>VIEW MORE</Button>
        </Link>

    </Box>

  )

}

export default GenreHeader