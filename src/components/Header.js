import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="headerBackground">
      <div className="wrapper">
        <div className="link">
          <NavLink to="/">Luco TV</NavLink>
        </div>
        <div className="link">
          <NavLink to="/added">Added Movies</NavLink>
        </div>
      </div>
    </div>
  );
};
