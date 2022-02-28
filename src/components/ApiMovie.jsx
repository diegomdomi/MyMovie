import React from 'react'
import { useState,useEffect } from 'react';

const ApiMovie = () => {

  const [mostrar, setMostrar] = useState([])

  useEffect(()=>{
            fetchData()
        },[])

const baseUrl = process.env.REACT_APP_BASE_URL;
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
  <div></div>
)
}

export default ApiMovie