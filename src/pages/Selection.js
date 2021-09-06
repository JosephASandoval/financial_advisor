import React, { useContext, useState } from "react";
import { Context } from "../Context";

const Selection = () => {
  const { portfolio } = useContext(Context);
  // const [selectedOption, setSelectedOption] = useState({});

  function handleClick(risk) {
    console.log(`option ${risk} was clicked!`);
  }

  const options = portfolio.map((option) => {
    return (
      <li key={option.id} onClick={() => handleClick(option.risk)}>
        {option.risk}
      </li>
    );
  });

  return (
    <div id="risk-selector-container">
      <div className="risk-selector-header-labels">
        <div className="risk-label-select">
          Please Select A Risk Level For Your Investment Portfolio
        </div>
        <div className="risk-label-levels">
          <div className="risk-label">Low</div>
          <div className="risk-label">High</div>
        </div>
      </div>

      <div id="risk-selector-button-container">
        <div id="risk-selector">
          <ul className="risk-selector-ul">{options}</ul>
        </div>
        <div id="continue" className="button">
          Continue
        </div>
      </div>

      <div id="graphic">graphic</div>
    </div>
  );
};

export default Selection;
