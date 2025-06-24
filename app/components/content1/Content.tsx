"use client";
import React from "react";
import bag from "@/public/bag1.jpeg";
import bag1 from "@/public/bag2.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Content = () => {
  const router = useRouter();
  return (
    <main className="mt-10 w-full px-4">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <h1 className="text-3xl md:text-4xl font-semibold italic text-black border-b-4 inline-block border-blue-300 pb-1">
          Your Comfort is Our Work
        </h1>
      </motion.div>

      {/* Bag Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
        {[bag, bag1, bag1, bag].map((item, idx) => (
          <motion.div
            key={idx}
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full h-52 bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              alt={`Bag ${idx + 1}`}
              src={item}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex justify-center"
      >
        <motion.button
          onClick={() => router.push("/pages/shoping")}
          whileTap={{ scale: 0.25 }}
          whileHover={{ scale: 1.05 }}
          className="rounded-lg px-6 py-2 bg-blue-500 hover:bg-blue-600 transition text-white font-medium shadow-md"
        >
          Discover
        </motion.button>
      </motion.div>
    </main>
  );
};

export default Content;
