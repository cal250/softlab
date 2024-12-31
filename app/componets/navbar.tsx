'use client'

import React, { useState } from "react";
import Logo from '../../public/logo1.svg'
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src={Logo} // Replace with your logo path
            alt="Soft Solutions Lab"
            className="h-10"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 text-gray-500 text-sm font-bold">
          <a href="#home" className="hover:text-green-600">
            Home
          </a>
          <a href="#about" className="hover:text-green-600">
            About us
          </a>
          <a href="#services" className="hover:text-green-600">
            Services
          </a>
          <a href="#case-studies" className="hover:text-green-600">
            Case Studies
          </a>
          <a href="#blog" className="hover:text-green-600">
            Blog
          </a>
          <a href="#how-it-works" className="hover:text-green-600">
            How it Works
          </a>
          <a href="#hire" className="hover:text-green-600">
            Hire
          </a>
        </div>

        {/* Contact Us Button (Always Visible on Desktop) */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-green-600 text-white px-8 py-4 rounded-lg shadow hover:bg-green-700"
          >
            Contact us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-green-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col space-y-4 py-4 px-6">
            <a href="#home" className="text-gray-700 hover:text-green-600">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-green-600">
              About us
            </a>
            <a href="#services" className="text-gray-700 hover:text-green-600">
              Services
            </a>
            <a href="#case-studies" className="text-gray-700 hover:text-green-600">
              Case Studies
            </a>
            <a href="#blog" className="text-gray-700 hover:text-green-600">
              Blog
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-green-600">
              How it Works
            </a>
            <a href="#hire" className="text-gray-700 hover:text-green-600">
              Hire
            </a>
            <a
              href="#contact"
              className="bg-green-600 text-white text-center px-6 py-2 rounded-lg shadow hover:bg-green-700"
            >
              Contact us
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;


