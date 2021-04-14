import React from "react";

const ControlPanel = ({ query, onChange, nextPage, prevPage }) => {
  return (
    <div className="controlPanel">
      <button onClick={prevPage}>Prev Page</button>
      <input
        placeholder="  Search..."
        value={query}
        type="text"
        onChange={onChange}
      />
      <button onClick={nextPage}>Next Page</button>
    </div>
  );
};

export default ControlPanel;
