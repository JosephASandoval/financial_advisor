import React, { useContext } from "react";
import { Context } from "../../Context";
import InputLabels from "./InputLabels";
import InputMain from "./InputMain";

const InputTable = () => {
  const { portfolio, selectedOption } = useContext(Context);
  const riskLevel = portfolio.filter((level) => level.risk === selectedOption);
  const [option] = riskLevel;

  return (
    <div className="risk-calculator-input-container">
      <InputLabels />
      <InputMain option={option} />
    </div>
  );
};

export default InputTable;
