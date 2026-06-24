import { motion } from "framer-motion";
import { urlFor } from "../../sanity/imageUrl";

function CodingCard({ profile }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 border border-pink-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-4">
        {profile.logo && (
          <img
            src={urlFor(profile.logo).width(70).height(70).url()}
            alt={profile.platform}
            className="w-16 h-16 rounded-xl object-contain bg-pink-50 p-2"
          />
        )}

        <div>
          <h3 className="text-xl font-bold text-pink-600">
            {profile.platform}
          </h3>

          <p className="text-gray-600">@{profile.username}</p>
        </div>
      </div>

      <p className="text-gray-700 mt-5 flex-grow">
        {profile.description}
      </p>

      <a
        href={profile.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-center bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-xl transition duration-300"
      >
        View Profile →
      </a>
    </motion.div>
  );
}

export default CodingCard;