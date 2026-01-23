const AboutInstitute = () => {
  return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Title */}
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-text">
              About the Institute
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: Vision & Mission (Box) */}
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-medium text-text">
                Vision & Mission
              </h3>

              {/* Vision */}
              <div className="mb-6">
                <div className="mb-2 text-sm font-semibold text-text">
                  Vision
                </div>
                <p className="text-sm text-muted">
                  To nurture future leaders through quality education, strong
                  values, and a culture of continuous growth.
                </p>
              </div>

              {/* Mission */}
              <div>
                <div className="mb-2 text-sm font-semibold text-text">
                  Mission
                </div>
                <ul className="list-disc space-y-2 pl-4 text-sm text-muted">
                  <li>
                    Deliver industry-relevant education grounded in strong
                    academic foundations.
                  </li>
                  <li>
                    Foster discipline, integrity, and responsibility in every
                    student.
                  </li>
                  <li>
                    Create an environment that encourages innovation and lifelong
                    learning.
                  </li>
                </ul>
              </div>
            </div>
            {/* Right: History */}
            <div className="flex items-center">
              <div>
                <h3 className="mb-4 text-lg font-medium text-text">
                  Our History
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-muted">
                  Babu Banarasi Das Institute of Technology was founded with a clear
                  purpose — to create an environment where discipline, knowledge,
                  and opportunity converge.
                  <br/>
                  <div className="block lg::hidden"><br/></div>
                  Over the years, the institute has grown
                  into a trusted center of learning, shaping thousands of students
                  into capable professionals and responsible citizens. What began
                  as a vision to uplift education in the region has evolved into a
                  legacy of academic commitment and institutional integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default AboutInstitute;
