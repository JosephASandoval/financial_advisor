import React, { useContext } from "react";
import { Context } from "../Context";
import HeaderLabels from "../components/HeaderLabels";
import ButtonContainer from "../components/ButtonContainer";
import Table from "../components/Table";

const RiskSelector = () => {
  const { portfolio } = useContext(Context);

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
      <HeaderLabels />
      <ButtonContainer options={options} />
      <Table portfolio={portfolio} />
    </div>
  );
};

export default RiskSelector;
