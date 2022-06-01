import axios from "axios"
import { API_KEY } from "../secrets"
import { baseURL } from "./base_URL"

export default async function getMoviesByGenre(genre){
        const movies = await axios.get(`${baseURL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`)
        .then(res => {
          return res.data.results
        })
        return movies
}