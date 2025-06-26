"use client";
import founderImage from "@/public/bag1.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AboutUs = () => {
  const router = useRouter();
  return (
    <>
      <section className="w-full py-16 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              What started as a dream turned into a mission. This bag brand was
              founded by a passionate young woman who faced countless obstacles,
              rejections, and sleepless nights — but never gave up.
              <br />
              <br />
              Every stitch tells a story of resilience. Every design is crafted
              with care, quality, and the belief that comfort and elegance
              belong together.
              <br />
              <br />
              Today, we're proud to share a collection that empowers women and
              inspires confidence. This isn’t just a shop — it’s a journey of
              hard work, dreams, and style.
            </p>
            <button
              onClick={() => router.push("/pages/shoping")}
              className="mt-4 px-6 py-2 bg-blue-500 cursor-pointer text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
              Explore Our Bags
            </button>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={founderImage}
                alt="Founder"
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
