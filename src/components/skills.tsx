import React from "react";

// Define the structure of the skills object explicitly
type Skill = {
  name: string;
  level: number;
};

const skills: Record<"Back-End" | "Artificial Intelligence" | "Front-End" | "Other Skills", Skill[]> = {
  "Back-End": [
    { name: "Java", level: 80 },
    { name: "Python", level: 80 },
    { name: "SQL", level: 75 },
    { name: "C#", level: 70 },
    { name: "Spring Boot", level: 70 },
    { name: "REST APIs", level: 80 },
    { name: "Docker", level: 80 },
    { name: "AWS", level: 60 },
    { name: "Jenkins", level: 60 },
  ],
  "Artificial Intelligence": [
    { name: "PyTorch", level: 80 },
    { name: "Scikit-Learn", level: 85 },
    { name: "NumPy", level: 90 },
    { name: "Pandas", level: 85 },
    { name: "OpenCV", level: 70 },
    { name: "Apache Spark", level: 65 },
    { name: "Hadoop", level: 60 },
    { name: "MATLAB", level: 80 },
  ],
  "Front-End": [
    { name: "React", level: 85 },
    { name: "Angular", level: 75 },
    { name: "Bootstrap", level: 85 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
  ],
  "Other Skills": [
    { name: "Git", level: 85 },
    { name: "CI/CD", level: 80 },
    { name: "Linux", level: 75 },
    { name: "UI/UX", level: 85 },
    { name: "OS", level: 75 }
  ],
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-gray-100 py-10 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Skills
        </h2>
        {/* Grid for skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(skills).map((category) => (
            <div
              key={category}
              className="bg-gray-200 p-4 rounded-lg shadow-md text-sm"
            >
              <h3 className="text-xl font-semibold text-black mb-3">
                {category}
              </h3>
              {/* Subdivide into left and right columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills[category as keyof typeof skills].map((skill) => (
                  <div key={skill.name} className="flex flex-col">
                    {/* Skill Name and Level */}
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-800">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-600">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Smaller Progress Bar with Animation */}
                    <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-black h-2 rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          animation: `fill-${skill.level} 2s ease-in-out forwards`,
                        }}
                      ></div>
                      <style>
                        {`
                          @keyframes fill-${skill.level} {
                            from {
                              width: 0%;
                            }
                            to {
                              width: ${skill.level}%;
                            }
                          }
                        `}
                      </style>
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
