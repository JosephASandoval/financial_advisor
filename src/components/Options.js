import React, { useContext, useState } from "react";
import { Context } from "../Context";
import Option from "./Option";

const Options = () => {
  const { portfolio } = useContext(Context);
  const [selectedOption, setSelectedOption] = useState({});

  const options = portfolio.map((option) => {
    return <Option key={option.id} option={option} />;
  });

  return (
    <div>
      {options}
    </div>
  );
};

export default Options;
