import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import testimonials from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-[#08142e] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Testimonials
        </h2>

        <div className="w-32 h-1 bg-pink-500 mx-auto mt-4 mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
            >
              <FaQuoteLeft className="text-pink-500 text-4xl mb-6" />

              <p className="text-gray-300 leading-8 mb-8">
                {item.message}
              </p>

              <h3 className="font-bold text-xl">
                {item.name}
              </h3>

              <p className="text-pink-400">
                {item.role}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;