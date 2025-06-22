"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { useBagStore } from "@/zustand/zustand";

const Cart = () => {
  const [cart, setCart] = useState(false);
  const bags = useBagStore((state) => state.bags);
  return (
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
  );
};

export default Cart;
