import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [movie, setMovie] = useState();
  const [adult, setAdult] = useState(false);
  const [movieInfo, setMovieInfo] = useState();
  const [qInUse, setQInUse] = useState("");
  
  const getRegularMovies = async () => {
    let n = Math.floor(Math.random() * 8)
    console.log(n)
    switch (n) {
      //1850-1910
      case 0:
        await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.lte=R&primary_release_date.gte=1850-01-01&primary_release_date.lte=1910-12-31")
        .then(res => setMovieInfo(res.data.total_pages))
        .catch(err => console.log(err))
        setQInUse("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.lte=R&primary_release_date.gte=1850-01-01&primary_release_date.lte=1910-12-31")
        break;
      //1910-1970
      case 1:
        await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.lte=R&primary_release_date.gte=1910-01-01&primary_release_date.lte=1970-12-31")
        .then(res => setMovieInfo(res.data.total_pages))
        .catch(err => console.log(err))
        setQInUse("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.lte=R&primary_release_date.gte=1910-01-01&primary_release_date.lte=1970-12-31")
        break;
      //1970-1990
      case 2:
        await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.lte=R&primary_release_date.gte=1970-01-01&primary_release_date.lte=1990-12-31")
        .then(res => setMovieInfo(res.data.total_pages))
        .catch(err => console.log(err))
        setQInUse("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.lte=R&primary_release_date.gte=1970-01-01&primary_release_date.lte=1990-12-31")
        break;
      //1990-2003
      case 3:
        await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.lte=R&primary_release_date.gte=1990-01-01&primary_release_date.lte=2003-12-31")
        .then(res => setMovieInfo(res.data.total_pages))
        .catch(err => console.log(err))
        setQInUse("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.lte=R&primary_release_date.gte=1990-01-01&primary_release_date.lte=2003-12-31")
        break;
      //2003-2010
      case 4:
        await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.lte=R&primary_release_date.gte=2003-01-01&primary_release_date.lte=2010-12-31")
        .then(res => setMovieInfo(res.data.total_pages))
        .catch(err => console.log(err))
        setQInUse("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.lte=R&primary_release_date.gte=2003-01-01&primary_release_date.lte=2010-12-31")
        break;
      //2010-2015
      case 5:
        await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.lte=R&primary_release_date.gte=2010-01-01&primary_release_date.lte=2015-12-31")
        .then(res => setMovieInfo(res.data.total_pages))
        .catch(err => console.log(err))
        setQInUse("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.lte=R&primary_release_date.gte=2010-01-01&primary_release_date.lte=2015-12-31")
        break;
      //2015-2019
      case 6:
        await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.lte=R&primary_release_date.gte=2015-01-01&primary_release_date.lte=2019-12-31")
        .then(res => setMovieInfo(res.data.total_pages))
        .catch(err => console.log(err))
        setQInUse("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.lte=R&primary_release_date.gte=2015-01-01&primary_release_date.lte=2019-12-31")
        break;
      //2019-2022
      case 7:
        await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.lte=R&primary_release_date.gte=2019-01-01&primary_release_date.lte=2022-12-31")
        .then(res => setMovieInfo(res.data.total_pages))
        .catch(err => console.log(err))
        setQInUse("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.lte=R&primary_release_date.gte=2019-01-01&primary_release_date.lte=2022-12-31")
        break;
    }
  }

  const getAdultMovies = async () => {
    let n = Math.floor(Math.random() * 3)
    console.log(n)
    switch (n) {
      //1850-2010
      case 0:
        await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.gte=NC-17&include_adult=true&primary_release_date.gte=1850-01-01&primary_release_date.lte=2010-12-31")
        .then(res => setMovieInfo(res.data.total_pages))
        .catch(err => console.log(err))
        setQInUse("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.gte=NC-17&include_adult=true&primary_release_date.gte=1850-01-01&primary_release_date.lte=2010-12-31")
        break;
      //2011-2016
      case 1:
        await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.gte=NC-17&include_adult=true&primary_release_date.gte=2011-01-01&primary_release_date.lte=2016-12-31")
        .then(res => setMovieInfo(res.data.total_pages))
        .catch(err => console.log(err))
        setQInUse("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.gte=NC-17&include_adult=true&primary_release_date.gte=2011-01-01&primary_release_date.lte=2016-12-31")
        break;
      //2017-2022
      case 2:
        await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.gte=NC-17&include_adult=true&primary_release_date.gte=2017-01-01&primary_release_date.lte=2022-12-31")
        .then(res => setMovieInfo(res.data.total_pages))
        .catch(err => console.log(err))
        setQInUse("https://api.themoviedb.org/3/discover/movie?api_key=<<your_api_key>>&language=en-US&sort_by=popularity.desc&certification_country=US&certification.gte=NC-17&include_adult=true&primary_release_date.gte=2017-01-01&primary_release_date.lte=2022-12-31")
        break;
    }
  }

  const getMovie = async () => {
    await axios.get(qInUse + `&page=${Math.floor(Math.random() * movieInfo)}`)
    .then(res => setMovie(res.data.results[Math.floor(Math.random() * 20)]))
    .catch(err => console.log(err))
    setQInUse("");
  }

  const toggle = () => {
    setAdult(!adult);
  }

  useEffect(() => {
    adult ? getAdultMovies() : getRegularMovies();
  }, [adult])

  useEffect(() => {
    getMovie();
  }, [qInUse]);
  
  console.log(movie)
  return (
    <div className="App">
      <header className="App-header">
          {movie ? 
          <><div style={{ height: "2vh" }} /><button onClick={toggle} style={adult ? { padding: 10, backgroundColor: "red", fontWeight: "bold" } : { padding: 10, backgroundColor: "green", fontWeight: "bold" }}>
            {adult ? "Showing porn movies" : "Showing regular movies"}
          </button><div style={{ width: "80%" }}>
              <div>
                <p>{movie.original_title}</p>
                <p>Released: {movie.release_date ? movie.release_date : "Unknown"}</p>
              </div>
              <div style={{ height: "2vh" }} />
              <img src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} />
              <div style={{ height: "2vh" }} />
              <p>Rating: {movie.vote_average ? movie.vote_average : 0}/10 ({movie.vote_count} votes)</p>
              <div style={{ height: "2vh" }} />
              <p>{movie.overview}</p>
              <div style={{ height: "2vh" }} />
            </div><button onClick={adult ? getAdultMovies : getRegularMovies} style={{ padding: 20 }}>New movie</button><div style={{ height: "2vh" }} /></> : <h1>Loading...</h1>}
      </header>
    </div>
  )
}

export default App
