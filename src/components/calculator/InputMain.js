import React, { useContext } from "react";
import { Context } from "../../Context";

const InputMain = () => {
  const { currentAmount, setCurrentAmount, newAmount } = useContext(Context);

  function handleCurrentAmount(e) {
    const { name, value } = e.target;
    setCurrentAmount((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

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
            type="text"
            name="bonds"
            // value={difference}
            disabled
          />
          <input type="text" name="bonds" value={newAmount.bonds} disabled />
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
            type="text"
            name="largeCap"
            // value={difference}
            disabled
          />
          <input
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
            type="text"
            name="midCap"
            // value={difference}
            disabled
          />
          <input type="text" name="midCap" value={newAmount.midCap} disabled />
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
            type="text"
            name="foreign"
            // value={difference}
            disabled
          />
          <input
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
            type="text"
            name="smallCap"
            // value={difference}
            disabled
          />
          <input
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
