import React from "react";

const TableRow = ({ option }) => {
  return (
    <tr>
      <td>{option.risk}</td>
      <td>{option.bonds}</td>
      <td>{option.largeCap}</td>
      <td>{option.midCap}</td>
      <td>{option.foreign}</td>
      <td>{option.smallCap}</td>
    </tr>
  );
};

export default TableRow;
