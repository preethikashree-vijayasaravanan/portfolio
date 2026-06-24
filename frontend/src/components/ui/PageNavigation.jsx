import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function PageNavigation({
  previousLabel,
  previousLink,
  nextLabel,
  nextLink,
}) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-slate-700 pt-8 flex justify-between items-center">

          {/* Previous Button */}
          {previousLink ? (
            <Link
              to={previousLink}
              className="flex items-center gap-3 bg-slate-800 hover:bg-pink-500 transition px-6 py-3 rounded-xl"
            >
              <FaArrowLeft />
              {previousLabel}
            </Link>
          ) : (
            <div></div>
          )}

          {/* Next Button */}
          {nextLink ? (
            <Link
              to={nextLink}
              className="flex items-center gap-3 bg-pink-500 hover:bg-pink-600 transition px-6 py-3 rounded-xl"
            >
              {nextLabel}
              <FaArrowRight />
            </Link>
          ) : (
            <div></div>
          )}

        </div>
      </div>
    </section>
  );
}

export default PageNavigation;