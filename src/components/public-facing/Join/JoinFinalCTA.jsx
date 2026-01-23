import { FaArrowRight, FaHandshake } from "react-icons/fa";

const JoinFinalCTA = () => {
  return (
      <section className="py-28 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-text">
          Shape Minds. Build Careers. Create Impact.
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
              className="
            inline-flex items-center gap-3
            rounded-full bg-primary px-8 py-3
            text-sm font-semibold text-inverted
            hover:opacity-90
          "
          >
            Join BBDIT
            <FaArrowRight />
          </button>

          <button
              className="
            inline-flex items-center gap-2
            rounded-full border border-border
            px-6 py-3 text-sm font-medium text-text
            hover:bg-overlay
          "
          >
            <FaHandshake className="text-muted" />
            Become a Partner
          </button>
        </div>
      </section>
  );
};

export default JoinFinalCTA;
