import { FaArrowRight } from "react-icons/fa";

const FinalCTA = () => {
  return (
      <section className="py-28 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-text">
          Shape Your Future at BBDIT
        </h2>

        <p className="mt-3 text-sm text-muted">
          Admissions open for 2026
        </p>

        <button
            className="
          mt-8 inline-flex items-center gap-3
          rounded-full bg-primary px-8 py-3
          text-sm font-semibold text-inverted
          hover:opacity-90
        "
        >
          Apply Now
          <FaArrowRight />
        </button>
      </section>
  );
};
export default FinalCTA;
