import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import SectionTitle from "../ui/SectionTitle";
import SkeletonLoader from "../ui/SkeletonLoader";

import { client } from "../../sanity/client";
import { urlFor } from "../../sanity/imageUrl";

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="gallery"] | order(_createdAt desc){
          _id,
          title,
          description,
          image
        }`
      )
      .then((data) => {
        setGallery(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section
        id="gallery"
        className="py-24 bg-slate-950"
      >
        <div className="max-w-7xl mx-auto px-6">

          <SkeletonLoader className="h-10 w-64 mx-auto mb-4" />

          <SkeletonLoader className="h-5 w-96 mx-auto mb-16" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700"
              >
                <SkeletonLoader className="h-60 w-full rounded-none" />

                <div className="p-6">
                  <SkeletonLoader className="h-8 w-48 mb-5" />
                  <SkeletonLoader className="h-4 w-full mb-3" />
                  <SkeletonLoader className="h-4 w-11/12 mb-3" />
                  <SkeletonLoader className="h-4 w-9/12" />
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    );
  }

  return (
    <section
      id="gallery"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Gallery"
            subtitle="A collection of my projects, certificates and achievements."
          />
        </motion.div>

        {gallery.length === 0 ? (
          <p className="text-center text-gray-400 mt-12">
            No gallery items available.
          </p>
        ) : (
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {gallery.map((item) => (
              <motion.div
                key={item._id}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-pink-500 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-pink-500/20">

                  {item.image && (
                    <img
                      loading="lazy"
                      src={urlFor(item.image).width(800).url()}
                      alt={item.title}
                      className="w-full h-60 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  )}

                  <div className="p-6">

                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 mt-3 leading-7">
                      {item.description}
                    </p>

                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}

export default Gallery;