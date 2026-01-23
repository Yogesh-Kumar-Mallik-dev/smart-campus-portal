import { FaBuilding, FaTrophy, FaChartLine, FaFileAlt } from "react-icons/fa";
import {
  AccentureLogo,
  CarrotLogo,
  FlextronicsLogo,
  HCLLogo,
  IFlexLogo,
  ICICIPrudentialLogo,
  IngersollRandLogo,
  InfosysLogo,
  KotakLogo,
  LTInfotechLogo,
  SyntelLogo,
  TCSLogo,
} from "./logos";

const logos = [
  { name: "Accenture", Comp: AccentureLogo },
  { name: "Carrot", Comp: CarrotLogo },
  { name: "Flextronics", Comp: FlextronicsLogo },
  { name: "HCL", Comp: HCLLogo },
  { name: "i-Flex", Comp: IFlexLogo },
  { name: "ICICI Prudential", Comp: ICICIPrudentialLogo },
  { name: "Ingersoll Rand", Comp: IngersollRandLogo },
  { name: "Infosys", Comp: InfosysLogo },
  { name: "Kotak", Comp: KotakLogo },
  { name: "L&T Infotech", Comp: LTInfotechLogo },
  { name: "Syntel", Comp: SyntelLogo },
  { name: "TCS", Comp: TCSLogo },
];

const PlacementsCarousel = () => {
  return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          {/* Title */}
          <h2 className="flex items-center justify-center gap-3 text-3xl font-semibold text-text">
            <FaBuilding className="text-primary" />
            Placements at BBDIT
          </h2>
          <p className="mt-2 text-sm text-muted">
            Connecting talent with industry leaders.
          </p>

          {/* Logos Marquee */}
          <div className="mt-8 overflow-hidden border-y border-border bg-surface">
            <div
                className="
              flex w-max gap-8 py-6
              animate-[marquee_40s_linear_infinite]
              hover:[animation-play-state:paused]
            "
            >
              {[...logos, ...logos].map((item, i) => {
                const Logo = item.Comp;
                return (
                    <div
                        key={i}
                        className="
                    flex h-20 w-40 shrink-0
                    items-center justify-center
                    rounded-xl border border-border
                    bg-background shadow-sm
                    p-3 text-text
                  "
                    >
                      <Logo className="w-28 text-text" />
                    </div>
                );
              })}
            </div>
          </div>

          {/* Mini Stats */}
          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:justify-center">
            <div className="flex flex-col items-center gap-2">
              <FaTrophy className="text-3xl text-primary" />
              <div className="text-2xl font-bold text-text">₹13.6 LPA</div>
              <div className="text-sm text-muted">Highest Package</div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaChartLine className="text-3xl text-primary" />
              <div className="text-2xl font-bold text-text">₹6.75 LPA</div>
              <div className="text-sm text-muted">Average Package</div>
            </div>
          </div>

          {/* CTA */}
          <button
              className="
            mt-10 inline-flex items-center gap-2
            rounded-full bg-primary px-6 py-3
            text-sm font-semibold text-inverted
            hover:opacity-90
          "
          >
            <FaFileAlt />
            Placement Report
          </button>
        </div>

        {/* Keyframes */}
        <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      </section>
  );
};

export default PlacementsCarousel;
