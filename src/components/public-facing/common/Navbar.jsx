import logo from "@/assets/logo.svg"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/basics/ThemeToggle.jsx";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Admission", to: "/admission" },
  { name: "Hostel", to: "/hostel" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className=" isolate z-[999] sticky border-b border-border bg-background top-0 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <img className="h-12 w-12" src={logo} alt="logo" />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="gap-4">
              {links.map((l) => (
                  <NavigationMenuItem key={l.name}>
                    <NavLink
                        to={l.to}
                        className={({ isActive }) =>
                            `transition-colors ${
                                isActive
                                    ? "text-primary"
                                    : "text-muted hover:text-primary"
                            }`
                        }
                    >
                      {l.name}
                    </NavLink>
                  </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <ThemeToggle />
          <Button>Login</Button>
        </div>

        {/* Mobile toggle */}
        <button
            className="md:hidden text-foreground z-50"
            onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Backdrop */}
      {open && (
          <div
              className="fixed inset-0 bg-black/30 md:hidden"
              onClick={() => setOpen(false)}
          />
      )}

      {/* Mobile slide-in menu */}
      <div
          className={`fixed top-0 right-0 h-full w-64 bg-background border-l border-border transform transition-transform duration-300 ease-out md:hidden ${
              open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-4 space-y-4 mt-14">
          <div className="flex justify-center">
            <ThemeToggle />
          </div>

          {links.map((l) => (
              <NavLink
                  key={l.name}
                  to={l.to}
                  className={({ isActive }) =>
                      `text-lg flex justify-center ${
                          isActive
                              ? "text-primary"
                              : "text-muted hover:text-primary"
                      }`
                  }
                  onClick={() => setOpen(false)}
              >
                {l.name}
              </NavLink>
          ))}

          <Button className="w-full mt-4">Login</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
