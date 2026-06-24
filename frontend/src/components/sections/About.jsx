import { useEffect, useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../ui/FadeIn";
import SkeletonLoader from "../ui/SkeletonLoader";

import { client } from "../../sanity/client";

function About() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="profile"][0]{
          name,
          role,
          about,
          email,
          phone,
          location
        }`
      )
      .then((data) => setProfile(data));
  }, []);

  if (!profile) {
    return (
      <section id="about" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">

          <SkeletonLoader className="h-10 w-72 mx-auto mb-4" />

          <SkeletonLoader className="h-5 w-96 mx-auto mb-16" />

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">

              <SkeletonLoader className="h-8 w-48 mb-6" />

              <SkeletonLoader className="h-4 w-full mb-4" />
              <SkeletonLoader className="h-4 w-full mb-4" />
              <SkeletonLoader className="h-4 w-5/6 mb-4" />
              <SkeletonLoader className="h-4 w-full" />

            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">

              <SkeletonLoader className="h-8 w-52 mb-6" />

              <div className="space-y-5">

                <SkeletonLoader className="h-5 w-60" />
                <SkeletonLoader className="h-5 w-56" />
                <SkeletonLoader className="h-5 w-64" />
                <SkeletonLoader className="h-5 w-72" />
                <SkeletonLoader className="h-5 w-60" />

              </div>

            </div>

          </div>

        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn>

          <SectionTitle
            title="About Me"
            subtitle="Learn more about me and my journey."
          />

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">

              <h3 className="text-2xl font-semibold text-pink-400 mb-4">
                Who I Am
              </h3>

              <p className="text-gray-400 leading-8">
                {profile.about}
              </p>

            </div>

            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">

              <h3 className="text-2xl font-semibold text-pink-400 mb-4">
                Personal Details
              </h3>

              <div className="space-y-4">

                <div>
                  <span className="font-semibold">Name:</span>{" "}
                  {profile.name}
                </div>

                <div>
                  <span className="font-semibold">Role:</span>{" "}
                  {profile.role}
                </div>

                <div>
                  <span className="font-semibold">Phone:</span>{" "}
                  {profile.phone}
                </div>

                <div>
                  <span className="font-semibold">Location:</span>{" "}
                  {profile.location}
                </div>

                <div>
                  <span className="font-semibold">Email:</span>{" "}
                  {profile.email}
                </div>

              </div>

            </div>

          </div>

        </FadeIn>

      </div>
    </section>
  );
}

export default About;