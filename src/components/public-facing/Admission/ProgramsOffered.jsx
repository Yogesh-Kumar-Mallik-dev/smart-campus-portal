import { useState } from "react";

const programs = {
  UG: [
    "B.Tech (Computer Science & Engineering)",
    "B.Tech (Information Technology)",
    "B.Tech (Mechanical Engineering)",
    "B.Pharm",
    "BBA",
    "BCA",
  ],
  PG: [
    "M.Tech",
    "MBA",
    "MCA",
  ],
  Diploma: [
    "Polytechnic Programs",
  ],
};

const ProgramsOffered = () => {
  const [active, setActive] = useState("UG");

  return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Title */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-text">
              Programs Offered
            </h2>
          </div>

          {/* Tabs */}
          <div className="mb-10 flex justify-center gap-2">
            {Object.keys(programs).map((key) => (
                <button
                    key={key}
                    onClick={() => setActive(key)}
                    className={`
                rounded-full px-5 py-2 text-sm font-medium
                transition
                ${
                        active === key
                            ? "bg-primary text-inverted"
                            : "border border-border text-text hover:bg-overlay"
                    }
              `}
                >
                  {key}
                </button>
            ))}
          </div>

          {/* Content */}
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <ul className="grid gap-4 sm:grid-cols-2">
              {programs[active].map((course, i) => (
                  <li
                      key={i}
                      className="
                      rounded-xl border border-border
                      bg-background px-4 py-4
                      text-sm text-text
                      flex items-center justify-center
                      text-center
                    "
                  >
                    {course}
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
  );
};

export default ProgramsOffered;
