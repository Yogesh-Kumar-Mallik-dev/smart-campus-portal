import { FaArrowRight, FaDownload } from "react-icons/fa";
import Admission_Hero from "@/assets/images/Career-mentorship.jpg"

const AdmissionsHero = () => {
  return (
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Text */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text">
                Admissions 2026 Open
              </h1>

              <p className="mt-4 max-w-xl text-base sm:text-lg text-muted">
                Begin your academic journey at BBDIT
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                    className="
                  inline-flex items-center gap-3
                  rounded-full bg-primary px-8 py-3
                  text-sm font-semibold text-inverted
                  hover:opacity-90
                "
                >
                  Apply Now
                  <FaArrowRight />
                </button>

                <a
                    href="/brochure.pdf"
                    className="
                  inline-flex items-center gap-2
                  rounded-full border border-border
                  px-6 py-3 text-sm font-medium text-text
                  hover:bg-overlay
                "
                >
                  <FaDownload className="text-muted" />
                  Download Brochure
                </a>
              </div>
            </div>

            {/* Right: Visual */}
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
                {/* Replace with real image */}
                <div className="flex h-full w-full items-center justify-center text-sm text-muted">
                  <img
                      src={Admission_Hero}
                      alt="Admissions at BBDIT"
                      className="h-full w-full object-cover"
                  />
                </div>

                {/*

              */}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default AdmissionsHero;
