import React from "react";

const Option = (props) => {
  const { risk, bonds, largeCap, midCap, foreign, smallCap } = props.option;

  function handleClick() {
    console.log(`option ${risk} was clicked!`);
  }

  return (
    <div>
      <button onClick={handleClick}>{risk}</button>
    </div>
  );
};

export default Option;
