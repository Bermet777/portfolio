import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-5">
          Hi, I'm <span className="text-purple-500">Bermet</span>
        </h1>
        <p className="mt-5 text-lg max-w-xl mx-auto leading-relaxed">
          I'm a full-stack software engineer based in New York. <br />
          I have a great interest in developing innovative and inclusive <br />
          software solutions that can positively impact the world.
        </p>
        {/* View My Work button */}
        <Link to="projects" smooth={true} duration={1000}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-10 bg-purple-500 text-white py-2 px-4 rounded-lg"
          >
            View My Work
          </motion.button>
        </Link>
      </motion.div>

    </section>
  );
};

export default Hero;
