import React, { useContext } from "react";
import { Context } from "../Context";

const ButtonContainer = () => {
  const { portfolio, selectedOption, setSelectedOption } = useContext(Context);
  let handleHover = selectedOption !== 0 ? "-disable" : "";
  let displayContinue =
    selectedOption !== 0 ? "button-selected" : "button-unselected";

  const options = portfolio.map((option) => {
    let displayOption =
      option.risk === selectedOption
        ? "option-selected"
        : `option-unselected${handleHover}`;
        
    return (
      <li
        key={option.id}
        className={displayOption}
        onClick={() => setSelectedOption(option.risk)}
      >
        {option.risk}
      </li>
    );
  });

  return (
    <div className="risk-selector-button-container">
      <div className="risk-selector">
        <ul>{options}</ul>
      </div>
      <div className={displayContinue}>Continue</div>
    </div>
  );
};

export default ButtonContainer;
