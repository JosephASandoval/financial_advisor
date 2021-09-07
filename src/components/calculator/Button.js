import React from "react";

const Button = () => {
  let displayRebalance = true ? (
    <div className="button-activated">Rebalance</div>
  ) : (
    <div className="button-deactivated" onClick={(e) => e.preventDefault()}>
      Rebalance
    </div>
  );

  return (
    <div className="current-investment-container">
      Please Enter Your Current Portfolio
      {displayRebalance}
    </div>
  );
};

export default Button;
