import logo from "@/assets/logo.svg";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
      <header className="sticky top-0 z-50 border-b border-border bg-background overflow-x-hidden">
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
              onClick={() => setOpen((p) => !p)}
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
            className={`fixed top-0 right-0 h-full w-64 bg-background border-l border-border shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
                open ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="p-4 space-y-4 mt-16">
            <div className="flex justify-center">
              <ThemeToggle />
            </div>

            {links.map((l) => (
                <NavLink
                    key={l.name}
                    to={l.to}
                    className={({ isActive }) =>
                        `text-lg py-2 flex justify-center ${
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
