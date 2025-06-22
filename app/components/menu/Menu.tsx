"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaShoppingBag, FaInfoCircle } from "react-icons/fa";
import {
  IoClose,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
const menuContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

const menuItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="menu"
          style={{ willChange: "transform, opacity" }}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full h-screen bg-white p-6 z-50 overflow-hidden"
        >
          <div className="flex justify-end mb-6">
            <IoClose
              className="text-3xl cursor-pointer text-gray-700"
              onClick={() => setIsOpen(false)}
            />
          </div>

          <motion.div
            style={{ willChange: "transform, opacity" }}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-6 text-gray-900 text-lg font-medium"
          >
            {/* SHOP */}
            <div className="space-y-2">
              <span className="text-gray-500 text-sm">SHOP</span>
              {["All Products", "Best Deals", "New Arrivals"].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <FaShoppingBag />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* INFO */}
            <div className="space-y-2">
              <span className="text-gray-500 text-sm">INFORMATION</span>
              {["About Us", "Shipping & Returns"].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <FaInfoCircle />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* CONTACT */}
            <div className="space-y-2">
              <span className="text-gray-500 text-sm">CONTACT</span>
              <div className="flex items-center gap-4">
                <IoLogoFacebook className="text-3xl cursor-pointer hover:text-yellow-500" />
                <IoLogoInstagram className="text-3xl cursor-pointer hover:text-yellow-500" />
                <IoLogoTwitter className="text-3xl cursor-pointer hover:text-yellow-500" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
