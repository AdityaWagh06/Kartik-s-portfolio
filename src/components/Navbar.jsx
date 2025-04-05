import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full px-6 py-4 flex items-center justify-between z-50 transition-all duration-300 ${
        scrolled ? "bg-black bg-opacity-90 backdrop-blur-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <motion.div
        className="text-3xl font-bold text-red-600 cursor-pointer"
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Kartik
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-lg">
        <motion.button
          onClick={() => handleNavigation("/")}
          className="text-white hover:text-red-600 transition-colors relative group"
          whileHover={{ scale: 1.05 }}
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
        </motion.button>
        <motion.button
          onClick={() => handleNavigation("/services")}
          className="text-white hover:text-red-600 transition-colors relative group"
          whileHover={{ scale: 1.05 }}
        >
          My Services
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
        </motion.button>
        <motion.button
          onClick={() => handleNavigation("/contact")}
          className="text-white hover:text-red-600 transition-colors relative group"
          whileHover={{ scale: 1.05 }}
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
        </motion.button>
      </div>

      {/* Mobile Menu Icon */}
      <motion.button 
        className="md:hidden text-2xl text-white z-50"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex flex-col items-center justify-center space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={() => handleNavigation("/")}
              className="text-2xl text-white hover:text-red-600"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Home
            </motion.button>
            <motion.button
              onClick={() => handleNavigation("/services")}
              className="text-2xl text-white hover:text-red-600"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              My Services
            </motion.button>
            <motion.button
              onClick={() => handleNavigation("/contact")}
              className="text-2xl text-white hover:text-red-600"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Contact
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;