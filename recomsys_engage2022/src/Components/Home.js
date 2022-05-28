import { Box} from '@mui/material'
import React from 'react'
import BuildView from './BuildView'
import GenreHeader from './GenreHeader'


function Home(props) {

  // console.log(props.finalArray)
  
  //Home page provides preview of all categories of views provided by the website

  let locationObj = {
    'Telangana' : 'Telugu',
    'Andhra Pradesh' : 'Telugu',
    'Karnataka' : 'Kannada',
    'Tamil Nadu' : 'Tamil',
    'Kerala' : 'Malayalam'
  }


  return (
    <Box padding={5}>

        
        {
          //Recommended For You section
          props.finalArray!==undefined 
          &&
          props.finalArray.length > 0
          &&
          <Box>

            <GenreHeader title="Recommended For You" subtitle="" link='/recommendations'>

            </GenreHeader>

            <BuildView length={5} api='built' data={props.finalArray} pd={0}>

            </BuildView>
            
          </Box>


        }


        {
          //All time best movies section which is collected from imdb api 
        }
        

        { 
            props.imdbTop.items!==undefined 
            && 
            <Box>
              <GenreHeader 
                    title="All Time Best Movies" 
                    subtitle="According to the imDb ratings" 
                    link='/top'
              ></GenreHeader>
              <BuildView 
                    length={5} 
                    api='imdb' 
                    data={props.imdbTop.items} 
                    pd={0}
              ></BuildView> 

            </Box>
        }


       { 
          // if the locations of user is defined the it pushes few movies in the regional language of the user
          props.location.region !==undefined 
          && 
          <GenreHeader 
              title="Local Picks" 
              subtitle="Enjoy movies in your regional language" 
              link='/local'
          ></GenreHeader>
        }
        
        {
          props.location.region !== undefined 
          && 
          <BuildView 
              length={5} 
              api='built' 
              data=
              {

                (locationObj[props.location.region] !== undefined && props.location.country === 'IN')
                ?
                props.movies.filter(item => item.language === locationObj[props.location.region])
                :
                props.movies.filter(item => item.language === 'Hindi')
              } 
              pd={0}
          ></BuildView>
        }


        {
          //Sci-fi genre movies section
        }
        <GenreHeader 
            title="Sci-Fi & Fantasy" 
            subtitle="Watch latest Sci-Fi movies on STREAM" 
            link='/Sci-fi'
        >

        </GenreHeader>

        <BuildView 
            length={5} 
            api='built' 
            data={props.movies.filter(item => item.genre.includes('Sci-fi'))} 
            pd={0}
        >

        </BuildView>

        {
          //Action and Crime movies section
        }

        <GenreHeader 
            title="Action & Crime" 
            subtitle="" 
            link='/Accr'
        >

        </GenreHeader>
        

        <BuildView 
            length={5} 
            api='built' 
            data={
              props.movies.filter(item => 
              (
                item.genre.includes('Action') 
                || 
                item.genre.includes('Crime')
              )
              && 
              item.language.includes('English'))
            } 
            pd={0}
        >

        </BuildView>

        {
          //Mystery and Thrillers movies section
        }


        <GenreHeader 
            title="Mystery & thrillers" 
            subtitle="" 
            link='/Myth'
        >

        </GenreHeader>

        <BuildView 
            length={5} 
            api='built' 
            data={
              props.movies.filter(item => item.genre.includes('Mystery') 
              || 
              item.genre.includes('Thriller'))
            } 
            pd={0}
        >

        </BuildView>

        <GenreHeader 
            title="Dramas" 
            subtitle="" 
            link='/dramas'
        >

        </GenreHeader>

        <BuildView 
            length={5} 
            api='built' 
            data={
              props.movies.filter(item => !item.genre.includes('Mystery') 
              && 
              !item.genre.includes('Thriller')
              && 
              !item.genre.includes('Action')
              && 
              !item.genre.includes('Sci-fi')
              && 
              !item.genre.includes('Crime')
              
              )
            } 
            pd={0}
        >

        </BuildView>

    </Box>
  )
}

export default Home