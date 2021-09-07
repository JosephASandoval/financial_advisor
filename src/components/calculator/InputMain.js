import React from "react";

const InputMain = () => {
  return (
    <div className="risk-calculator-main">
      <div className="risk-calculator-main-row">
        <label>Bonds $:</label>
        <div className="risk-calculator-main-row-box">
          <input type="text" />
          <input type="text" disabled />
          <input type="text" disabled />
        </div>
      </div>
      <div className="risk-calculator-main-row">
        <label>Large Cap $:</label>
        <div className="risk-calculator-main-row-box">
          <input type="text" />
          <input type="text" disabled />
          <input type="text" disabled />
        </div>
      </div>
      <div className="risk-calculator-main-row">
        <label>Mid Cap $:</label>
        <div className="risk-calculator-main-row-box">
          <input type="text" />
          <input type="text" disabled />
          <input type="text" disabled />
        </div>
      </div>
      <div className="risk-calculator-main-row">
        <label>Foreign $:</label>
        <div className="risk-calculator-main-row-box">
          <input type="text" />
          <input type="text" disabled />
          <input type="text" disabled />
        </div>
      </div>
      <div className="risk-calculator-main-row">
        <label>Small Cap $:</label>
        <div className="risk-calculator-main-row-box">
          <input type="text" />
          <input type="text" disabled />
          <input type="text" disabled />
        </div>
      </div>
      <div className="risk-calculator-transfers"></div>
    </div>
  );
};

export default InputMain;
