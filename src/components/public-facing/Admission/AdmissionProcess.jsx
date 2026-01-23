import { FaFileAlt, FaUpload, FaClipboardCheck, FaUserFriends, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    title: "Apply Online",
    desc: "Fill out the admission form with basic details.",
    icon: FaFileAlt,
  },
  {
    title: "Upload Documents",
    desc: "Submit academic and identity documents securely.",
    icon: FaUpload,
  },
  {
    title: "Entrance / Merit Evaluation",
    desc: "Assessment based on entrance exam or merit.",
    icon: FaClipboardCheck,
  },
  {
    title: "Counseling",
    desc: "Guided program selection and seat allocation.",
    icon: FaUserFriends,
  },
  {
    title: "Enrollment & Confirmation",
    desc: "Complete formalities and begin your journey.",
    icon: FaCheckCircle,
  },
];

const AdmissionProcess = () => {
  return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Title */}
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-text">
              How Admission Works
            </h2>
          </div>

          {/* Steps */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
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
                      <Icon className="text-primary text-lg" />
                    </div>

                    <div className="mb-1 text-sm font-semibold text-text">
                      {i + 1}. {step.title}
                    </div>

                    <p className="text-xs text-muted leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
              );
            })}
          </div>
        </div>
      </section>
  );
};

export default AdmissionProcess;
