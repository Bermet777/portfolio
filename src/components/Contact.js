import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
      <div className="space-y-4">
        <p>Email: bermet.alibek@gmail.com</p>
        <p>Phone: (346) 541-0593</p>
        <div className="space-x-4">
          <a href="https://github.com/Bermet777" className="hover:text-purple-500" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/bermetalibekova" className="hover:text-purple-500" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
