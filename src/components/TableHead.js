import React from "react";

const TableHead = () => {
  return (
    <thead>
      <tr className="table-head">
        <th className="risk">Risk</th>
        <th>Bonds %</th>
        <th>Large Cap %</th>
        <th>Mid Cap %</th>
        <th>Foreign %</th>
        <th>Small Cap %</th>
      </tr>
    </thead>
  );
};

export default TableHead;
