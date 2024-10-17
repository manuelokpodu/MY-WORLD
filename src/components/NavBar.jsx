import React, { useState } from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("dark-mode")) || false;
  });

  if (darkMode) {
    document.body.classList.remove(".light-mode");
  } else {
    document.body.classList.add(".light-mode");
  }

  const icon = darkMode ? <BsMoonFill /> : <BsMoon />;

  return (
    <nav className="d-flex justify-content-between align-items-center shadow bg-elements custom-text-white">
      <Link
        to="/"
        className="where text-decoration-none custom-text-white fw-semibold"
      >
        <h3>Where in the world?</h3>
      </Link>
      <div
        onClick={() => {
          document.body.classList.toggle("light-mode");
          setDarkMode(!darkMode);
          if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("dark-mode", JSON.stringify(false));
          } else {
            localStorage.setItem("dark-mode", JSON.stringify(true));
          }
        }}
        className="d-flex gap-2 align-items-center"
        style={{ cursor: "pointer" }}
      >
        {icon}
        <p className="m-0 light-dark">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
    </nav>
  );
};

export default NavBar;
