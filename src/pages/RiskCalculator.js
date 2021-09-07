import React from "react";
import Header from "../components/calculator/Header";
import Button from "../components/calculator/Button";
import InputTable from "../components/calculator/InputTable";

const RiskCalculator = () => {
  return (
    <div className="risk-calculator-container">
      <Header />
      <Button />
      <InputTable />
    </div>
  );
};

export default RiskCalculator;
