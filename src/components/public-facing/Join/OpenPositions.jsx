import { FaChalkboardTeacher, FaTools, FaUserTie } from "react-icons/fa";

const positions = [
  {
    title: "Teaching",
    icon: FaChalkboardTeacher,
    roles: [
      "Professors",
      "Assistant Professors",
      "Lab Instructors",
    ],
  },
  {
    title: "Non-Teaching",
    icon: FaTools,
    roles: [
      "Lab Technicians",
      "IT Support",
      "Librarian",
    ],
  },
  {
    title: "Admin",
    icon: FaUserTie,
    roles: [
      "Office Staff",
      "Admission Team",
      "HR / Operations",
    ],
  },
];

const OpenPositions = () => {
  return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Title */}
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-text">
              Open Positions
            </h2>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {positions.map((group, i) => {
              const Icon = group.icon;
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
                      {group.title}
                    </h3>

                    <ul className="mt-4 space-y-2 text-sm text-muted">
                      {group.roles.map((role, idx) => (
                          <li key={idx}>{role}</li>
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

export default OpenPositions;
