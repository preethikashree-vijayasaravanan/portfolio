import React from "react";
import { motion } from "framer-motion";
import services from "../../data/services";

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-[#08142e] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center">
            Services
          </h2>

          <div className="w-32 h-1 bg-pink-500 mx-auto mt-4 mb-16"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                whileHover={{
                  y: -10,
                }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg"
              >
                <Icon className="text-5xl text-pink-500 mb-6" />

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Services;