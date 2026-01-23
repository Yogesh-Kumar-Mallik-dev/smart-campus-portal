// logos.jsx
// All logos use `currentColor` so Tailwind classes like `text-text` control them.

export const AccentureLogo = ({ className = "w-28 text-text" }) => (
    <svg viewBox="0 0 200 60" className={className}>
      <text x="8" y="35" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="600" fill="currentColor">
        accenture
      </text>
      <text x="8" y="48" fontFamily="Arial, sans-serif" fontSize="8" fill="currentColor">
        High performance. Delivered.
      </text>
      <path d="M 8 38 L 145 38" stroke="currentColor" strokeWidth="2" />
    </svg>
);

export const CarrotLogo = ({ className = "w-28 text-text" }) => (
    <svg viewBox="0 0 200 60" className={className}>
      <text x="20" y="25" fontFamily="Georgia, serif" fontSize="24" fontWeight="600" fill="currentColor" fontStyle="italic">
        carrot
      </text>
      <text x="20" y="42" fontFamily="Arial, sans-serif" fontSize="12" letterSpacing="3" fill="currentColor" fontWeight="500">
        PROJECT
      </text>
    </svg>
);

export const FlextronicsLogo = ({ className = "w-28 text-text" }) => (
    <svg viewBox="0 0 200 60" className={className}>
      <text x="10" y="35" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="currentColor" letterSpacing="1.5">
        FLEXTRONICS
      </text>
    </svg>
);

export const HCLLogo = ({ className = "w-28 text-text" }) => (
    <svg viewBox="0 0 200 60" className={className}>
      <text x="15" y="40" fontFamily="Arial, sans-serif" fontSize="38" fontWeight="800" fill="currentColor" letterSpacing="-2">
        HCL
      </text>
    </svg>
);

export const IFlexLogo = ({ className = "w-28 text-text" }) => (
    <svg viewBox="0 0 200 60" className={className}>
      <ellipse cx="35" cy="20" rx="28" ry="15" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <text x="18" y="26" fontFamily="Georgia, serif" fontSize="18" fontWeight="700" fill="currentColor" fontStyle="italic">
        i-flex
      </text>
      <text x="18" y="45" fontFamily="Arial, sans-serif" fontSize="11" fill="currentColor">
        solutions
      </text>
    </svg>
);

export const ICICIPrudentialLogo = ({ className = "w-28 text-text" }) => (
    <svg viewBox="0 0 220 60" className={className}>
      <rect x="8" y="10" width="38" height="38" fill="none" stroke="currentColor" rx="3" />
      <text x="52" y="26" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" fill="currentColor">
        ICICI
      </text>
      <text x="52" y="40" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="600" fill="currentColor">
        PRUDENTIAL
      </text>
      <text x="52" y="50" fontFamily="Arial, sans-serif" fontSize="7" fill="currentColor">
        LIFE INSURANCE
      </text>
    </svg>
);

export const IngersollRandLogo = ({ className = "w-28 text-text" }) => (
    <svg viewBox="0 0 200 60" className={className}>
      <circle cx="22" cy="22" r="14" fill="none" stroke="currentColor" />
      <text x="8" y="45" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="currentColor">
        Ingersoll Rand
      </text>
      <text x="8" y="54" fontFamily="Arial, sans-serif" fontSize="7" fill="currentColor">
        Inspiring Progress
      </text>
    </svg>
);

export const InfosysLogo = ({ className = "w-28 text-text" }) => (
    <svg viewBox="0 0 200 60" className={className}>
      <text x="12" y="28" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="800" fill="currentColor">
        Infosys
      </text>
      <text x="12" y="42" fontFamily="Arial, sans-serif" fontSize="7.5" fill="currentColor" letterSpacing="0.5">
        POWERED BY INTELLECT. DRIVEN BY VALUES
      </text>
    </svg>
);

export const KotakLogo = ({ className = "w-28 text-text" }) => (
    <svg viewBox="0 0 200 60" className={className}>
      <circle cx="30" cy="30" r="20" fill="none" stroke="currentColor" />
      <path d="M 20 30 L 30 20 L 40 30 L 30 40 Z" fill="currentColor" />
      <text x="58" y="35" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="800" fill="currentColor">
        kotak
      </text>
    </svg>
);

export const LTInfotechLogo = ({ className = "w-28 text-text" }) => (
    <svg viewBox="0 0 200 60" className={className}>
      <circle cx="28" cy="30" r="20" fill="none" stroke="currentColor" />
      <text x="55" y="28" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="800" fill="currentColor">
        L&T
      </text>
      <text x="100" y="28" fontFamily="Arial, sans-serif" fontSize="18" fill="currentColor">
        Infotech
      </text>
    </svg>
);

export const SyntelLogo = ({ className = "w-28 text-text" }) => (
    <svg viewBox="0 0 200 60" className={className}>
      <text x="12" y="28" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="800" fill="currentColor">
        SYNTEL
      </text>
      <text x="12" y="42" fontFamily="Arial, sans-serif" fontSize="9" fill="currentColor">
        Consider IT Done
      </text>
    </svg>
);

export const TCSLogo = ({ className = "w-28 text-text" }) => (
    <svg viewBox="0 0 240 60" className={className}>
      <circle cx="30" cy="30" r="20" fill="none" stroke="currentColor" />
      <text x="24" y="36" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="800" fill="currentColor">
        T
      </text>
      <text x="56" y="26" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="800" fill="currentColor">
        TATA
      </text>
      <text x="56" y="40" fontFamily="Arial, sans-serif" fontSize="11" fill="currentColor" letterSpacing="0.5">
        CONSULTANCY SERVICES
      </text>
    </svg>
);
