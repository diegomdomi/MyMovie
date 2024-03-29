import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

const MovieDetail = () => {
  const [mostrar, setMostrar] = useState([])
  const {type,id} = useParams()

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
    
<>
<div className="container detail">
  <div className="overflow" style={{paddingBottom:"200px"}}> 
<div className="card_detail mb-3" >
  <div className="row  g-0">
    <div className="col-md-4" >
      <img src={`https://image.tmdb.org/t/p/original/${mostrar.poster_path}`} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div className=" col-md-8 " style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${mostrar.backdrop_path})`,backgroundSize:"cover",opacity:"0.9"}}>
      <div className="card-body" >
        <h4 className="card-title text-white ">{type === "tv" ? mostrar.original_name : mostrar.title}</h4>
        <p className="card-text text-white" style={{fontSize:"1.5rem", textShadow: "2px 4px 10px red"}}>{mostrar.overview}</p>
        <p className="card-text"><small className="text-white">{mostrar.release_date}</small></p>
      </div>
    </div>
  </div>
  </div>
</div>
</div>
<div>
</div>
</>
    )
}

export default MovieDetail 