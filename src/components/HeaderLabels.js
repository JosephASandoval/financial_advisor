import React from "react";

const HeaderLabels = () => {
  return (
    <div className="risk-selector-header-labels">
      <div className="risk-label-select">
        Please Select A Risk Level For Your Investment Portfolio
      </div>
      <div className="risk-label-levels">
        <div className="risk-label">Low</div>
        <div className="risk-label">High</div>
      </div>
    </div>
  );
};

export default HeaderLabels;
