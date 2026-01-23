import { FaAward, FaChartBar, FaCertificate } from "react-icons/fa";

const achievements = [
  {
    title: "Awards",
    icon: FaAward,
    items: [
      "Recognized as one of the Best Engineering Colleges in Uttar Pradesh",
      "Honored at national Education & EdTech Summits",
      "Consistent academic excellence across disciplines",
    ],
  },
  {
    title: "Rankings",
    icon: FaChartBar,
    items: [
      "Ranked among leading institutes in India",
      "39th in India & 2nd in Uttar Pradesh (as showcased by the institute)",
      "Featured in national education rankings such as IIRF",
    ],
  },
  {
    title: "Accreditations",
    icon: FaCertificate,
    items: [
      "Approved by AICTE, Government of India",
      "Affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
      "Recognised by PCI for Pharmacy programs",
    ],
  },
];

const AchievementsSection = () => {
  return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Title */}
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-text">
              Achievements & Honors
            </h2>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {achievements.map((card, i) => {
              const Icon = card.icon;
              return (
                  <div
                      key={i}
                      className="
                  rounded-2xl border border-border
                  bg-surface p-6 shadow-sm
                "
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-overlay">
                        <Icon className="text-primary" />
                      </div>
                      <h3 className="text-lg font-medium text-text">
                        {card.title}
                      </h3>
                    </div>

                    <ul className="space-y-2 text-sm text-muted">
                      {card.items.map((item, idx) => (
                          <li key={idx} className="leading-relaxed">
                            • {item}
                          </li>
                      ))}
                    </ul>
                  </div>
              );
            })}
          </div>
        </div>
      </section>
  );
};

export default AchievementsSection;
