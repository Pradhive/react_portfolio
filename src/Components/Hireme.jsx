import React from "react";
import hireMe from "../assets/images/hireMe.png"

function Hireme() {

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="section" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          Do <span className="text-cyan-600 font-bold text-xl">You</span> have
          any work?
        </p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center ">
        <div>
          <h2 className="text-2xl font-semibold">
            Do <span className="text-cyan-600 font-bold text-3xl">You</span> want any work from me?</h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            A Talented Final Year B.Tech student with a strong academic
            background with the ability to think through a problem coupled with
            the confidence to make ideas heard. I am currently looking for a
            internship opportunity that will allow me to work alongside an
            expert team of talented individual's .
          </p>
          <button className="btn-primary mt-10" onClick={scrollToContact}>Say Hello </button>
        </div>
        <img src={hireMe} alt="" className="lg:h-[32rem] h-80 lg:absolute bottom-0 lg:-right-5 right-3 object-cover"/>
      </div>
    </section>
  );
}

export default Hireme;
