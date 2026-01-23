const fees = [
  {
    title: "B.Tech",
    items: [
      { label: "Tuition", value: "As per university norms" },
      { label: "Hostel", value: "Optional, charged separately" },
      { label: "Other", value: "Library, Exam, Activities" },
    ],
  },
  {
    title: "MBA",
    items: [
      { label: "Tuition", value: "As per institute policy" },
      { label: "Hostel", value: "Optional" },
    ],
  },
  {
    title: "Diploma",
    items: [
      { label: "Tuition", value: "Program-based" },
    ],
  },
];

const FeeStructure = () => {
  return (
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          {/* Title */}
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-text">
              Fee Structure
            </h2>
            <p className="mt-2 text-sm text-muted">
              Transparent and structured for every program
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {fees.map((block, i) => (
                <div
                    key={i}
                    className="
                rounded-2xl border border-border
                bg-surface p-6 shadow-sm
              "
                >
                  <h3 className="mb-6 text-lg font-medium text-text">
                    {block.title}
                  </h3>

                  <div className="space-y-4">
                    {block.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="
                      flex items-center justify-between
                      rounded-lg border border-border
                      bg-background px-4 py-3
                    "
                        >
                    <span className="text-sm text-muted">
                      {item.label}
                    </span>
                          <span className="text-sm font-medium text-text">
                      {item.value}
                    </span>
                        </div>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default FeeStructure;
