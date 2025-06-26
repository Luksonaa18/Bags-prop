"use client";
import { useBagStore } from "@/zustand/zustand";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { IoClose, IoTrash } from "react-icons/io5";

const Cart = ({ cart, onClose }: { cart: boolean; onClose: () => void }) => {
  const bags = useBagStore((state) => state.bags);
  const remove = useBagStore((state) => state.removeBag);
  const totalprice = useBagStore((state) => state.getTotalPrice);
  useEffect(() => {
    document.body.style.overflow = cart ? "hidden" : "auto";
  }, [cart]);

  const router = useRouter();
  const handleRouteChange = () => {
    router.push("/pages/shoping");
    cart === false;
  };
  return (
    <>
      {bags.length > 0 ? (
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
                  onClick={onClose}
                />
              </div>

              <main className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bags.map((bag) => (
                  <div
                    key={bag.id}
                    className="border h-80 p-4 rounded-lg items-center flex flex-col shadow-md"
                  >
                    <h2 className="text-xl font-bold">{bag.name}</h2>
                    <Image
                      src={bag.image}
                      alt={bag.name}
                      width={150}
                      height={150}
                      loading="lazy"
                    />
                    Price :{totalprice() + "$"}
                    <p className="text-sm text-gray-500">
                      Quantity: {bag.quantity}
                    </p>
                    <div className=" flex flex-row items-center gap-4">
                      <button
                        onClick={() => remove(bag.id)}
                        className="mt-4 flex items-center cursor-pointer gap-2 px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition"
                      >
                        <IoTrash />
                        Remove
                      </button>
                      <button className="mt-4 flex items-center cursor-pointer gap-2 px-4 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200 transition">
                        Buy
                      </button>
                    </div>
                  </div>
                ))}
              </main>
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        cart && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col"
          >
            <div className="flex justify-end p-4">
              <IoClose
                className="text-3xl cursor-pointer text-gray-700"
                onClick={onClose}
              />
            </div>
            <div className="flex flex-col justify-center items-center flex-1 gap-3 text-xl text-gray-600">
              No Items in Cart
              <button
                onClick={handleRouteChange}
                className="w-30 h-11 text-white cursor-pointer rounded-lg border-1 bg-blue-500 font-bold "
              >
                Shop Now
              </button>
            </div>
          </motion.div>
        )
      )}
    </>
  );
};

export default Cart;
