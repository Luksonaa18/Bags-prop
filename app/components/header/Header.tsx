"use client";
import React, { useState, useEffect } from "react";
import {
  IoClose,
  IoHeart,
  IoHome,
  IoInformation,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoMenu,
} from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { FiShoppingBag } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaShoppingBag, FaInfoCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useBagStore } from "@/zustand/zustand";
import Image from "next/image";
import { FloatingDock } from "../ui/floating-dock";
import { IconShoppingBag } from "@tabler/icons-react";

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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cart, setCart] = useState(false);
  const router = useRouter();
  const bags = useBagStore((state) => state.bags);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed w-full h-16 transition-all duration-300 z-50 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <nav className="flex flex-row items-center p-4 justify-between">
          <IoMenu
            className={`font-semibold cursor-pointer text-2xl ${
              scrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setIsOpen((prev) => !prev)}
          />
          <h1
            className={`font-semibold text-lg ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Header
          </h1>
          <div className="flex flex-row items-center gap-2">
            <FaInstagram
              className={`font-semibold text-lg ${
                scrolled ? "text-black" : "text-white"
              }`}
            />
            <div className="relative">
              <FiShoppingBag
                onClick={() => setCart((prev) => !prev)}
                className={`font-semibold text-lg cursor-pointer ${
                  scrolled ? "text-black" : "text-white"
                }`}
              />
              {bags.length > 0 && (
                <span
                  className={`font-semibold -top-3 rounded-full bg-red-500 absolute cursor-pointer text-white w-4 h-4 items-center flex justify-center -right-2 ${
                    scrolled ? "visible" : "hidden"
                  }`}
                >
                  {bags.length}
                </span>
              )}
            </div>
          </div>
        </nav>

        {/* CART DRAWER */}
        <AnimatePresence>
          {cart && (
            <motion.div
              style={{ willChange: "opacity, transform" }}
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col"
            >
              <div className="flex justify-end p-4">
                <IoClose
                  className="text-3xl cursor-pointer text-gray-700"
                  onClick={() => setCart(false)}
                />
              </div>

              <main className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bags.map((bag) => (
                  <div
                    key={bag.id}
                    className="border p-4 rounded-lg items-center flex flex-col shadow-md"
                  >
                    <h2 className="text-xl font-bold">{bag.name}</h2>
                    <Image
                      src={bag.image}
                      alt={bag.name}
                      width={150}
                      height={150}
                      loading="lazy"
                    />
                    <p className="text-gray-700">${bag.price}</p>
                    <p className="text-sm text-gray-500">
                      Quantity: {bag.quantity}
                    </p>
                  </div>
                ))}
              </main>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MENU DRAWER */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              style={{ willChange: "opacity, transform" }}
              key="menu"
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-0 left-0 w-full h-screen bg-white p-6 z-50"
            >
              <div className="flex justify-end mb-6">
                <IoClose
                  className="text-3xl cursor-pointer text-gray-700"
                  onClick={() => setIsOpen(false)}
                />
              </div>

              <motion.div
                style={{ willChange: "opacity, transform" }}
                variants={menuContainer}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col gap-6 text-gray-900 text-lg font-medium"
              >
                {/* SHOP */}
                <div className="space-y-2">
                  <motion.span
                    variants={menuItem}
                    className="text-gray-500 text-sm"
                  >
                    SHOP
                  </motion.span>
                  {["All Products", "Best Deals", "New Arrivals"].map(
                    (text) => (
                      <motion.div
                        style={{ willChange: "opacity, transform" }}
                        key={text}
                        variants={menuItem}
                        className="flex items-center gap-2"
                      >
                        <FaShoppingBag />
                        <span>{text}</span>
                      </motion.div>
                    )
                  )}
                </div>

                {/* INFO */}
                <div className="space-y-2">
                  <motion.span
                    variants={menuItem}
                    className="text-gray-500 text-sm"
                  >
                    INFORMATION
                  </motion.span>
                  {["About Us", "Shipping & Returns"].map((text) => (
                    <motion.div
                      style={{ willChange: "opacity, transform" }}
                      key={text}
                      variants={menuItem}
                      className="flex items-center gap-2"
                    >
                      <FaInfoCircle />
                      <span>{text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CONTACT */}
                <div className="space-y-2">
                  <motion.span
                    variants={menuItem}
                    className="text-gray-500 text-sm"
                  >
                    CONTACT
                  </motion.span>
                  <motion.div
                    style={{ willChange: "opacity, transform" }}
                    variants={menuItem}
                    className="flex items-center gap-4"
                  >
                    <IoLogoFacebook className="text-3xl cursor-pointer hover:text-yellow-500" />
                    <IoLogoInstagram className="text-3xl cursor-pointer hover:text-yellow-500" />
                    <IoLogoTwitter className="text-3xl cursor-pointer hover:text-yellow-500" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* FLOATING NAVBAR */}
      <FloatingDock
        items={[
          {
            title: "Home",
            icon: <IoHome size={20} />,
            href: "/",
          },
          {
            title: "Shop",
            icon: <IconShoppingBag size={20} />,
            href: "/pages/shoping",
          },
          {
            title: "Profile",
            icon: <IoInformation size={20} />,
            href: "/about",
          },
          {
            title: "Wishlist",
            icon: <IoHeart size={20} />,
            href: "/wishlist",
          },
        ]}
        desktopClassName="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 text-white "
        mobileClassName="fixed bottom-4 right-4 z-50 text-white flex items-center justify-center "
      />
    </>
  );
};

export default Header;
