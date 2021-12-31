import React from 'react'
import './App.css';
import Imageslider from './components/Imageslider'
import { Sliderdata } from './components/Sliderdata'

function App() {
  return <Imageslider slides={Sliderdata}/>
}
export default App;