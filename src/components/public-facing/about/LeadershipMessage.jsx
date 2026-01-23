import chairman from "@/assets/images/chairman.jpg";
const LeadershipMessage = () => {
  return (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-12">

          {/* Left: Photo */}
          <div className="mx-auto mb-8 lg:mb-0 lg:w-1/3">
            <div
                className="
              aspect-square w-full overflow-hidden rounded-3xl
              border border-border bg-background
              shadow-md
            "
            >
              {/* Replace this div with your actual image */}
              <div className="flex h-full w-full items-center justify-center text-sm text-muted">
                <img
                    src={chairman}
                    alt="Chairman / Director"
                    className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Message */}
          <div className="lg:w-2/3">
            {/* Name & Role */}
            <h3 className="mb-2 text-2xl font-semibold text-text">
              Mr. Arpit Agarwal
            </h3>
            <p className="text-sm font-medium text-primary">
              Chairman, Babu Banarasi Das Institute of Technology
            </p>

            {/* Quote / Message Body */}
            <div className="mt-6 space-y-4 text-sm text-muted leading-relaxed">
              <p>
                At BBDIT, we believe that education is more than just academics —
                it’s about shaping character, nurturing curiosity, and building
                leaders who are equipped to face the challenges of tomorrow.
              </p>

              <p>
                Our mission is to cultivate a culture of continuous learning,
                integrity, and innovation. We strive to empower each student
                with the skills and values necessary to excel in a fast-changing
                world, without compromising on ethics or discipline.
              </p>

              <p>
                Through our dedicated faculty and supportive environment,
                we celebrate a legacy of academic excellence and unwavering
                commitment to holistic development.
              </p>
            </div>

            {/* Signature / Attribution */}
            <div className="mt-8 text-sm font-semibold text-text">
              — Arpit Agarwal
            </div>
          </div>
        </div>
      </section>
  );
};

export default LeadershipMessage;
