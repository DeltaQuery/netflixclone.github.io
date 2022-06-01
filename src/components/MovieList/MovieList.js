
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
    const movieArr = await getMoviesByGenre(id)
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
