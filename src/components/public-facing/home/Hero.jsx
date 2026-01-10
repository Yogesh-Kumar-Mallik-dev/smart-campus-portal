import Hero_img from "@/assets/images/BBDIT-HERO.jpg";

const Hero = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full px-4 py-16 lg:w-[80%]">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-center">

          {/* Left – Text */}
          <div className="w-full md:w-2/5 text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl leading-tight">
              Babu Banarasi Das Institute of Technology
            </h1>

            <div className="mt-4 flex items-center justify-center md:justify-start gap-3">
              <span className="h-px w-12 bg-primary/50" />
              <p className="text-sm sm:text-base text-muted font-semibold italic tracking-wide">
                Excellence through and throughout
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                  href="/admission"
                  className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
              >
                Admissions
              </a>

              <a
                  href="/about"
                  className="px-6 py-3 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted transition"
              >
                Learn More
              </a>
            </div>
          </div>



          {/* Right – Image */}
          <div className="w-full md:w-3/5 flex justify-center">
            <img
                src={Hero_img}
                alt="BBDIT Campus"
                className="w-[90%] max-w-none md:w-full md:max-w-2xl object-cover rounded-2xl shadow-sm"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
