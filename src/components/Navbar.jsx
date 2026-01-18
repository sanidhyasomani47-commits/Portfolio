import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prev) => {
      const next = !prev;

      if (next) {
        // scroll DOWN
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      } else {
        // scroll UP
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      return next;
    });
  };
  return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* BRAND */}
        <Link to="/" className="text-2xl font-extrabold text-white">
          Developer<span className="text-blue-500">.</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className="text-gray-300 hover:text-white">
            Home
          </NavLink>
          <NavLink to="/about" className="text-gray-300 hover:text-white">
            About
          </NavLink>
          <NavLink to="/contact" className="text-gray-300 hover:text-white">
            Contact
          </NavLink>

          <a
            href="/Sanidhya_Somani_SEI_Resume.pdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-md"
          >
            Resume
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={handleToggle}
        >
          ☰
        </button>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="md:hidden bg-gray-900 px-4 pb-4 flex flex-col text-ri gap-4">
          <NavLink to="/" onClick={handleToggle} className="text-white">
            Home
          </NavLink>
          <NavLink to="/about" onClick={handleToggle} className="text-white">
            About
          </NavLink>
          <NavLink to="/contact" onClick={handleToggle} className="text-white">
            Contact
          </NavLink>

          <a
            href="/Sanidhya_Somani_SEI_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-center text-white py-2 rounded-md"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
