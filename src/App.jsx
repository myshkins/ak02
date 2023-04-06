import { useState } from "react";

import "./App.css";
import blurbs from './components/Blurbs'
import AirbooPic from "./assets/project_pics/screenshot-airboo.jpg";
import BlogPic from './assets/project_pics/screenshot-blog.jpg'
import EtchPic from './assets/project_pics/screenshot-etch.jpg'
import PetWatchPic from "./assets/project_pics/screenshot-temp.jpg"
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SkillsBox from "./components/SkillsBox";
import Projects from "./components/Projects";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Hero>
        <SkillsBox />
      </Hero>
      <Projects>
        <ProjectCard title={"airboo"} img={AirbooPic} text={blurbs.airboo} />
        <ProjectCard title={"pet-watch"} img={PetWatchPic} text={blurbs.petwatch} />
        <ProjectCard title={"my blog"} img={BlogPic} text={blurbs.blog} />
        <ProjectCard title={"etch-a-sketch"} img={EtchPic} text={blurbs.etch} />
      </Projects>
    </div>
  );
}

export default App;
