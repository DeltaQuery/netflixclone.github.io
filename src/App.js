import MainHeader from "./components/MainHeader/MainHeader"
import MovieList from "./components/MovieList/MovieList"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { MoreToWatch } from "./components/MoreToWatch/MoreToWatch"

//busqueda pelis, se puede agregar genero como parametro genres
//page=1 muestra 1ra pag

//https://api.themoviedb.org/3/       

//discover/movie?api_key=6823a283da77c434957552c251eda3e7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=action&with_watch_monetization_types=flatrate

//https://api.themoviedb.org/3/movie/popular?api_key=6823a283da77c434957552c251eda3e7&language=en-US&page=1
//backdrop_path:
//poster_path:
//https://image.tmdb.org/t/p/w300/

const categories = [
  "Popular on Netflix",
  "Action Thrillers",
  "Romantic Movies",
  "Family Feature Animation",
  "Gritty Movies",
  "Horror Movies",
  "Released in the Past Year",
  "Raunchy Comedies",
  "Action Movies",
  "Comedies",
  "New Releases",
  "Award-Winning Films",
  "Action & Adventure",
  "Fantasy Movies"
]

const genres = [
  {
  id: 28,
  name: "Action"
  },
  {
  id: 12,
  name: "Adventure"
  },
  {
  id: 16,
  name: "Animation"
  },
  {
  id: 35,
  name: "Comedy"
  },
  {
  id: 80,
  name: "Crime"
  },
  {
  id: 99,
  name: "Documentary"
  },
  {
  id: 18,
  name: "Drama"
  },
  {
  id: 10751,
  name: "Family"
  },
  {
  id: 14,
  name: "Fantasy"
  },
  {
  id: 36,
  name: "History"
  },
  {
  id: 27,
  name: "Horror"
  },
  {
  id: 10402,
  name: "Music"
  },
  {
  id: 9648,
  name: "Mystery"
  },
  {
  id: 10749,
  name: "Romance"
  },
  {
  id: 878,
  name: "Science Fiction"
  },
  {
  id: 10770,
  name: "TV Movie"
  },
  {
  id: 53,
  name: "Thriller"
  },
  {
  id: 10752,
  name: "War"
  },
  {
  id: 37,
  name: "Western"
  }
]  

export default function App() {

  return (
    <div className="App">
    <Navbar/>
    <div className="main-content-container">
      <MainHeader/>
      {genres.map((genre, index) => {
        return <MovieList
        id={genre.id}
        name={genre.name}
        key={`movie-${index}`}
        />
      })}
      <MoreToWatch/>
    </div>
    <Footer/>
    </div>
  )
}
