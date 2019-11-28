import React, { Component } from 'react';

import "./App.css";
import CarCarousel from "./Components/Carousel";
import CarHeader from "./Components/Header";
import Content from "./Components/Content";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <CarHeader />
        <CarCarousel />
        <Content />
      </Router>
    </div>
  );
}

export default App;
