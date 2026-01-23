import { FaFileAlt, FaPaperPlane, FaSearch, FaUserCheck } from "react-icons/fa";

const steps = [
  {
    title: "Prepare Resume & Documents",
    icon: FaFileAlt,
  },
  {
    title: "Submit via Email or Form",
    icon: FaPaperPlane,
  },
  {
    title: "Screening & Shortlisting",
    icon: FaSearch,
  },
  {
    title: "Interview & Selection",
    icon: FaUserCheck,
  },
];

const HowToApply = () => {
  return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Title */}
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-text">
              How to Apply
            </h2>
          </div>

          {/* Steps */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                  <div
                      key={i}
                      className="
                  rounded-2xl border border-border
                  bg-surface p-6 shadow-sm
                  text-center
                "
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-overlay">
                      <Icon className="text-lg text-primary" />
                    </div>

                    <div className="text-sm font-medium text-text">
                      {i + 1}. {step.title}
                    </div>
                  </div>
              );
            })}
          </div>

          {/* Contact */}
          <div className="text-center">
            <p className="text-sm text-muted">
              Send your application to{" "}
              <a
                  href="mailto:careers@bbdit.edu.in"
                  className="font-medium text-primary underline-offset-4 hover:underline"
              >
                careers@bbdit.edu.in
              </a>
            </p>

            <button
                className="
              mt-6 inline-flex items-center gap-3
              rounded-full bg-primary px-8 py-3
              text-sm font-semibold text-inverted
              hover:opacity-90
            "
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>
  );
};

export default HowToApply;
