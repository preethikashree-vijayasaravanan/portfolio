import SectionTitle from "../ui/SectionTitle";
import timeline from "../../data/timeline";

function Timeline() {
  return (
    <section
      id="timeline"
      className="py-24 bg-slate-900"
    >
      <div className="max-w-5xl mx-auto px-6">

        <SectionTitle
          title="My Journey"
          subtitle="A timeline of my learning and development journey."
        />

        <div className="relative border-l-4 border-pink-500">

          {timeline.map((item, index) => (
            <div
              key={index}
              className="mb-12 ml-8"
            >

              <div className="absolute w-5 h-5 bg-pink-500 rounded-full -left-[11px]"></div>

              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-pink-500 transition-all duration-300">

                <span className="text-pink-400 font-bold text-lg">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Timeline;