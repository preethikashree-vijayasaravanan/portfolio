import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaCertificate,
} from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: "Hackathon Participant",
      description:
        "Participated in college-level hackathons and developed innovative solutions.",
    },

    {
      icon: <FaMedal />,
      title: "Codathon",
      description:
        "Solved programming challenges and improved problem-solving skills.",
    },

    {
      icon: <FaAward />,
      title: "Paper Presentation",
      description:
        "Presented technical papers on emerging technologies and research topics.",
    },

    {
      icon: <FaCertificate />,
      title: "Workshops & Seminars",
      description:
        "Attended workshops on AI, Web Development, and Cloud Computing.",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-24 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-pink-500 hover:-translate-y-2 transition-all"
            >

              <div className="text-pink-400 text-4xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;