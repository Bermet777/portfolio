import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-10 text-center">
      <Link
        to="hero"
        smooth={true}
        duration={1000}
        className="cursor-pointer hover:text-purple-500"
      >
        Back to Top
      </Link>
      <p className="mt-5">© 2024 Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
