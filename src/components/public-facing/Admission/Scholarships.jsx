import { FaUniversity, FaMedal, FaHandsHelping } from "react-icons/fa";

const scholarships = [
  {
    title: "Government Scholarships",
    desc: "State and national schemes for eligible students under various government programs.",
    icon: FaUniversity,
  },
  {
    title: "Merit-Based",
    desc: "Rewards for academic excellence and outstanding performance.",
    icon: FaMedal,
  },
  {
    title: "Need-Based",
    desc: "Financial assistance for students from economically weaker backgrounds.",
    icon: FaHandsHelping,
  },
];

const ScholarshipsSection = () => {
  return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Title */}
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-text">
              Scholarships & Aid
            </h2>
            <p className="mt-2 text-sm text-muted">
              Making quality education accessible to every deserving student
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {scholarships.map((item, i) => {
              const Icon = item.icon;
              return (
                  <div
                      key={i}
                      className="
                  rounded-2xl border border-border
                  bg-surface p-8 shadow-sm
                  text-center
                "
                  >
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-overlay">
                      <Icon className="text-xl text-primary" />
                    </div>

                    <h3 className="text-lg font-medium text-text">
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

export default ScholarshipsSection;
