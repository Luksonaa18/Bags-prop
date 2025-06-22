"use client"
import React from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12"> 
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <p className="text-lg">Your stylish bags, delivered to you.</p>
        <div className="flex justify-center gap-4 mt-4">
          <IoLogoFacebook className="text-2xl cursor-pointer hover:text-yellow-500" />
          <IoLogoInstagram className="text-2xl cursor-pointer hover:text-yellow-500" />
          <IoLogoTwitter className="text-2xl cursor-pointer hover:text-yellow-500" />
        </div>
        <p className="mt-6 text-sm text-gray-400">© 2025 Bag Shop. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
