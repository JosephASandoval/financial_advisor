import React, { useContext } from "react";
import { Context } from "../Context";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const Table = () => {
  const { portfolio, selectedOption } = useContext(Context);

  const tableRows = portfolio.map((option) => {
    return (
      <TableRow
        key={option.id}
        option={option}
        selectedOption={selectedOption}
      />
    );
  });

  return (
    <div className="graphic">
      <div className="table">
        <table>
          <TableHead />
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
