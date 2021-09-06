import React from "react";

const SelectedTableBody = ({ option }) => {
  return (
    <tbody>
      <tr className="table-row">
        <td>{`${option.bonds}%`}</td>
        <td>{`${option.largeCap}%`}</td>
        <td>{`${option.midCap}%`}</td>
        <td>{`${option.foreign}%`}</td>
        <td>{`${option.smallCap}%`}</td>
      </tr>
    </tbody>
  );
};

export default SelectedTableBody;
