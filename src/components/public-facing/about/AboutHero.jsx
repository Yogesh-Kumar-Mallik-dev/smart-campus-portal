import About_Hero from "@/assets/images/bbdit-campus.png"

const AboutHero = () => {
  return (
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Text */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-text">
                About BBDIT
              </h1>

              <p className="mt-4 max-w-xl text-base sm:text-lg text-muted">
                Building futures through discipline, knowledge, and vision
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div
                  className="
                aspect-[4/3] w-full
                overflow-hidden rounded-3xl
                border border-border
                bg-background
                shadow-md
              "
              >
                <div className="flex h-full w-full items-center justify-center text-sm text-muted">
                  <img
                      src={About_Hero}
                      alt="BBDIT Campus"
                      className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default AboutHero;
