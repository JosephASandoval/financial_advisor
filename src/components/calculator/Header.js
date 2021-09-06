import React, { useContext } from "react";
import { Context } from "../../Context";
import SelectedTableHead from "./SelectedTableHead";
import SelectedTableBody from "./SelectedTableBody";

const Header = () => {
  const { portfolio, selectedOption } = useContext(Context);
  const riskLevel = portfolio.filter((level) => level.risk === selectedOption);
  const [option] = riskLevel;

  return (
    <>
      <div className="risk-calculator-label">Personalized Portfolio</div>
      <div className="risk-calculator-label-container">
        <div className="risk-calculator-label-risk">
          {`Risk Level ${option.risk}`}
        </div>
        <div className="graphic">
          <div className="table">
            <table>
              <SelectedTableHead />
              <SelectedTableBody option={option} />
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
