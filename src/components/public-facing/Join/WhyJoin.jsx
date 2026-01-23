import { FaUsers, FaChartLine, FaShieldAlt, FaFlask } from "react-icons/fa";

const reasons = [
  {
    title: "Work Culture",
    desc: "A collaborative and respectful academic environment that values every individual.",
    icon: FaUsers,
  },
  {
    title: "Growth",
    desc: "Continuous career development through training, mentorship, and learning opportunities.",
    icon: FaChartLine,
  },
  {
    title: "Stability",
    desc: "A long-term institutional vision that offers professional security and clarity.",
    icon: FaShieldAlt,
  },
  {
    title: "Research Support",
    desc: "Strong encouragement for innovation, publications, and academic research.",
    icon: FaFlask,
  },
];

const WhyJoin = () => {
  return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Title */}
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-text">
              Why Join BBDIT?
            </h2>
          </div>

          {/* Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((item, i) => {
              const Icon = item.icon;
              return (
                  <div
                      key={i}
                      className="
                  rounded-2xl border border-border
                  bg-surface p-6 shadow-sm
                  text-center
                "
                  >
                    <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-overlay">
                      <Icon className="text-lg text-primary" />
                    </div>

                    <h3 className="text-base font-medium text-text">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
              );
            })}
          </div>
        </div>
      </section>
  );
};

export default WhyJoin;
