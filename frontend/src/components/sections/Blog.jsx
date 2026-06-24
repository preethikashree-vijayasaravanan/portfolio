import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaTag } from "react-icons/fa";
import blogs from "../../data/blogs";

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-24 bg-[#08142e] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center">
            Blog
          </h2>

          <div className="w-32 h-1 bg-pink-500 mx-auto mt-4 mb-16"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ y: -10 }}
              className="
                bg-white/5
                border border-white/10
                rounded-3xl
                p-8
                backdrop-blur-lg
              "
            >
              <div className="flex items-center gap-2 text-pink-400 mb-3">
                <FaCalendarAlt />
                <span>{blog.date}</span>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {blog.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {blog.description}
              </p>

              <div className="flex items-center gap-2">
                <FaTag className="text-pink-500" />
                <span>{blog.category}</span>
              </div>

              <button
                className="
                  mt-6
                  bg-pink-500
                  px-5
                  py-2
                  rounded-lg
                  hover:scale-105
                  transition
                "
              >
                Read More
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;