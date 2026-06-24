import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { client } from "../../sanity/client";

import StatCard from "../ui/StatCard";
import SkeletonLoader from "../ui/SkeletonLoader";

function Stats() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="statistics"] | order(_createdAt asc){
          _id,
          title,
          number
        }`
      )
      .then((data) => {
        setStats(data);
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
        id="stats"
        className="py-20 bg-slate-950"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-slate-900 rounded-2xl p-8"
              >
                <SkeletonLoader className="h-12 w-24 mx-auto mb-6" />
                <SkeletonLoader className="h-5 w-28 mx-auto" />
              </div>
            ))}

          </div>

        </div>
      </section>
    );
  }

  return (
    <section
      id="stats"
      className="py-20 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Statistics
          </h2>

          <p className="text-center text-gray-400 mb-14">
            A quick overview of my achievements and experience.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
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
          {stats.map((item) => (
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
              whileHover={{
                y: -8,
                scale: 1.04,
              }}
              transition={{
                duration: 0.4,
              }}
            >
              <StatCard
                number={item.number}
                title={item.title}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Stats;