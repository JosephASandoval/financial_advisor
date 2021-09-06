import React from "react";
import HeaderLabels from "../components/selector/HeaderLabels";
import ButtonContainer from "../components/selector/ButtonContainer";
import Table from "../components/selector/Table";

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
