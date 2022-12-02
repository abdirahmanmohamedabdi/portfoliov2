import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Sticky,
  batch,
  Zoom,
  Fade,
  MoveOut,
  StickyIn,
  FadeIn,
  ZoomIn,
  Move,
  MoveIn,
} from "react-scroll-motion";
import "./App.css";
import NavBar from "./components/Navbar";
import Lottie from 'react-lottie';
import Projects from "./components/projects";
import Duck from "./duck.jpg"

import Homepage from "./components/Homepage";


import Project from "./components/projects";

import Appers from "./components/Text";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), Move());
function App() {
  return (
    <div className="App">
     
   <Homepage/>
     </div>
  );
}

export default App;
