import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";
import requests from './Request'

function App() {

  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">

      {/* Header */}
      <Header setSelectedOption={setSelectedOption} />

      {/* Nav */}

      {/* <Nav />  */}


      {/* Results */}
      <Results selectedOption = {selectedOption}/>
      
    </div>
  );
}

export default App;
