import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import "./Results.css";
import { axiosWithAuth } from './axiosWithAuth'
import requests from "./Request";
import FlipMove from "react-flip-move";

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //going to use async instead of .then promise

    // async function fetchData() {
    //   const request = await axiosWithAuth.get(selectedOption);
    //   console.log(request);
    //   setMovies(request.data.results);
    // }
    // fetchData();
    axiosWithAuth()
      .get(`${selectedOption}`)
      .then(res => {
        setMovies(res.data.results)
      })

  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
};

export default Results;
