import React from 'react';
import About from "./Components/About";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Hireme from "./Components/Hireme";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Bot from "./Components/Bot";
import Circle from './Components/Circle';


const App = () => {
  return (
    <div>
      <Circle/>
      <Navbar/>
      <Bot/>
      <Hero/>
      <About/>
      <Skills/>
      <Hireme/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
