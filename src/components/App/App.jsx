import { useState, useEffect } from "react";
import { MainContent } from "../MainContent/MainContent.jsx";
import { Aside } from "../Aside/Aside.jsx";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop.jsx";

const App = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
      <main>
        <MainContent />
      </main>
      <Aside />
      <ScrollToTop />
    </>
  );
};

export default App;
