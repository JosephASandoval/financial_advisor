import React from "react";

const ButtonContainer = ({options}) => {
  return (
    <div id="risk-selector-button-container">
      <div id="risk-selector">
        <ul className="risk-selector-ul">{options}</ul>
      </div>
      <div id="continue" className="button">
        Continue
      </div>
    </div>
  );
};

export default ButtonContainer;
