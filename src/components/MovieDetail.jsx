import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

const MovieDetail = () => {
  const [mostrar, setMostrar] = useState([])
  const{type,id}=useParams()

  useEffect(()=>{
            fetchData()
        },[])

const baseUrl = `https://api.themoviedb.org/3/${type}/${id}?`
const apiKey = process.env.REACT_APP_APIKEY;

function fetchData(){
    try{
        fetch(`${baseUrl}api_key=${apiKey}`)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            setMostrar(data)
        })
    }catch(error){
        console.log(error)
    }
}
  return (
    

<div class="container ">
<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4" >
      <img src={`https://image.tmdb.org/t/p/original/${mostrar.backdrop_path}`} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" >
        <h5 class="card-title">{type === "tv" ? mostrar.original_name : mostrar.title}</h5>
        <p class="card-text">{mostrar.overview}</p>
        <p class="card-text"><small class="text-muted">{mostrar.release_date}</small></p>
      </div>
    </div>
  </div>
</div>
</div>

    )
}

export default MovieDetail 