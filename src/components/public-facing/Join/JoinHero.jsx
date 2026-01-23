import { FaArrowRight, FaHandshake } from "react-icons/fa";

const JoinHero = () => {
  return (
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Text */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text">
                Build the Future With Us
              </h1>

              <p className="mt-4 max-w-xl text-base sm:text-lg text-muted">
                Join a community dedicated to education, growth, and impact
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                    className="
                  inline-flex items-center gap-3
                  rounded-full bg-primary px-8 py-3
                  text-sm font-semibold text-inverted
                  hover:opacity-90
                "
                >
                  View Open Positions
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
                  Partner With Us
                </button>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div
                  className="
                aspect-[4/3] w-full
                overflow-hidden rounded-3xl
                border border-border
                bg-background
                shadow-md
              "
              >
                {/* Replace with real image */}
                <div className="flex h-full w-full items-center justify-center text-sm text-muted">
                  Faculty / Campus Visual
                </div>

                {/*
              <img
                src="/images/join-hero.jpg"
                alt="Join BBDIT"
                className="h-full w-full object-cover"
              />
              */}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default JoinHero;
