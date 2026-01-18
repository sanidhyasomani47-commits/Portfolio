import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* TOP SECTION */}
        <div className="grid gap-8 sm:grid-cols-3 text-center sm:text-left">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Sanidhya
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Frontend / Full Stack Developer
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Connect With Me
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/sanidhyasomani47-commits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sanidhya-somani-6784b0263/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:sanidhyasomani47@example.com"
                  className="hover:text-blue-400 transition"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* BOTTOM SECTION */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Sanidhya. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
