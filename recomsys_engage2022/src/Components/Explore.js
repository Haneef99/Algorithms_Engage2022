import { Box, TextField, Button,Grid, Card , CardMedia, CardContent, Typography} from '@mui/material'
import React from 'react'

function Explore() {

    const [SearchData, setSearchData] = React.useState(undefined)
    const [SearchText, setSearchText] = React.useState('')


    const clickHandler = (event)=>{
        fetch('https://imdb-api.com/en/API/Search/k_qx3wvk53/'+SearchText)
        .then(
            res => res.json()
        )
        .then(
            res => setSearchData(res)
        )
    }


    const changeHandler = (event)=>{
        setSearchText(event.target.value)
    }

    console.log(SearchData)


  return (
    
    <Box>
        <Box sx={
                {
                    display : 'flex' , 
                    justifyContent: 'flex-start', 
                    alignItems : 'flex-end', 
                    padding : '20px', 
                    marginBottom : '150px'
                }
            } 
            marginLeft={6}
        >

            <TextField id="standard-basic" label="Enter Keyword" variant="standard" onChange={changeHandler} />
            <Button variant = 'contained' sx={{height: '30px'}} onClick={clickHandler}>Search</Button>
            

        </Box>
        {
            SearchData!==undefined 
            
            &&

            <Box sx={{padding : '20px'}}> 
                <Typography  variant='h5'>
                    Search Results ...
                </Typography>
                <Grid container my={4}>
                    {
                        SearchData.results.map(a=>
                            <Grid item xs={6} md={2.4} py={3}>
                                <Card sx={{maxWidth : 250 }}>
                                    <CardMedia 
                                        component="img"
                                        alt="temp"
                                        height='200'
                                        image={a.image}
                                    />

                                    <CardContent sx={{display: 'flex' , flexDirection: 'column', height: 120, justifyContent: 'space-between', flexGrow : 1}}>

                                        <Box>
                                            <Typography gutterBottom component="h6" variant='h6' >
                                                {a.title}
                                            </Typography>

                                            <Typography variant="body1" fontSize={13}>
                                                Year : {a.description.split(')')[0].split('(')[1]}
                                            </Typography>

                                            <Box 
                                                sx={{ display : 'flex'}}
                                                justifyContent='flex-end' 
                                                marginTop={2}
                                            >
                                                <Button variant='outlined'> 
                                                    WATCH
                                                </Button>

                                            </Box>

                                        </Box>

                                    </CardContent>
                                </Card>
                            </Grid>    
                        )
                    }
                </Grid>
            </Box>

        }
    </Box>        


  )
}

export default Explore