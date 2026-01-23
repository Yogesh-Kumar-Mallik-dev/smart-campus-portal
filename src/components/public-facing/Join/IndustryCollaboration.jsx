import { FaHandshake, FaChalkboardTeacher, FaBriefcase, FaProjectDiagram,} from "react-icons/fa";

const collaborations = [
  {
    title: "Training Programs",
    desc: "Workshops, certifications, and expert-led sessions for students.",
    icon: FaChalkboardTeacher,
  },
  {
    title: "Campus Drives",
    desc: "Recruitment and hiring events to connect with fresh talent.",
    icon: FaBriefcase,
  },
  {
    title: "Joint Initiatives",
    desc: "Collaborative projects, research, and incubation programs.",
    icon: FaProjectDiagram,
  },
];

const IndustryCollaboration = () => {
  return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-text">
                Industry Collaboration
              </h2>

              <h3 className="mt-6 flex items-center gap-3 text-xl font-medium text-text">
                <FaHandshake className="text-primary" />
                Partner With Us
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                Work with BBDIT to shape industry-ready graduates. Collaborate with
                us to design meaningful learning experiences, bridge the gap
                between academia and industry, and build a future-ready workforce.
              </p>
            </div>

            {/* Right */}
            <div className="grid gap-6 sm:grid-cols-2">
              {collaborations.map((item, i) => {
                const Icon = item.icon;
                const isLastOdd =
                    collaborations.length % 2 === 1 &&
                    i === collaborations.length - 1;

                return (
                    <div
                        key={i}
                        className={`
                    rounded-2xl border border-border bg-surface p-6 shadow-sm
                    ${isLastOdd ? "sm:col-span-2 sm:mx-auto sm:max-w-sm" : ""}
                  `}
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-overlay">
                        <Icon className="text-lg text-primary" />
                      </div>

                      <h4 className="text-base font-medium text-text">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {item.desc}
                      </p>
                    </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
  );
};

export default IndustryCollaboration;
