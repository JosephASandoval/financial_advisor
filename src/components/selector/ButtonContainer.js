import React, { useContext } from "react";
import { Context } from "../../Context";
import { Link } from "react-router-dom";

const ButtonContainer = () => {
  const { portfolio, selectedOption, setSelectedOption } = useContext(Context);
  let handleHover = selectedOption.risk !== 0 ? "-disable" : "";
  let displayContinue =
    selectedOption.risk !== 0 ? (
      <Link to="/calculator" className="button-link">
        <div className="button-activated">Continue</div>
      </Link>
    ) : (
      <Link
        to="/calculator"
        className="button-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="button-deactivated">Continue</div>
      </Link>
    );

  const options = portfolio.map((option) => {
    let displayOption =
      option.risk === selectedOption.risk
        ? "option-selected"
        : `option-unselected${handleHover}`;

    return (
      <li
        key={option.risk}
        className={displayOption}
        onClick={() => setSelectedOption(option)}
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
      {displayContinue}
    </div>
  );
};

export default ButtonContainer;
