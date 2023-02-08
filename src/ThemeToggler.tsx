import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="w-8 h-8 bg-[#fff] rounded-lg flex items-center justify-center hover:ring-2 ring-primary transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? (
        <IoMdMoon className="text-primary w-5 h-5" />
      ) : (
        <IoMdSunny className="text-primary w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggler;
