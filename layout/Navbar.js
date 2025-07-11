"use client";
import { useEffect, useState } from "react";
import { NavData } from "@/data";
import { Home, Briefcase, Code, Send } from "lucide-react";
import ThemeButton from "@/components/ui/theme-button";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { setTheme } = useTheme();

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300
        ${
          showNavbar ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
        }
      `}>
      {/*DESKTOP NAVBAR*/}
      <div
        className="
        hidden md:flex justify-between items-center gap-4 
        shadow-md border border-gray-200 dark:border-gray-800 
        backdrop-blur-lg bg-white dark:bg-black 
        px-6 py-2 rounded-full transition-colors 
      ">
        {NavData.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="
              flex items-center gap-2 text-sm font-medium
              text-black dark:text-white 
              hover:text-gray-700 dark:hover:text-gray-300 
              transition-colors
            ">
            <span className="capitalize whitespace-nowrap">{item.label}</span>
          </a>
        ))}
        <div className="relative">
          <ThemeButton setShowDropdown={setShowDropdown} />
          {showDropdown && (
            <div
              className="
        absolute right-0 mt-2 w-32
        bg-white dark:bg-black border border-gray-200 dark:border-gray-700
        rounded-md shadow-md z-50 text-sm">
              <button
                onClick={() => {
                  setTheme("dark");
                  setShowDropdown(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                Dark
              </button>
              <button
                onClick={() => {
                  setTheme("light");
                  setShowDropdown(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                Light
              </button>
              <button
                onClick={() => {
                  setTheme("system");
                  setShowDropdown(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                System
              </button>
            </div>
          )}
        </div>
      </div>
      {/*MOBILE NAVBAR*/}
      <div
        className="
        flex md:hidden justify-between items-center gap-4 
        shadow-md border border-gray-200 dark:border-gray-800 
        backdrop-blur-lg bg-white dark:bg-black 
        px-6 py-2 rounded-full transition-colors 
      ">
        Mobile Navbar
        {/* {NavData.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="
              flex items-center gap-2 text-sm font-medium
              text-black dark:text-white 
              hover:text-gray-700 dark:hover:text-gray-300 
              transition-colors
            ">
            <span className="capitalize whitespace-nowrap">{item.label}</span>
          </a>
        ))}
        <div className="relative">
          <ThemeButton setShowDropdown={setShowDropdown} />
          {showDropdown && (
            <div
              className="
        absolute right-0 mt-2 w-32
        bg-white dark:bg-black border border-gray-200 dark:border-gray-700
        rounded-md shadow-md z-50 text-sm">
              <button
                onClick={() => {
                  setTheme("dark");
                  setShowDropdown(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                Dark
              </button>
              <button
                onClick={() => {
                  setTheme("light");
                  setShowDropdown(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                Light
              </button>
              <button
                onClick={() => {
                  setTheme("system");
                  setShowDropdown(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                System
              </button>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
}
 