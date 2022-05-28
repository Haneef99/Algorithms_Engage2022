import React from 'react'
import { Box } from '@mui/material'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Explore from './Components/Explore'
import Home from './Components/Home'
import {Routes, Route} from 'react-router-dom'
import BuildView from './Components/BuildView'


function App() {

  //data collected from the api
  const [Data,setData] = React.useState([])

  //data collected from the imDb api
  const [imdbTop, setimdbTop] = React.useState([])

  // location information retrieved using ipinfo
  const [Location,setLocation] = React.useState({})


  React.useEffect(()=>{

    fetch('http://127.0.0.1:8000/')
    .then(res => res.json())
    .then(res => setData(res));

    fetch('https://imdb-api.com/en/API/Top250Movies/k_qx3wvk53')
    .then(res => res.json())
    .then(res => setimdbTop(res))


    fetch("https://ipinfo.io/json?token=f07365cbbd12c1")
    .then((response) => response.json())
    .then((jsonResponse) => setLocation(jsonResponse))
    .catch(err => alert("Plese turn off privacy for better experience"))

  },[])

  // console.log(imdbTop)

  // collecting the previosly stored information in the local storage
  // it contains the names of movies, directors, genres, languages in the viewers history
  let TempnameObj = JSON.parse(localStorage.getItem('names'))
  let TempdirectorObj = JSON.parse(localStorage.getItem('directors'))
  let TempgenreObj = JSON.parse(localStorage.getItem('genres'))
  let TemplanguageObj = JSON.parse(localStorage.getItem('languages'))


  let finalArray = []
  
  if(TempnameObj!==null && TempdirectorObj!==null && TemplanguageObj!==null && TempgenreObj!==null){

    // the objects are stored in the form {name : count} count here defines the number of times the user watched 
    // lets calculate the total count so that we can compute the probabilities

    let sumn=0,sumd=0,sumg=0,suml=0
    for(const key in TempnameObj){
      sumn += TempnameObj[key]
    }
    for(const key in TempdirectorObj){
      sumd += TempdirectorObj[key]
    }
    for(const key in TempgenreObj){
      sumg += TempgenreObj[key]
    }
    for(const key in TemplanguageObj){
      suml += TemplanguageObj[key]
    }

    // calculating the probability of watching that particular genre, language, director's film
    for(const key in TempnameObj){
      TempnameObj[key]/=sumn
    }
    for(const key in TempdirectorObj){
      TempdirectorObj[key]/=sumd
    }
    for(const key in TempgenreObj){
      TempgenreObj[key]/=sumg
    }
    for(const key in TemplanguageObj){
      TemplanguageObj[key]/=suml
    }

    let obj = {}
    let movieObj = {}
    
    for(const i in Data){
      let temp = Data[i]

      if(TempnameObj[temp.name] !== undefined) continue

      let prob =0

      temp.genre.split(',').forEach(element => {
        if(TempgenreObj[element.trim()] !== undefined)
          prob+=TempgenreObj[element.trim()]
      });

      temp.director.split(',').forEach(element => {
        if(TempdirectorObj[element.trim()] !== undefined) 
          prob += TempdirectorObj[element.trim()]
      });

      if(TemplanguageObj[temp.language] !== undefined) 
        prob+=TemplanguageObj[temp.language]

      obj[temp.name] = prob
      movieObj[temp.name] = temp
    }

    let sortObj = []
    // ***************************  SORT  *****************************
    // sorting the object
    // Role played by a sorting algorithm :
    // here sorting the object is important because we are trying to get the movies which have the maximum probability of watching
    //the following sort function (Array.sort) uses merge sort algorithm which i think is the best for sorting in this case ( TC - O(nlogn) ) 
    for(var i in obj){
      sortObj.push([i , obj[i]])
    }
    sortObj.sort(function(a,b){
      return a[1] - b[1]
    })
    
    // selecting the 20 movies for recommending to the user
    sortObj.slice(sortObj.length-20,sortObj.length).reverse().forEach(e => {
      finalArray.push(movieObj[e[0]])
    })
    // console.log(obj)
    // console.log(finalArray)
  }

  

  return (
    <Box>
      <Navbar location={Location}></Navbar>

      <Routes>

        <Route path='/'  
            element=
              {
                Location!==undefined 
                && 
                <Home finalArray={finalArray}  location={Location} imdbTop={imdbTop} movies={Data}
                />
              }
        />
        
        <Route path='/recommendations'  
          element=
          {
            <BuildView api='built'
                title='Recommended For You'
                data = {finalArray}
                pd={1}
            ></BuildView>
          }
        />

        <Route path='/explore' 
          element=
          {
            <Explore></Explore>
          }>

        </Route>

        <Route 
          path='/top' 
          element=
            { 
              imdbTop.items!==undefined 
              && 
              <BuildView api="imDb" 
                  data={imdbTop.items} 
                  title="Top 250 Movies" 
                  pd={1} 
              />
            }
        />

        <Route 
          path='/local' 
          element={ Location!==undefined && 
            <BuildView api='built'  data={
          Location.region==='Telangana' ? Data.filter(item => item.language === 'Telugu') : Location.region === 'Karnataka' ? Data.filter(item => item.language === 'Kannada') : Data.filter(item => item.language === 'Hindi')
        } pd={1} title="Local Picks"></BuildView>
            }
        />

        <Route 
        path='/Sci-fi' 
        element={ 
            <BuildView 
              length ={Data.filter(item => item.genre.includes('Sci-fi')).length} 
              api= 'built' 
              data={Data.filter(item => item.genre.includes('Sci-fi'))}  
              title='Sci-fi and Fantasy' pd={1} >

            </BuildView>} 
        />

        <Route 
        path='/Accr'
        element={
          <BuildView 
              length ={Data.filter(item => item.genre.includes('Action') || item.genre.includes('Crime')).length} 
              api= 'built' 
              data={Data.filter(item => item.genre.includes('Action') || item.genre.includes('Crime'))}  
              title='Action and Crime' pd={1} >

          </BuildView>} 
        />
        
        <Route 
        path='/Myth' 
        element={
          <BuildView 
            length ={Data.filter(item => item.genre.includes('Mystery') || item.genre.includes('Thriller')).length} 
            api= 'built' 
            data={Data.filter(item => item.genre.includes('Mystery') || item.genre.includes('Thriller'))}  
            title='Mystery and Thriller' pd={1} >
          </BuildView>} 
        />


        <Route 
        path='/dramas' 
        element={
          <BuildView 
            api= 'built' 
            data={
              Data.filter(item => !item.genre.includes('Mystery') 
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
            title='Dramas' pd={1} >
          </BuildView>} 
        />

      </Routes>

      <Footer></Footer>

    </Box>
  )
}

export default App