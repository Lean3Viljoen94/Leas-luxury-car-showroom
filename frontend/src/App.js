import React from 'react';
import './App.css';
import CarCards from './Components/CarCards';
import AddCar from './Components/AddCar';
import CarCarousel from './Components/Carousel';
import CarHeader from './Components/Header';
import Filters from './Components/Filters';


function App() {
  return (
    <div className="App">
      <CarHeader/>
      <CarCarousel/>
      <br/>
      <Filters/>
      <CarCards/>
      <br/>
      <AddCar/>
    </div>
  );
}

export default App;
