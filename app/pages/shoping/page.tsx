"use client";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import image from "../../../public/luxury-work-bag-demellier-maxi-montreal.png";
import { useBagStore } from "../../../zustand/zustand";

type Bag = {
  name: string;
  price: number;
  id: string;
  image: any;
};

const Shop = () => {
  const { addBag } = useBagStore();
  const [bags] = useState<Bag[]>([
    {
      id: uuidv4(),
      name: "Luxury Tote",
      price: 120,
      image,
    },
    {
      id: uuidv4(),
      name: "Casual Backpack",
      price: 90,
      image,
    },
    {
      id: uuidv4(),
      name: "Evening Clutch",
      price: 75,
      image,
    },
    {
      id: uuidv4(),
      name: "Evening Clutch",
      price: 75,
      image,
    },
    {
      id: uuidv4(),
      name: "Evening Clutch",
      price: 75,
      image,
    },
    {
      id: uuidv4(),
      name: "Evening Clutch",
      price: 75,
      image,
    },
    {
      id: uuidv4(),
      name: "Evening Clutch",
      price: 75,
      image,
    },
    {
      id: uuidv4(),
      name: "Evening Clutch",
      price: 75,
      image,
    },
    {
      id: uuidv4(),
      name: "Evening Clutch",
      price: 75,
      image,
    },
    {
      id: uuidv4(),
      name: "Evening Clutch",
      price: 75,
      image,
    },
  ]);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 120 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#111",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <Header />

      <motion.main
        className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {bags.map((bag) => (
          <motion.div
            key={bag.id}
            className="border p-4 rounded-lg flex flex-col items-center shadow-md bg-white"
            variants={cardVariants}
            whileHover="hover"
            style={{ willChange: "transform, opacity" }}
          >
            <h2 className="text-xl font-bold mb-2">{bag.name}</h2>
            <Image
              src={bag.image}
              alt={bag.name}
              width={240}
              height={240}
              className="object-contain rounded-md mb-4"
              loading="lazy"
            />
            <p className="text-gray-700 font-semibold mb-4">${bag.price}</p>
            <motion.button
              onClick={() => addBag(bag)}
              className="px-6 py-2 bg-black text-white rounded-md cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{ willChange: "transform" }}
              type="button"
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </motion.main>
      <Footer />
    </>
  );
};

export default Shop;
