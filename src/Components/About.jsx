import React from "react";
import { useState, useEffect } from "react";
import AboutP from "../assets/images/hero.png"

function About() {
  

  const [projectCounts, setProjectCounts] = useState(0);
  const [ACounts, setACounts] = useState(0);
  const [SCounts, setSCounts] = useState(0);


  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
        } else {
          setIsInViewport(false);
        }
      });
    }, options);

    const targetElement = document.getElementById("about");
    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isInViewport && projectCounts < 6) {
      const interval = setInterval(() => {
        setProjectCounts((prevCount) => prevCount + 1);
      }, 200);
      

      return () => {
        clearInterval(interval);
      };
    }
  }, [isInViewport, projectCounts]);

  useEffect(() => {
    if (isInViewport && ACounts < 10) {
      const interval = setInterval(() => {
        setACounts((prevCount) => prevCount + 1);
      }, 300);
      

      return () => {
        clearInterval(interval);
      };
    }
  }, [isInViewport, ACounts]);

  useEffect(() => {
    if (isInViewport && SCounts < 13) {
      const interval = setInterval(() => {
        setSCounts((prevCount) => prevCount + 1);
      }, 250);
      

      return () => {
        clearInterval(interval);
      };
    }
  }, [isInViewport, SCounts]);

  useEffect(() => {
    if (!isInViewport) {
      setProjectCounts(0);
      setACounts(0);
      setSCounts(0);
    }
  }, [isInViewport]);
  
  return (
    <section id="about" className="bg-gray-200 pt-10 md:rounded-bl-full md:rounded-tr-full">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-gray-400">Me</span>
        </h3>
        <p className="text-gray-900 my-3 text-lg">My Introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto ">
          <div className="p-2">
            <div className="text-gray-600 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                A Talented Final Year B.Tech student with a strong academic
                background with the ability to think through a problem coupled
                with the confidence to make ideas heard.I am currently looking
                for a internship opportunity that will allow me to work
                alongside an expert team of talented individual's .
              </p>
              <div className="mt-10 flex justify-center items-center gap-7">
                
                  <div>
                    <h3 className="md:text-5xl text-2xl font-semibold text-white">
                      {projectCounts}
                      <span className="text-gray-600">+</span>{" "}
                    </h3>
                    <span className="md:text-3xl ">Projects</span>
                  </div>
                  <div>
                    <h3 className="md:text-5xl text-2xl font-semibold text-white">
                      {ACounts}
                      <span className="text-gray-600">+</span>{" "}
                    </h3>
                    <span className="md:text-3xl ">Achievements</span>
                  </div>
                  <div>
                    <h3 className="md:text-5xl text-2xl font-semibold text-white">
                      {SCounts}
                      <span className="text-gray-600">+</span>{" "}
                    </h3>
                    <span className="md:text-3xl ">Skills</span>
                  </div>
                
              </div>
              <br />
              <br />
              <a href="./src/assets/Pradhive_Resume.pdf" download>
                <button className="btn-primary mt-5">
                  Download CV
                </button>
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center md:mt-0 mt-6">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img src={AboutP} alt="" draggable="false" className="w-full object-cover bg-gray-400 rounded-xl "/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
