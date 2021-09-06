import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const Table = ({ portfolio }) => {
  const tableRows = portfolio.map((option) => {
    return <TableRow option={option} />;
  });

  return (
    <div id="graphic">
      <div id="jsGrid" className="jsgrid">
        <table className="jsgrid-table">
          <TableHead />
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
