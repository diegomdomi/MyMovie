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
    
    <div className="movieDetail" style={{ 
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${mostrar.poster_path}")`,
    }}>
      <div className="clearfix">
   
  <img src={`https://image.tmdb.org/t/p/original/${mostrar.backdrop_path}`} class="col-md-6 float-md-end mb-3 ms-md-3" alt="im."/>

  <h3>
    {type === "tv" ? mostrar.original_name : mostrar.title}
  </h3>

  <h5>
    {mostrar.overview}
  </h5>

  <p>

  </p>

</div>
</div>


    )
}

export default MovieDetail 