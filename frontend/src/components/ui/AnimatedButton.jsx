function AnimatedButton({
  text,
  href = "#",
  primary = true,
  target = "_self",
}) {
  return (
    <a
      href={href}
      target={target}
      rel="noreferrer"
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-block ${
        primary
          ? "bg-pink-500 hover:bg-pink-600 text-white"
          : "border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white"
      }`}
    >
      {text}
    </a>
  );
}

export default AnimatedButton;