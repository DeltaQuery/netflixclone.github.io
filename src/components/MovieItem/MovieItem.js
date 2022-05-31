import "./MovieItem.css"
import React from "react"
import getMoviesByGenre from "../../hooks/GetMoviesByGenre"

export default function MovieItem({ id, name, movies}) {

  return (
    <section className="moviesContainer">
        <h4>{name}</h4>
        <div className="movieItems">
          {
            movies && movies.map(movie => {
              return <article
                className="movieItem"
                key={movie.id}>
                <img src={"https://image.tmdb.org/t/p/w300/" + movie.backdrop_path}></img>
                <p>{movie.title}</p>
              </article>
            })
          }
        </div>
    </section>
  )
}
