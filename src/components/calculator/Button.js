import React, { useContext } from "react";
import { Context } from "../../Context";

const Button = () => {
  const { currentAmount, setNewAmount, selectedOption } = useContext(Context);

  let isCurrentAmountEntered = Object.values(currentAmount).every(
    (value) => value.length > 0
  );

  let displayRebalance = isCurrentAmountEntered ? (
    <div className="button-activated" onClick={handleRebalance}>
      Rebalance
    </div>
  ) : (
    <div className="button-deactivated" onClick={(e) => e.preventDefault()}>
      Rebalance
    </div>
  );

  let totalAmount = 0;
  if (isCurrentAmountEntered) {
    let values = Object.values(currentAmount);
    for (const value of values) {
      totalAmount += parseFloat(value);
    }
  }

  // add left over to foreign //
  const initalNewAmount = {
    bonds: Math.floor(totalAmount * selectedOption.bonds) / 100,
    largeCap: Math.floor(totalAmount * selectedOption.largeCap) / 100,
    midCap: Math.floor(totalAmount * selectedOption.midCap) / 100,
    foreign: Math.floor(totalAmount * selectedOption.foreign) / 100,
    smallCap: Math.floor(totalAmount * selectedOption.smallCap) / 100,
  };

  let initalTotal = 0;
  let arr = Object.values(initalNewAmount);
  for (const el of arr) {
    initalTotal += el;
  }

  let additionalForeign = totalAmount - initalTotal;
  // add left over to foreign //

  function handleRebalance() {
    setNewAmount({
      bonds: initalNewAmount.bonds,
      largeCap: initalNewAmount.largeCap,
      midCap: initalNewAmount.midCap,
      foreign:
        Math.round((initalNewAmount.foreign + additionalForeign) * 100) / 100,
      smallCap: initalNewAmount.smallCap,
    });
  }

  return (
    <div className="current-investment-container">
      Please Enter Your Current Portfolio
      {displayRebalance}
    </div>
  );
};

export default Button;
