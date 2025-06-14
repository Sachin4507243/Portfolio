import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex justify-center flex-col items-center gap-6">
        {/* Brand / Name */}
        <div className="text-cyan-400 text-lg font-semibold">Sachin.dev</div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/sachin19289"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Sachin4507243"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:pathania19289@gmail.com"
            className="text-cyan-400 hover:text-white transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} Sachin Pathania. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
