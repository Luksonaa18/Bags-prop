"use client";
import bag from "@/public/bag1.jpeg";
import bag1 from "@/public/bag2.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";
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
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Discover stylish, high-quality bags designed to bring elegance and
          functionality into your daily life. Trusted by thousands of customers
          worldwide.
        </p>
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
        className="flex justify-center mb-12"
      >
        <motion.button
          onClick={() => router.push("/pages/shoping")}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="rounded-lg px-6 py-2 bg-blue-500 cursor-pointer hover:bg-blue-600 transition text-white font-medium shadow-md"
        >
          Discover
        </motion.button>
      </motion.div>

      {/* Top Sellers Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 border-b-2 inline-block border-blue-300 pb-1">
            Top Sellers
          </h2>
          <p className="text-gray-600 mt-2">
            Our most loved and purchased bags
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[bag, bag1, bag].map((product, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Image
                src={product}
                alt={`Top Seller ${index + 1}`}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">
                  Elegant Bag {index + 1}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Perfect for every occasion
                </p>
                <button
                  onClick={() => router.push("/pages/shoping")}
                  className="mt-3 px-4 py-1.5 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  View Product
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold text-blue-700"
          >
            Why Choose Us?
          </motion.h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Premium Quality",
                desc: "Crafted from the finest materials with attention to every detail.",
              },
              {
                title: "Worldwide Shipping",
                desc: "Fast & secure delivery, no matter where you are.",
              },
              {
                title: "Customer First",
                desc: "Excellent support & return policy to keep you satisfied.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg p-6 shadow hover:shadow-lg"
              >
                <h4 className="text-lg font-bold text-blue-600 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Block */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="italic text-lg text-gray-700"
          >
            “These bags are a game-changer. Exceptional quality and the customer
            service is amazing. I never shop anywhere else.”
          </motion.blockquote>
          <p className="mt-4 font-semibold text-blue-500">
            — Lika G., Loyal Customer
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r rounded-xl from-blue-500 to-indigo-600 py-16 px-4 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold mb-4"
        >
          Ready to Upgrade Your Style?
        </motion.h2>
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => router.push("/pages/shoping")}
          className="mt-2 px-6 py-3 bg-white cursor-pointer text-blue-600 font-medium rounded-md hover:bg-gray-100 transition"
        >
          Shop Now
        </motion.button>
      </section>
    </main>
  );
};

export default Content;
