const campusItems = [
  "Advanced Labs",
  "Smart Classrooms",
  "Central Library",
  "Comfortable Hostels",
  "Sports Complex",
  "Auditorium",
  "Cultural Events",
  "Tech Fests",
  "Workshops",
  "Seminars",
  "Innovation Hub",
  "Research Labs",
  "Green Campus",
  "Cafeteria",
  "Medical Center",
  "Transport Facility",
  "Clubs & Societies",
  "Gym & Fitness",
  "Open Grounds",
  "Student Lounges",
];

const CampusLife = () => {
  return (
      <section className="py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              What Is It Like There?
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-muted">
              A campus that balances discipline, comfort, and vibrant student life.
            </p>
          </div>
        </div>

        {/* Marquee */}
        <div
            className="
          group relative
          overflow-hidden
          bg-background
        "
        >
          <div
              className="
            flex w-max gap-6 py-6
            animate-[marquee_30s_linear_infinite]
            group-hover:[animation-play-state:paused]
          "
          >
            {[...campusItems, ...campusItems].map((title, i) => (
                <div
                    key={i}
                    className="
                w-64 shrink-0
                rounded-2xl
                border border-border
                bg-surface
                shadow-shadow-sm
                overflow-hidden
              "
                >
                  <div className="h-36 bg-overlay flex items-center justify-center text-xs text-muted">
                    {title} Image
                  </div>

                  <div className="p-4">
                    <div className="text-sm font-medium">{title}</div>
                    <p className="mt-1 text-xs text-muted">
                      Experience life beyond classrooms.
                    </p>
                  </div>
                </div>
            ))}
          </div>
        </div>

        {/* Keyframes */}
        <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      </section>
  );
};

export default CampusLife;
