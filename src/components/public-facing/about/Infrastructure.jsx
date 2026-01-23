const infrastructure = [
  {
    title: "Advanced Labs",
    desc: "Modern, well-equipped laboratories for hands-on learning.",
    image: "/images/infrastructure/labs.jpg",
  },
  {
    title: "Central Library",
    desc: "A vast collection of academic resources and digital access.",
    image: "/images/infrastructure/library.jpg",
  },
  {
    title: "Student Hostels",
    desc: "Safe, comfortable, and student-friendly living spaces.",
    image: "/images/infrastructure/hostels.jpg",
  },
  {
    title: "Auditorium",
    desc: "A grand space for events, seminars, and cultural programs.",
    image: "/images/infrastructure/auditorium.jpg",
  },
];

const InfrastructureSection = () => {
  return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Title */}
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-text">
              World-Class Infrastructure
            </h2>
          </div>

          {/* Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {infrastructure.map((item, i) => (
                <div
                    key={i}
                    className="
                overflow-hidden rounded-2xl
                border border-border
                bg-surface
                shadow-sm
              "
                >
                  {/* Image */}
                  <div className="aspect-[4/3] w-full bg-overlay">
                    {/* Replace placeholder with real image */}
                    <div className="flex h-full w-full items-center justify-center text-xs text-muted">
                      {item.title} Image
                    </div>

                    {/*
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                */}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-base font-medium text-text">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {item.desc}
                    </p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default InfrastructureSection;
