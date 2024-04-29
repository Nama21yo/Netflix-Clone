import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOrginals);
        console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/w300${movie?.backdrop_path}')`,
        backgroundPosition: "25% 75%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.orginal_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>
        {/* <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1> */}
      </div>

      <div className="banner_fadeBottom"></div>
    </div>
  );
};

export default Banner;
