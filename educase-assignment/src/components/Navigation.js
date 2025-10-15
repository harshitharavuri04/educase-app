import React from "react";
import "../styles/Navigation.css";

const Navigation = ({
  currentScreen,
  totalScreens,
  onNext,
  onPrev,
  onHome,
}) => {
  const showLeftArrow = currentScreen > 1;
  const showRightArrow = currentScreen < totalScreens;

  return (
    <div className="navigation">
      <button className="nav-btn home-btn" onClick={onHome} aria-label="Home">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </button>

      <button
        className={`nav-btn arrow-btn ${!showLeftArrow ? "disabled" : ""}`}
        onClick={onPrev}
        disabled={!showLeftArrow}
        aria-label="Previous"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <span className="page-indicator">
        {currentScreen} of {totalScreens}
      </span>

      <button
        className={`nav-btn arrow-btn ${!showRightArrow ? "disabled" : ""}`}
        onClick={onNext}
        disabled={!showRightArrow}
        aria-label="Next"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};

export default Navigation;
