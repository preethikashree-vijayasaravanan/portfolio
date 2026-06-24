import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

function GitHubStats() {
  const username = "preethikashree-vijayasaravanan";

  return (
    <section
      id="github"
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
            title="GitHub Statistics"
            subtitle="My coding journey through GitHub."
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mt-12"
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

          {/* GitHub Stats */}

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="bg-slate-800 rounded-2xl p-4 shadow-lg hover:shadow-pink-500/20 transition-all"
          >
            <img
              loading="lazy"
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true`}
              alt="GitHub Stats"
              className="rounded-xl w-full"
            />
          </motion.div>

          {/* GitHub Streak */}

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="bg-slate-800 rounded-2xl p-4 shadow-lg hover:shadow-pink-500/20 transition-all"
          >
            <img
              loading="lazy"
              src={`https://streak-stats.demolab.com?user=${username}&theme=tokyonight&hide_border=true`}
              alt="GitHub Streak"
              className="rounded-xl w-full"
            />
          </motion.div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="mt-8 bg-slate-800 rounded-2xl p-4 shadow-lg hover:shadow-pink-500/20 transition-all"
        >
          <img
            loading="lazy"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true`}
            alt="Top Languages"
            className="rounded-xl mx-auto"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default GitHubStats;