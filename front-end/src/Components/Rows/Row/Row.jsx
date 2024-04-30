import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/w780";

  // useEffect(() => {
  //   async () => {
  //     try {
  //       const request = await axios.get(fetchUrl);
  //       setMovie(request.data.results);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  // }, [fetchUrl]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const request = await axios.get(fetchUrl);
  //       setMovie(request.data.results);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };

  //   fetchData(); // Invoke the fetchData function
  // }, [fetchUrl]);
  useEffect(() => {
    console.log("Fetch URL:", fetchUrl); // Log fetch URL
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        const fetchedMovies = request.data.results;
        console.log("Fetched Movies:", fetchedMovies);
        setMovie(fetchedMovies);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.orginal_name).then(
        (url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <img
              onClick={() => handleClick(movie)}
              key={index}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            />
          ))
        ) : (
          <p>No movies available for {title}</p>
        )}
      </div>

      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
