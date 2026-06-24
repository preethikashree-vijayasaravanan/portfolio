function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      <div className="w-24 h-1 bg-pink-500 mx-auto mt-6 rounded-full"></div>
    </div>
  );
}

export default SectionTitle;