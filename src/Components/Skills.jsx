import React from "react";

function Skills() {
  const skills = [
    {
      logo: "logo-html5",
      level: "Advance",
      count: "86",
    },
    {
      logo: "logo-css3",
      level: "Expert",
      count: "90",
    },
    {
      logo: "logo-javascript",
      level: "Intermediate",
      count: "78",
    },
    {
      logo: "logo-react",
      level: "Expert",
      count: "95",
    },
    {
      logo: "logo-nodejs",
      level: "Beginner",
      count: "40",
    },
    {
      logo: "leaf",
      level: "Beginner",
      count: "60",
    },
  ];

  return (
    <section id="skills" className="my-10 py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills.map((skill, i) => (
            <div key={i} className="border-2 border-cyan-600 group relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%, #ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 flex items-center justify-center rounded-full group-hover:text-cyan-600 group-hover:text-7xl">
                  <ion-icon name={`${skill.logo}`}></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
