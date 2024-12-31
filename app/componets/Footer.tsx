import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import map from '@/public/map-image (1).png';
import Logo from '@/public/logo1.svg'



function Footer() {
  return (
    <div className="relative bg-green-950 text-white py-10">
      {/* Background Map */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <Image
          src={map} // Replace with the map image path
          alt="World Map"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Footer Content */}
      <div className="mt-20 container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gray-500 pt-10">
        {/* Logo */}
        <div>
          <Image
            src={Logo} // Replace with the logo path
            alt="Soft Solutions Logo"
            width={150}
            height={50}
          />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className=" text-gray-400 hover:underline">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:underline">About</a></li>
            <li><a href="#" className="text-gray-400 hover:underline">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:underline">Case Studies</a></li>
            <li><a href="#" className="text-gray-400 hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-3">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:underline">Software</a></li>
            <li><a href="#" className="text-gray-400 hover:underline">Product Design</a></li>
            <li><a href="#" className=" text-gray-400 hover:underline">Maintenance</a></li>
          </ul>
        </div>

        {/* About Us & Contact Us */}
        <div>
          <h3 className="font-bold mb-3">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:underline">Our Story</a></li>
            <li><a href="#" className="text-gray-400 hover:underline">Work With Us</a></li>
          </ul>
        </div>

          <div>
          <h3 className="font-bold mb-3 ">Contact Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:underline">Our Story</a></li>
            <li><a href="#" className="text-gray-400 hover:underline">Work With Us</a></li>
          </ul>
          </div>
        
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-5">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          {/* Legal Links */}
          <div className="text-sm text-gray-400 space-x-5">
            <a href="#" className="hover:underline">Privacy Policy |</a>
            <a href="#" className="hover:underline">Terms and Conditions |</a>
            <a href="#" className="hover:underline">User Agreement</a>
            <a href="#" className="hover:underline">Licence |</a>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-5 w-24 h-24 ">
            <a href="#"><FaLinkedin  className='w-10 h-10'/>
            </a>
            <a href="#"><FaGithub className='w-10 h-10' /></a>
            <a href="#"><BsTwitterX className='w-10 h-10' /></a>
            <a href="#"><PiInstagramLogoFill className='w-10 h-10' />
            </a>
            <a href="#"><FaFacebook className='w-10 h-10' /></a>
          </div>

          {/* Telegram Icon */}
          <div>
            <a href="#" className="bg-green-600 p-3 rounded-full inline-block">
            <BiSolidMessageAltDetail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
