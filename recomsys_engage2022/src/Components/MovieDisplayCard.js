import React from 'react'
import {Box, Card, CardContent, Button, Typography, CardMedia} from '@mui/material'

import img from '../static/images/cards/default.jpg'

function MovieDisplayCard(props) {

  const handleClick = (event)=>{

    // name of the movie,director... of the movie on which the viewer clicked WATCH

    let name = props.movie.name!==undefined?props.movie.name:props.movie.title

    let director = props.movie.director!==undefined ? props.movie.director :
                    props.movie.crew.split(',')[0].split('(')[0].trim()
    
    let genre = props.movie.genre

    let language = props.movie.language
    
    // Retrieving the data stored in the local Storage
    let nameObj = JSON.parse(localStorage.getItem('names'))

    let directorObj = JSON.parse(localStorage.getItem('directors'))

    let genreObj = JSON.parse(localStorage.getItem('genres'))

    let languageObj = JSON.parse(localStorage.getItem('languages'))


    // If any of the obtained data is null that means thats the first movie ot data item to be added in the local storage
    // if it is null just add it { name : 1 } ( 1 because thats the first time he is watching)
    // if not null then if the viewer already watched that movie increment the value by one else register the movie by setting the count as 1
    // same with director, genre, language

    if(nameObj === null){
      nameObj = {}
      nameObj[name] = 1
      localStorage.setItem('names' , JSON.stringify(nameObj))
    }
    else{
      if(nameObj[name] == undefined){
        nameObj[name] = 1
      }
      else nameObj[name] += 1

      localStorage.setItem('names' , JSON.stringify(nameObj))
    }
    
    if(languageObj === null){
      languageObj = {}
      languageObj[language] = 1
      localStorage.setItem('languages' , JSON.stringify(languageObj))
    }
    else{
      if(languageObj[language] == undefined){
        languageObj[language] = 1
      }
      else languageObj[language] += 1

      localStorage.setItem('languages' , JSON.stringify(languageObj))
    }

    if(directorObj===null){
      directorObj = {}
      director.split(',').forEach(element => {
        directorObj[element] = 1
      });
      localStorage.setItem('directors' , JSON.stringify(directorObj))
    }
    else{
      director.split(',').forEach(element => {
        if(directorObj[element.trim()] === undefined) directorObj[element.trim()] = 1
        else directorObj[element.trim()] += 1
      });

      localStorage.setItem('directors', JSON.stringify(directorObj))
    }

    if(genreObj === null){
      genreObj = {}
      genre.split(',').forEach(element => {
        genreObj[element.trim()] = 1
      });
      localStorage.setItem('genres' , JSON.stringify(genreObj))
    }
    else{
      genre.split(',').forEach(element => {
        if(genreObj[element.trim()] === undefined) genreObj[element.trim()] = 1
        else genreObj[element.trim()] += 1
      });
      
      localStorage.setItem('genres', JSON.stringify(genreObj))
    }


    // reload on watching to push new recommendations
    document.location.reload()
    
  }
  return (

    <Card sx={{maxWidth : 250 }}>
        <CardMedia
            component="img"
            alt="temp"
            height='100'
            image={props.api == 'built'? img : props.movie.image}
        />

        {props.api == 'built' ?
            <CardContent sx={{display: 'flex' , flexDirection: 'column', height: 220, justifyContent: 'space-between'}} >

              <Box>
                <Typography gutterBottom component="h6" variant='h6' >
                  {props.movie.name}
                </Typography>

                <Typography variant="body1" fontSize={13}>
                  Imdb : {props.movie.imdb}
                </Typography>
                <Typography variant="body1" fontSize={13}>
                  Directed by : {props.movie.director}
                </Typography>
                <Typography variant="body1" fontSize={13}>
                  Genre : {props.movie.genre}
                </Typography>
                <Typography variant="body1" fontSize={13} gutterBottom>
                  Starring : {props.movie.starring}
                </Typography>
              </Box>
              <Box sx={{ display : 'flex'}} justifyContent='flex-end' marginTop={2}>
                <Button variant='outlined' onClick={handleClick}  > WATCH</Button>
              </Box>
            </CardContent> 
            :
            <CardContent sx={{display: 'flex' , flexDirection: 'column', height: 220, justifyContent: 'space-between'}} >

              <Box>
                <Typography gutterBottom component="h6" variant='h6' >
                  {props.movie.title}
                </Typography>

                <Typography variant="body1" fontSize={13}>
                  Imdb : {props.movie.imDbRating}
                </Typography>
                <Typography variant="body1" fontSize={13}>
                  Directed by : {props.movie.crew.split(',')[0].split('(')[0].trim()}
                </Typography>
                <Typography variant="body1" fontSize={13}>
                  Year : {props.movie.year}
                </Typography>
                <Typography variant="body1" fontSize={13} gutterBottom>
                  Starring : {props.movie.crew.split(',')[1] + ', ' + props.movie.crew.split(',')[2]}
                </Typography>
              </Box>
              <Box sx={{ display : 'flex'}} justifyContent='flex-end' marginTop={2}>
                <Button variant='outlined' onClick={handleClick}  > WATCH</Button>
              </Box>
            </CardContent>

            
        }
    </Card>
  )
}

export default MovieDisplayCard