import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() =>
      document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);


  return (
      <button
          type="button"
          role="switch"
          aria-checked={dark}
          aria-label="Toggle theme"
          onClick={() => setDark((prev) => !prev)}
          className="
        relative inline-flex h-8 w-14 items-center
        rounded-full border border-border
        bg-surface
        transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-accent
      "
      >
        {/* Thumb */}
        <span
            className={`
          absolute left-1 flex h-6 w-6 items-center justify-center
          rounded-full bg-background shadow-sm
          transition-transform duration-300 ease-out
          ${dark ? "translate-x-6" : "translate-x-0"}
        `}
        >
        {dark ? (
            <FiMoon className="text-accent text-sm" />
        ) : (
            <FiSun className="text-warning text-sm" />
        )}
      </span>
      </button>
  );
};

export default ThemeToggle;
