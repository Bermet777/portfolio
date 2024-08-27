import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Cognitive Learning App',
    description: 'Developed an open-source web application to assess and improve cognitive learning in non-verbal children.',
    technologies: '#JavaScript #React #Bootstrap #SQL #CSS #HTML',
    sourceLink: 'https://github.com/Bermet777/Cognitive-Learning-App',
  },
  {
    title: 'UpliftMe',
    description: 'Developed an app designed to improve the mental well-being of its users by providing uplifting exercises.',
    technologies: '#JavaScript #React #Bootstrap #CSS #HTML',
    sourceLink: 'https://github.com/Bermet777/uplift-me',
  },
  {
    title: 'FX Converter',
    description: 'Real-time foreign exchange converter.',
    technologies: '#JavaScript #React #API #CSS #HTML',
    sourceLink: 'https://github.com/Bermet777/fxconverter',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen pt-20 p-10 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 p-5 rounded-lg shadow-lg flex flex-col justify-between"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div>
              <h3 className="text-2xl mb-3">{project.title}</h3>
              <p className="mb-5">{project.description}</p>
              <p className="text-purple-500 italic">{project.technologies}</p>
            </div>
            <div className="mt-5">
              <a
                href={project.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 text-white py-2 px-4 rounded-lg block text-center"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;



