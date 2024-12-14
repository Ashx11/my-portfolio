import React from "react";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Junior Software Engineering Intern",
    company: "Zetane Systems",
    duration: "Summer 2024",
    location: "Remote, Hybrid",
    responsibilities: [
      "Assisted in developing and maintaining software tools for machine learning projects using Python and C++, enhancing the functionality and efficiency of AI solutions.",
      "Collaborated with cross-functional engineering teams to integrate AI solutions into existing workflows, facilitating seamless adoption and improving overall system performance.",
      "Participated in debugging, testing, and optimizing machine learning systems, contributing to the development of transparent and explainable AI models that increased model interpretability by 20%.",
      "Supported the deployment of AI solutions across diverse industries, ensuring robust implementation and scalability of Zetane’s AI technologies in real-world applications.",
      "Contributed to Zetane’s open-source software, ZetaForge, by developing new features, fixing bugs, and enhancing documentation, which led to a 15% increase in community engagement and usage.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-12 bg-gray-200 "
    >
      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Experience
        </h1>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <FaBriefcase className="text-black text-2xl hover:text-purple-500 transition-colors" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {exp.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {exp.company} | {exp.duration} | {exp.location}
                  </p>
                </div>
              </div>
              <ul className="mt-4 pl-6 space-y-2 list-disc text-gray-700">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
