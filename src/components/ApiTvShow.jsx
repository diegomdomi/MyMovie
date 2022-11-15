import React from 'react'
import { useState,useEffect } from 'react';
import Card from "./Card"


const ApiTvShow = () => {

 
    const [mostrar, setMostrar] = useState([])

    useEffect(()=>{
              fetchData()
          },[])
  
  const baseUrl = 'https://api.themoviedb.org/3/tv/popular?'
  const apiKey = process.env.REACT_APP_APIKEY;
  
  function fetchData(){
      try{
          fetch(`${baseUrl}api_key=${apiKey}`)
          .then(response=>response.json())
          .then(data=>{
              console.log(data.results)
              setMostrar(data.results)
          })
      }catch(error){
          console.log(error)
      }
  }
    return (
      <div className=" container p-4 ">
      <h1 className="badge bg-warning text-dark mt-3 text-uppercase fs-2 mb-5">Most Popular Tv-Show</h1>
         
       <div className="row" >
          {
              mostrar.map(item =>(
                 
              <div className="col-md-3" key={item.id}>
                  <Card title={item.name}
                        imgUrl={ `https://image.tmdb.org/t/p/original/${item.poster_path}`}
                        overview={ item.first_air_date }
                        id={ item.id }
                        type='tv'

                    />
              </div>
             )
             
             )
          }
      
  </div>
  </div>
  )
  }
export default ApiTvShow
