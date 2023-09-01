import React, { useEffect } from "react";

function Circle() {
  const circles = document.querySelectorAll(".circle");
  const coords = { x: 0, y: 0 };


  useEffect(() => {
    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
    });

    window.addEventListener("mousemove", (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY + window.scrollY;
      animate();
    });
  }, []);

  const animate = () => {
    let x = coords.x;
    let y = coords.y;

    circles.forEach((circle, index) => {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";

      circle.style.scale = (circles.length-index)/circles.length

      circle.x = x;
      circle.y = y;

      const nextCircles = circles[index + 1] || circles[0];

      x += (nextCircles.x - x) * 0.5;
      y += (nextCircles.y - y) * 0.5;
    });
  };

  return (
    <div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
}

export default Circle;
