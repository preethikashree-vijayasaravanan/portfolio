import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Logo */}

          <div>
            <h2 className="text-2xl font-bold text-pink-400">
              Preethika Shree
            </h2>

            <p className="text-gray-400 mt-3">
              Full Stack Developer passionate about
              building modern web applications and
              innovative solutions.
            </p>
          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">

              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#skills">Skills</a>
              </li>

              <li>
                <a href="#projects">Projects</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>

            </ul>

          </div>

          {/* Social Links */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl">

              <a href="#">
                <FaGithub />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400">
            © 2026 Preethika Shree. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition-all"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;