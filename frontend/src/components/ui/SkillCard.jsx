function SkillCard({ title, skills }) {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-pink-500 hover:-translate-y-2 transition-all duration-300">

      <h3 className="text-xl font-semibold text-pink-400 mb-4">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">

        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-slate-800 px-4 py-2 rounded-lg text-sm hover:bg-pink-500 transition-all"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
}

export default SkillCard;