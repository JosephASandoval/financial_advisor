import React, { useContext } from "react";
import { Context } from "../../Context";
import { Link } from "react-router-dom";

const ButtonContainer = () => {
  const { portfolio, selectedOption, setSelectedOption } = useContext(Context);
  let handleHover = selectedOption !== 0 ? "-disable" : "";
  let displayContinue =
    selectedOption !== 0 ? (
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
      {displayContinue}
    </div>
  );
};

export default ButtonContainer;
