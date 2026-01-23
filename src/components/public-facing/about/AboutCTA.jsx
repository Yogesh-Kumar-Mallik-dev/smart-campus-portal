import { FaArrowRight } from "react-icons/fa";

const AboutCTA = () => {
  return (
      <section className="py-28 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-text">
          Discover a Campus Built for Excellence
        </h2>

        <button
            className="
          mt-8 inline-flex items-center gap-3
          rounded-full bg-primary px-8 py-3
          text-sm font-semibold text-inverted
          hover:opacity-90
        "
        >
          Explore Admissions
          <FaArrowRight />
        </button>
      </section>
  );
};

export default AboutCTA;
