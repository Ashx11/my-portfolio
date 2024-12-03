import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      name: "Sportganise",
      description:
        "Website and mobile app for a badminton non-profit, featuring real-time event management.",
      tech: "React, Flutter, Spring Boot",
      link: "https://github.com/Sisahga/Sportganise?tab=readme-ov-file",
    },
    {
      name: "Open-Source Contribution to Zetane",
      description:
        "Contributed to Zetane's open-source software, ZetaForge, developing features, fixing bugs, and improving documentation. Became a top-5 contributor within 2 weeks of joining.",
      tech: "Python, C++, GitHub",
      link: "https://github.com/Ashx11/ZetaForge",
    },
    {
      name: "Estate Flow (Condo Management System)",
      description:
        "A condo management app with mobile and web interfaces. Facilitated stakeholder interactions with seamless backend integration.",
      tech: "React, Java, SQL",
      link: "https://github.com/Irisvella/SOEN-390-W2024",
    },
    {
      name: "Emotion Recognition",
      description:
        "Emotion recognition model development with robust testing and dataset handling. Delivered high-performing solutions collaboratively as Training Specialist.",
      tech: "Python, Scikit-learn, PyTorch",
      link: "https://github.com/maika-t/COMP472-FS-6",
    },
    {
      name: "Beta Smart Home System",
      description:
        "Simulation of a smart home system allowing users to customize house layouts, control house parameters, and manage accounts with restrictions.",
      tech: "Java, Java Swing, Text Files",
      link: "https://github.com/christa-ux/Beta",
    },
    {
      name: "Grocery Store Project",
      description:
        "Developed a web app to scan groceries, track expiration dates, and suggest recipes based on available ingredients.",
      tech: "React, Python, Flask",
      link: "https://github.com/Ashx11/Grocery-Project",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Projects
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-gray-800 hover:text-purple-500 transition-colors"
              >
                {project.name}
              </a>
              <p className="mt-4 text-gray-700">{project.description}</p>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Tech:</strong> {project.tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
