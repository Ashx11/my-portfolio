import React, { useEffect, useState } from "react";
import MeImage from "./me1.jpg";
import { FaGithub, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";

const About: React.FC = () => {
  const [animateBg, setAnimateBg] = useState(false);

  const reasons = [
    "I thrive on solving problems and turning ideas into impactful software solutions.",
    "Collaborative by nature, I work seamlessly with cross-functional teams to deliver results.",
    "From coding to deployment, I’ve built software that works in the real world.",
    "Hardworking, adaptable, and ready to learn anything to get the job done.",
    "In just two weeks, I became a top-5 contributor to an open-source project at Zetane.",
    "A lifelong learner, always exploring new technologies and approaches.",
    "Comfortable working across the stack—whether it's React, Python, or SQL.",
    "I bring practical knowledge of AI concepts to enhance real-world applications.",
    "I build with scalability, efficiency, and future-proofing in mind.",
    "Focused on delivering software that creates measurable impact.",
  ];

  const [currentReason, setCurrentReason] = useState(0);

  useEffect(() => {
    setAnimateBg(true);
    const interval = setInterval(() => {
      setCurrentReason((prev) => (prev + 1) % reasons.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reasons.length]);

  // A scroll function that does not depend on setIsOpen
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="about"
      className={`relative bg-white py-16 px-4 transition-all duration-500 ${
        animateBg ? "bg-opacity-90" : "bg-opacity-100"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Profile Image and Social Icons */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-gray-300 md:mr-1">
            <img
              src={MeImage}
              alt="Arshpreet Singh"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex space-x-6 mt-4 justify-center md:justify-start md:pl-12">
            <a
              href="https://github.com/Ashx11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black text-3xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/iamarshh_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-pink-500 text-3xl"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:arshpreets425@gmail.com"
              className="text-gray-800 hover:text-red-500 text-3xl"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/arshpreet-singh-b5229b204/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-blue-600 text-3xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* About Text */}
        <div className="md:ml-8 mt-12 md:mt-0 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-800">
            Hi, I'm <strong>Arshpreet Singh</strong>!
          </h1>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            A passionate Software Engineer specializing in AI, Machine Learning, and
            full-stack development. I'm currently pursuing my degree at Concordia
            University and honing my skills to create innovative solutions.
          </p>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            With experience as a Junior Software Engineering Intern at Zetane Systems,
            I’ve contributed to cutting-edge AI projects. I thrive on solving complex
            problems and turning ideas into impactful applications.
          </p>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Beyond technical expertise, I bring a strong commitment to collaboration,
            adaptability, and continuous learning. I enjoy working on cross-functional
            teams to deliver robust, scalable, and user-centric software solutions.
          </p>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            My goal is to bridge the gap between innovative technology and real-world
            applications, empowering industries to achieve greater efficiency and
            insight.
          </p>
        </div>
      </div>

      {/* Billboard Section */}
      <div className="mt-20 bg-gray-100 py-10 px-4 text-center">
        <blockquote className="text-2xl font-bold italic text-gray-800 transition-opacity duration-1000">
          "{reasons[currentReason]}"
        </blockquote>

        {/* View My CV Button */}
        <div className="mt-10">
          <a
            href="https://drive.google.com/file/d/1SlANpTi-47u7P6ejcfH7mbtuJLurW_9Z/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-colors"
          >
            View My CV
          </a>
        </div>

        {/* Example usage of scrollToSection (if desired) */}
        {/* <button onClick={() => scrollToSection('skills')} className="mt-4 px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-900">
          Go to Skills
        </button> */}
      </div>
    </section>
  );
};

export default About;
