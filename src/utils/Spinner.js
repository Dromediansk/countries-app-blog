import React from "react";
import "./Spinner.css";

export const Spinner = () => {
  return (
    <div data-testid="loading-spinner" className="loader">
      Loading...
    </div>
  );
};
