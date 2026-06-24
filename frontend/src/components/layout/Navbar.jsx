import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-bold text-pink-400 hover:text-pink-300 transition"
        >
          Portfolio
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              <NavLink to={item.path}>
                {({ isActive }) => (
                  <div className="relative py-1">
                    <motion.span
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className={`transition-colors duration-300 ${
                        isActive
                          ? "text-pink-400 font-semibold"
                          : "text-gray-300 hover:text-pink-400"
                      }`}
                    >
                      {item.name}
                    </motion.span>

                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute left-0 right-0 -bottom-2 h-[3px] rounded-full bg-pink-400"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}
                      />
                    )}
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-slate-900 border-t border-slate-800"
        >
          <ul className="flex flex-col p-6 gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `transition-all duration-300 ${
                    isActive
                      ? "text-pink-400 font-semibold"
                      : "text-gray-300 hover:text-pink-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;