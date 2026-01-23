import { FaBalanceScale, FaLightbulb, FaShieldAlt, FaSeedling } from "react-icons/fa";

const values = [
  {
    title: "Discipline",
    desc: "Building character through consistency, responsibility, and respect for learning.",
    icon: FaBalanceScale,
  },
  {
    title: "Innovation",
    desc: "Encouraging curiosity, creativity, and forward-thinking in every field.",
    icon: FaLightbulb,
  },
  {
    title: "Integrity",
    desc: "Upholding honesty, ethics, and trust in every action we take.",
    icon: FaShieldAlt,
  },
  {
    title: "Growth",
    desc: "Nurturing continuous personal, academic, and professional development.",
    icon: FaSeedling,
  },
];

const ValuesSection = () => {
  return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Title */}
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-text">
              Our Values
            </h2>
          </div>

          {/* Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
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

                    <h3 className="text-base font-medium text-text">
                      {v.title}
                    </h3>

                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
              );
            })}
          </div>
        </div>
      </section>
  );
};

export default ValuesSection;
