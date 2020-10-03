import React, { useEffect, useState } from "react";
import "./Nav.css";
import requests from "./Request";

const Nav = ({ setSelectedOption }) => {
  const [choice, setChoice] = useState()
  const handleClick = (selected) => (e) => {
    e.preventDefault();

    setSelectedOption(selected);
  };

  // useEffect(() => {
  //   setSelectedOption(choice);
  // }, [choice]);
  return (
    <div className="nav">
      <h2 onClick={handleClick(requests.fetchTrending)}>Trending</h2>
      <h2 onClick={handleClick(requests.fetchTopRated)}>Top Rated</h2>
      <h2 onClick={handleClick(requests.fetchActionMovies)}>Action</h2>
      <h2 onClick={handleClick(requests.fetchComedyMovies)}>Comedy</h2>
      <h2 onClick={handleClick(requests.fetchHorrorMovies)}>Horror</h2>
      <h2 onClick={handleClick(requests.fetchRomanceMovies)}>Romance</h2>
      <h2 onClick={handleClick(requests.fetchMystery)}>Mystery</h2>
      <h2 onClick={handleClick(requests.fetchSciFi)}>Sci-fi</h2>
      <h2 onClick={handleClick(requests.fetchWestern)}>Western</h2>
      <h2 onClick={handleClick(requests.fetchAnimation)}>Animation</h2>
      <h2 onClick={handleClick(requests.fetchTV)}>Movie</h2>
    </div>
  );
};

export default Nav;
