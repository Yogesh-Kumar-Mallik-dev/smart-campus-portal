const features = [
  {
    title: "Experienced Faculty",
    desc: "Learn from educators with deep academic roots and real-world exposure.",
    icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path
              d="M12 3l9 4.5-9 4.5-9-4.5L12 3zm0 9l6.5-3.25V14a6.5 6.5 0 01-13 0V8.75L12 12z"
              fill="currentColor"
          />
        </svg>
    ),
  },
  {
    title: "Modern Infrastructure",
    desc: "Smart classrooms, advanced labs, and a campus built for growth.",
    icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path
              d="M3 21h18v-2H3v2zm2-4h4V3H5v14zm6 0h4V7h-4v10zm6 0h4V11h-4v6z"
              fill="currentColor"
          />
        </svg>
    ),
  },
  {
    title: "Industry-Oriented Learning",
    desc: "Curriculum aligned with today’s tech and tomorrow’s careers.",
    icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path
              d="M9 2h6v2h4v4h-2V6H7v2H5V4h4V2zm-2 8h10l-1 10H8L7 10zm2 2l.6 6h4.8l.6-6H9z"
              fill="currentColor"
          />
        </svg>
    ),
  },
  {
    title: "Student-Centric Culture",
    desc: "A campus that prioritizes support, mentorship, and opportunity.",
    icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6">
          <path
              d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 9a7 7 0 0114 0H5z"
              fill="currentColor"
          />
        </svg>
    ),
  },
];

const WhyBBDIT = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Why BBDIT?
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted">
            We combine academic discipline with modern learning to prepare
            students for a world that never stands still.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="
                rounded-2xl
                border border-border
                bg-surface
                p-6
                shadow-shadow-sm
                transition
                hover:-translate-y-1
                hover:shadow-shadow-md
              "
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-overlay text-xl">
                {f.icon}
              </div>

              <h3 className="mt-4 text-lg font-medium">
                {f.title}
              </h3>

              <p className="mt-2 text-sm text-muted">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyBBDIT ;


