import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/Technologies'; // Import the new Technologies component
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Technologies /> {/* Add Technologies section here */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;



