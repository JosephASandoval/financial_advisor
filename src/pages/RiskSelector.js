import React from "react";
import HeaderLabels from "../components/HeaderLabels";
import ButtonContainer from "../components/ButtonContainer";
import Table from "../components/Table";

const RiskSelector = () => {
  return (
    <div className="risk-selector-container">
      <HeaderLabels />
      <ButtonContainer />
      <Table />
    </div>
  );
};

export default RiskSelector;
