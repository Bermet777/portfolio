import React from 'react';

const Technologies = () => {
  return (
    <section id="technologies" className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Technologies I Work With</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <div>
            <strong className="block text-xl mb-3">Front-end</strong>
            <p className="text-gray-700">
              JavaScript, React, Vue, Angular, Typescript, HTML, CSS, Bootstrap, Next.js
            </p>
          </div>
          <div>
            <strong className="block text-xl mb-3">Back-end</strong>
            <p className="text-gray-700">
              Node.js, Express.js, Python, Java, Django, Flask, FastAPI, Spring Boot
            </p>
          </div>
          <div>
            <strong className="block text-xl mb-3">Databases</strong>
            <p className="text-gray-700">
              MySQL, MongoDB, PostgreSQL
            </p>
          </div>
          <div>
            <strong className="block text-xl mb-3">Tools</strong>
            <p className="text-gray-700">
              Git/Gitlab, Docker, GitHub, Jira
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;





