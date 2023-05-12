import Navigator from './Componemts/Navigator';   
import './App.css';
import Rigbutton from './Componemts/Rigbutton';
import Carousel from './Componemts/Carousel';
import React, { useState } from 'react';


function App() {
  return (
   <>
     <Navigator/>
     <Carousel />
     <Rigbutton/>
     
   </>
  );
}

export default App;
