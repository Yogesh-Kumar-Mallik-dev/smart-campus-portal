const stats = [
  {
    label: "Years of Excellence",
    value: "24+",
    sub: "Established in 2000",
  },
  {
    label: "Alumni Network",
    value: "14,000+",
    sub: "Across India & Abroad",
  },
  {
    label: "Placement Rate",
    value: "70–80%",
    sub: "Consistent outcomes",
  },
  {
    label: "Top Package",
    value: "₹13.6 LPA",
    sub: "Industry-leading offers",
  },
];

const Believe = () => {
  return (
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              Why Believe Us?
            </h2>
            <p className="mt-3 text-muted max-w-2xl mx-auto">
              A legacy of trust, growth, and real outcomes for students.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
                <div
                    key={i}
                    className="
                rounded-2xl
                border border-border
                bg-surface
                p-6
                text-center
                shadow-shadow-sm
                transition
                hover:shadow-shadow-md
              "
                >
                  <div className="text-4xl font-bold text-primary">
                    {s.value}
                  </div>

                  <div className="mt-2 text-sm font-medium">
                    {s.label}
                  </div>

                  <div className="mt-1 text-xs text-muted">
                    {s.sub}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}

export default Believe;