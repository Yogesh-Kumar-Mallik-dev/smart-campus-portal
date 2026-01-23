const eligibility = [
  {
    title: "Undergraduate (UG)",
    items: [
      "10+2 with Physics, Chemistry & Mathematics",
      "Minimum percentage as per university norms",
    ],
  },
  {
    title: "Postgraduate (PG)",
    items: [
      "Relevant Bachelor’s Degree from a recognized university",
    ],
  },
  {
    title: "Diploma",
    items: [
      "10th Pass from a recognized board",
    ],
  },
];

const EligibilityCriteria = () => {
  return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Title */}
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-text">
              Eligibility Criteria
            </h2>
          </div>

          {/* Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {eligibility.map((group, i) => (
                <div
                    key={i}
                    className="
                rounded-2xl border border-border
                bg-surface p-6 shadow-sm
              "
                >
                  <h3 className="mb-4 text-lg font-medium text-text">
                    {group.title}
                  </h3>

                  <ul className="space-y-2 text-sm text-muted">
                    {group.items.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">
                          • {item}
                        </li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default EligibilityCriteria;
