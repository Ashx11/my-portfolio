import React from "react";

type Skill = {
  name: string;
  level: number;
};

const skills: Record<
  "Programming Languages" | "Back-End" | "Front-End" | "Artificial Intelligence" | "DevOps & Tools" | "Other Skills",
  Skill[]
> = {
  "Programming Languages": [
    { name: "Java", level: 80 },
    { name: "Python", level: 80 },
    { name: "SQL", level: 75 },
    { name: "C#", level: 70 },
    { name: "JavaScript/TypeScript", level: 85 },
  ],
  "Back-End": [
    { name: "Spring Boot", level: 70 },
    { name: "Node.js", level: 85 },
    { name: "API Development (REST, FastAPI)", level: 80 },
    { name: "Express.js", level: 80 },
    { name: "SQL (MySQL, PostgreSQL)", level: 80 },
    { name: "NoSQL (MongoDB)", level: 80 },
  ],
  "Front-End": [
    { name: "React", level: 85 },
    { name: "Angular", level: 75 },
    { name: "Bootstrap & Tailwind CSS", level: 85 },
    { name: "HTML & CSS", level: 95 },
    { name: "JavaScript", level: 80 },
    { name: "Webpack/Vite", level: 75 },
  ],
  "Artificial Intelligence": [
    { name: "PyTorch", level: 80 },
    { name: "Scikit-Learn", level: 85 },
    { name: "NumPy", level: 90 },
    { name: "Pandas", level: 85 },
    { name: "OpenCV", level: 70 },
    { name: "MATLAB", level: 80 },
  ],
  "DevOps & Tools": [
    { name: "Docker", level: 80 },
    { name: "Kubernetes", level: 70 },
    { name: "Jenkins", level: 60 },
    { name: "Postman", level: 75 },
  ],
  "Other Skills": [
    { name: "Version Control (Git, GitLab)", level: 85 },
    { name: "CI/CD", level: 80 },
    { name: "Linux", level: 75 },
    { name: "OS (Windows, macOS)", level: 80 },
  ],
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-gray-100 py-10 px-4 ">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(skills).map((category) => (
            <div
              key={category}
              className="bg-gray-200 p-4 rounded-lg shadow-md text-sm"
            >
              <h3 className="text-xl font-semibold text-black mb-3">
                {category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills[category as keyof typeof skills].map((skill, index) => (
                  <div key={`${skill.name}-${index}`} className="flex flex-col">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-800">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="w-full bg-gray-300 rounded-full h-2 overflow-hidden"
                    >
                      <div
                        className="bg-black h-2 rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          transition: "width 2s ease-in-out",
                        }}
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`Skill level for ${skill.name}: ${skill.level}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
