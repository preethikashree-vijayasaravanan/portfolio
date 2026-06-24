import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import SectionTitle from "../ui/SectionTitle";
import SkeletonLoader from "../ui/SkeletonLoader";

import { client } from "../../sanity/client";
import { urlFor } from "../../sanity/imageUrl";

function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="certificate"] | order(_createdAt desc){
          _id,
          title,
          issuer,
          certificateUrl,
          image
        }`
      )
      .then((data) => {
        setCertificates(data);
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
        id="certificates"
        className="py-24 bg-slate-900"
      >
        <div className="max-w-7xl mx-auto px-6">

          <SkeletonLoader className="h-10 w-72 mx-auto mb-4" />
          <SkeletonLoader className="h-5 w-96 mx-auto mb-16" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700"
              >
                <SkeletonLoader className="h-56 w-full rounded-none" />

                <div className="p-6">
                  <SkeletonLoader className="h-8 w-52 mb-4" />
                  <SkeletonLoader className="h-5 w-36 mb-6" />
                  <SkeletonLoader className="h-10 w-40 rounded-lg" />
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
      id="certificates"
      className="py-24 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Certificates"
            subtitle="Professional certifications and achievements."
          />
        </motion.div>

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
          {certificates.map((cert) => (
            <motion.div
              key={cert._id}
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
            >
              <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-pink-500 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-pink-500/20">

                {cert.image && (
                  <img
                    loading="lazy"
                    src={urlFor(cert.image).width(700).url()}
                    alt={cert.title}
                    className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                )}

                <div className="p-6">

                  <h3 className="text-xl font-bold text-white">
                    {cert.title}
                  </h3>

                  <p className="text-pink-400 mt-2">
                    {cert.issuer}
                  </p>

                  {cert.certificateUrl && (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-6 bg-pink-500 hover:bg-pink-600 px-5 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30"
                    >
                      View Certificate
                    </a>
                  )}

                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Certificates;