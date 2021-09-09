import React, { useContext, useRef, useEffect } from "react";
import { Context } from "../../Context";

const InputMain = () => {
  const { currentAmount, setCurrentAmount, newAmount, difference } =
    useContext(Context);

  const bondsDiff = useRef();
  const largeCapDiff = useRef();
  const midCapDiff = useRef();
  const foreignDiff = useRef();
  const smallCapDiff = useRef();

  function handleCurrentAmount(e) {
    const { name, value } = e.target;
    setCurrentAmount((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    if (bondsDiff.current.value) {
      const { value } = bondsDiff.current;
      switch (value < 0) {
        case true:
          bondsDiff.current.className = "risk-calculator-main-diff-neg";
          break;
        case false:
          bondsDiff.current.className = "risk-calculator-main-diff-pos";
          bondsDiff.current.value = "+" + bondsDiff.current.value;
          break;
      }
    }
    if (largeCapDiff.current.value) {
      const { value } = largeCapDiff.current;
      switch (value < 0) {
        case true:
          largeCapDiff.current.className = "risk-calculator-main-diff-neg";
          break;
        case false:
          largeCapDiff.current.className = "risk-calculator-main-diff-pos";
          largeCapDiff.current.value = "+" + largeCapDiff.current.value;
          break;
      }
    }
    if (midCapDiff.current.value) {
      const { value } = midCapDiff.current;
      switch (value < 0) {
        case true:
          midCapDiff.current.className = "risk-calculator-main-diff-neg";
          break;
        case false:
          midCapDiff.current.className = "risk-calculator-main-diff-pos";
          midCapDiff.current.value = "+" + midCapDiff.current.value;
          break;
      }
    }
    if (foreignDiff.current.value) {
      const { value } = foreignDiff.current;
      switch (value < 0) {
        case true:
          foreignDiff.current.className = "risk-calculator-main-diff-neg";
          break;
        case false:
          foreignDiff.current.className = "risk-calculator-main-diff-pos";
          foreignDiff.current.value = "+" + foreignDiff.current.value;
          break;
      }
    }
    if (smallCapDiff.current.value) {
      const { value } = smallCapDiff.current;
      switch (value < 0) {
        case true:
          smallCapDiff.current.className = "risk-calculator-main-diff-neg";
          break;
        case false:
          smallCapDiff.current.className = "risk-calculator-main-diff-pos";
          smallCapDiff.current.value = "+" + smallCapDiff.current.value;
          break;
      }
    }
  });

  return (
    <div className="risk-calculator-main">
      <div className="risk-calculator-main-row">
        <label>Bonds $:</label>
        <div className="risk-calculator-main-row-box">
          <input
            type="text"
            name="bonds"
            value={currentAmount.bonds}
            onChange={handleCurrentAmount}
          />
          <input
            className=""
            ref={bondsDiff}
            type="text"
            name="bonds"
            value={difference.bonds}
            disabled
          />
          <input
            className="risk-calculator-main-new"
            type="text"
            name="bonds"
            value={newAmount.bonds}
            disabled
          />
        </div>
      </div>
      <div className="risk-calculator-main-row">
        <label>Large Cap $:</label>
        <div className="risk-calculator-main-row-box">
          <input
            type="text"
            name="largeCap"
            value={currentAmount.largeCap}
            onChange={handleCurrentAmount}
          />
          <input
            className=""
            ref={largeCapDiff}
            type="text"
            name="largeCap"
            value={difference.largeCap}
            disabled
          />
          <input
            className="risk-calculator-main-new"
            type="text"
            name="largeCap"
            value={newAmount.largeCap}
            disabled
          />
        </div>
      </div>
      <div className="risk-calculator-main-row">
        <label>Mid Cap $:</label>
        <div className="risk-calculator-main-row-box">
          <input
            type="text"
            name="midCap"
            value={currentAmount.midCap}
            onChange={handleCurrentAmount}
          />
          <input
            className=""
            ref={midCapDiff}
            type="text"
            name="midCap"
            value={difference.midCap}
            disabled
          />
          <input
            className="risk-calculator-main-new"
            type="text"
            name="midCap"
            value={newAmount.midCap}
            disabled
          />
        </div>
      </div>
      <div className="risk-calculator-main-row">
        <label>Foreign $:</label>
        <div className="risk-calculator-main-row-box">
          <input
            type="text"
            name="foreign"
            value={currentAmount.foreign}
            onChange={handleCurrentAmount}
          />
          <input
            className=""
            ref={foreignDiff}
            type="text"
            name="foreign"
            value={difference.foreign}
            disabled
          />
          <input
            className="risk-calculator-main-new"
            type="text"
            name="foreign"
            value={newAmount.foreign}
            disabled
          />
        </div>
      </div>
      <div className="risk-calculator-main-row">
        <label>Small Cap $:</label>
        <div className="risk-calculator-main-row-box">
          <input
            type="text"
            name="smallCap"
            value={currentAmount.smallCap}
            onChange={handleCurrentAmount}
          />
          <input
            className=""
            ref={smallCapDiff}
            type="text"
            name="smallCap"
            value={difference.smallCap}
            disabled
          />
          <input
            className="risk-calculator-main-new"
            type="text"
            name="smallCap"
            value={newAmount.smallCap}
            disabled
          />
        </div>
      </div>
      <div className="risk-calculator-transfers"></div>
    </div>
  );
};

export default InputMain;
