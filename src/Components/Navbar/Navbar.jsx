// Navbar.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = ['Home', 'About', 'Projects', 'Contact']; // Removed 'Skills'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-cyan-400 text-2xl font-bold">Sachin.dev</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={`#${link.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hover:text-cyan-400 text-white transition text-sm"
            >
              {link}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-cyan-400 hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden bg-black/90 text-white absolute top-full left-0 w-full flex flex-col space-y-6 px-6 py-8"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {links.map((link, i) => (
              <motion.a
                key={i}
                href={`#${link.toLowerCase()}`}
                whileHover={{ x: 5 }}
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400 text-white text-sm font-medium pb-2 transition"
              >
                {link}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
