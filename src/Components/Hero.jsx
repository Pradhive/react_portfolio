import React, { useState, useEffect } from "react";
import Hero1 from "../assets/hero.png";
import "../styles.css";

const technologies = ["ReactJS", "Node.js", "MongoDB", "JavaScript"];

function Hero() {
  const [techIndex, setTechIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isAdding, setIsAdding] = useState(true);
  const [isWaiting, setIsWaiting] = useState(false);
  let a = 1010

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isWaiting) {
        if (isAdding) {
          setDisplayText((prevText) =>
            technologies[techIndex].slice(0, prevText.length + 1)
          );
          if (displayText.length === technologies[techIndex].length) {
            setIsAdding(false);
            setIsWaiting(true);
            setTimeout(() => {
              setLetterIndex(displayText.length - 1);
              setIsWaiting(false);
            }, 1000);
          }
        } else {
          setDisplayText((prevText) => prevText.slice(0, prevText.length - 1));
          if (displayText.length === 0) {
            setIsAdding(true);
            setTechIndex((prevIndex) => (prevIndex + 1) % technologies.length);
          }
        }
      }
    }, 150);

    return () => clearInterval(interval);
  }, [displayText, isAdding, isWaiting, techIndex]);

  const social = [
    {
      logo: "logo-instagram",
      link: "https://www.instagram.com/chocolate_fellow_pradhive_/",
    },
    {
      logo: "logo-linkedin",
      link: "https://www.linkedin.com/in/pradhive-b-0a838a218/",
    },
    { logo: "logo-twitter", link: "https://twitter.com/5088_b" },
    { logo: "logo-github", link: "https://github.com/Pradhive" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={Hero1} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="md:text-6xl text-4xl text-black">
              Hello!
              <br />
            </span>
            <div className="flex">
              <span className="text-gray-400">My Name is{" "}</span>
              <div className="dance-animation ">
                <h1 className="pl-3 dance-letter-1">P</h1>
                <h1 className="dance-letter-2">r</h1>
                <h1 className="dance-letter-3">a</h1>
                <h1 className="dance-letter-4">d</h1>
                <h1 className="dance-letter-5">h</h1>
                <h1 className="dance-letter-6">i</h1>
                <h1 className="dance-letter-7">v</h1>
                <h1 className="dance-letter-8">e</h1>
                <h1 className="dance-letter-9">!</h1>
                <h1 className="pr-3 dance-letter-0">!</h1>
              </div>
            </div>
          </h1>
          <h4 className="md:text-4xl text-2xl md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            {displayText} Developer
          </h4>
          <button className="btn-primary mt-8" onClick={scrollToContact}>
            Contact me
          </button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social.map((icon, i) => (
              <div
                key={i}
                className="text-gray-600 hover:text-white cursor-pointer"
                onClick={() => window.open(icon.link, "_blank")}
              >
                <ion-icon name={icon.logo}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
