import { useEffect, useState } from "react";
import { client } from "../../sanity/client";
import CodingCard from "../ui/CodingCard";
import SectionTitle from "../ui/SectionTitle";

function CodingProfiles() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="codingProfile"] | order(order asc){
          _id,
          platform,
          username,
          profileUrl,
          description,
          logo
        }`
      )
      .then((data) => setProfiles(data))
      .catch(console.error);
  }, []);

  return (
    <section
      id="coding"
      className="py-20 bg-black"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Problem Solving"
          subtitle="Coding Platforms"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {profiles.map((profile) => (
            <CodingCard
              key={profile._id}
              profile={profile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CodingProfiles;