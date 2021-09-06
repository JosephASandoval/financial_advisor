import React, { useContext } from "react";
import { Context } from "../Context";
import HeaderLabels from "../components/HeaderLabels";
import ButtonContainer from "../components/ButtonContainer";
import Table from "../components/Table";

const RiskSelector = () => {
  const { portfolio } = useContext(Context);

  return (
    <div id="risk-selector-container">
      <HeaderLabels />
      <ButtonContainer />
      <Table portfolio={portfolio} />
    </div>
  );
};

export default RiskSelector;
