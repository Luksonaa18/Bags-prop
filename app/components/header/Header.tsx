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
import Menu from "../menu/Menu";
import Cart from "../menu/Cart";

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
        <Cart cart={cart} onClose={() => setCart((prev) => !prev)} />
        <Menu isOpen={isOpen} onClose={() => setIsOpen((prev) => !prev)} />
      </header>
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
            href: "/pages/about",
          },
          {
            title: "Wishlist",
            icon: <IoHeart size={20} />,
            href: "/wishlist",
          },
        ]}
        desktopClassName="fixed bottom-4 right-0 -translate-x-1/2 z-50 text-white "
        mobileClassName="fixed bottom-4 right-4 z-50 text-white flex items-center justify-center"
      />
    </>
  );
};

export default Header;
