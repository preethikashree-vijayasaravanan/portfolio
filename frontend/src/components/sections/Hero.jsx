import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
} from "react-icons/si";

import SkeletonLoader from "../ui/SkeletonLoader";
import { client } from "../../sanity/client";
import { urlFor } from "../../sanity/imageUrl";

const Hero = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="profile"][0]{
          name,
          role,
          bio,
          github,
          linkedin,
          profileImage,
          resume{
            asset->{
              url
            }
          }
        }`
      )
      .then((data) => {
        setProfile(data);
      })
      .catch(console.error);
  }, []);

  if (!profile) {
    return (
      <section className="min-h-screen bg-[#08142e] flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div className="space-y-6">
            <SkeletonLoader className="h-6 w-40" />
            <SkeletonLoader className="h-16 w-96" />
            <SkeletonLoader className="h-10 w-72" />
            <SkeletonLoader className="h-5 w-full" />
            <SkeletonLoader className="h-5 w-11/12" />
            <SkeletonLoader className="h-5 w-10/12" />

            <div className="flex gap-4 pt-6">
              <SkeletonLoader className="h-14 w-44 rounded-xl" />
              <SkeletonLoader className="h-14 w-44 rounded-xl" />
            </div>
          </div>

          <div className="flex justify-center">
            <SkeletonLoader className="w-[380px] h-[380px] rounded-full" />
          </div>

        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="min-h-screen bg-[#08142e] text-white flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}

        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-pink-500 text-xl font-medium">
            Hello, I'm
          </p>

          <h1 className="mt-3 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            {profile.name}
          </h1>

          <h2 className="mt-5 text-2xl md:text-3xl font-semibold text-pink-400">
            {profile.role}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
            {profile.bio}
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#projects"
              className="bg-pink-500 hover:bg-pink-600 transition-all duration-300 px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105"
            >
              Explore My Work
            </a>

            {profile.resume?.asset?.url && (
              <a
                href={profile.resume.asset.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-pink-500 hover:bg-pink-500 transition-all duration-300 px-8 py-4 rounded-xl font-semibold hover:scale-105"
              >
                Download Resume
              </a>
            )}

          </div>

          <div className="flex items-center gap-6 mt-10 text-4xl">

            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition duration-300"
              >
                <FaGithub />
              </a>
            )}

            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition duration-300"
              >
                <FaLinkedin />
              </a>
            )}

                      </div>

        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          className="relative flex justify-center lg:justify-end mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background Glow */}

          <div className="absolute w-[430px] h-[430px] bg-pink-500 rounded-full blur-[120px] opacity-20"></div>

          {/* Rotating Border */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[360px] h-[360px] md:w-[450px] md:h-[450px] border-[3px] border-pink-500 rounded-full"
          />

          {/* Profile Image */}

          <img
            src={urlFor(profile.profileImage).width(700).url()}
            alt={profile.name}
            loading="lazy"
            className="relative z-10 w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full object-cover border-4 border-pink-500 shadow-2xl shadow-pink-500/30"
          />

          {/* React */}

          <motion.div
            className="absolute top-6 left-6 text-cyan-400"
            animate={{
              y: [-12, 12, -12],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <FaReact size={55} />
          </motion.div>

          {/* Node */}

          <motion.div
            className="absolute bottom-10 left-2 text-green-500"
            animate={{
              y: [12, -12, 12],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <FaNodeJs size={55} />
          </motion.div>

          {/* MongoDB */}

          <motion.div
            className="absolute top-10 right-4 text-green-400"
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <SiMongodb size={52} />
          </motion.div>

          {/* Express */}

          <motion.div
            className="absolute bottom-16 right-0 text-gray-300"
            animate={{
              y: [10, -10, 10],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <SiExpress size={52} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;