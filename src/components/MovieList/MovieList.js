
import "./MovieList.css"
import MovieItem from "../MovieItem/MovieItem"
import getMoviesByGenre from "../../hooks/GetMoviesByGenre"
import React from "react"

import axios from "axios"
import { API_KEY } from "../../secrets"
import { baseURL } from "../../hooks/base_URL"


export default function MovieList({id, name}) {
  const [movies, setMovies] = React.useState([])

  React.useEffect(async ()=> {
    const movieArr = await axios.get(`${baseURL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`)
    .then(res => {
      console.log(res.data.results)
      return res.data.results
    })
    setMovies(movieArr)
  },[]) 

  return (
    <MovieItem
      movies={movies} 
      id={id}
      name={name}
      />
  )
}
