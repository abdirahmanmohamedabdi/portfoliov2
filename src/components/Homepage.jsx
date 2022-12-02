import React from "react";
import Portfolio from "./projects";


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
import "../App.css";
import NavBar from "./Navbar";
import Lottie from "react-lottie";

import { Text } from "@chakra-ui/react";

import Project from "./projects";

import Duck from "../duck.jpg";
import Appers from "./Text";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), Move());
function Homepage() {
  return (
    <div className="App">
      <NavBar />

      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(12, -200))}>
            <Text fontSize="4xl">Hi, I'm Abdirahman Mohamed👋🏼</Text>
          </Animator>
        </ScrollPage>

        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <Text fontSize="2xl">A Developer Based In Nairobi Kenya</Text>
          </Animator>
        </ScrollPage>

        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <Text fontSize="2xl">
              Whether it's a job opportunity, an invite to coffee, or feedback
              on my portfolio, my inbox is open!
            </Text>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <div className="section-3">
            <h2>
              <Animator
                animation={MoveIn(-1000, 0)}
                a
                href="https://www.facebook.com/learnbuildteach/"
              >
                <a href="https://www.w3schools.com/">
                  
                </a>
              </Animator>
              <Animator animation={MoveIn(1000, 0)}>Hello guys 2</Animator>
            </h2>
          </div>
        </ScrollPage>
      </ScrollContainer>
      <Portfolio/>
    </div>
  );
}

export default Homepage;
