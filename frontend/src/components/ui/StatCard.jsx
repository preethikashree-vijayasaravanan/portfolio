import { useEffect, useState } from "react";

function StatCard({ number, title }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = parseInt(number);

    if (isNaN(target)) return;

    let start = 0;

    const duration = 1800;
    const increment = Math.ceil(target / (duration / 20));

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        start = target;
        clearInterval(timer);
      }

      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className="bg-slate-900 rounded-2xl p-8 text-center hover:-translate-y-2 transition duration-300 hover:shadow-xl hover:shadow-pink-500/20">

      <h2 className="text-4xl font-bold text-pink-500">
        {count}+
      </h2>

      <p className="mt-3 text-gray-300">
        {title}
      </p>

    </div>
  );
}

export default StatCard;