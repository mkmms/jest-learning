import React, { useState, useEffect } from "react";
import axios from "axios";
import ScoopOptions from "./ScoopOptions";
import ToppingOptions from "./ToppingOptions";
import AlertBanner from "../common/AlertBanner";

const Options = ({ optionType }) => {
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setOptions(res.data))
      .catch((err) => setError(true));
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  const ItemComponent = optionType === "scoops" ? ScoopOptions : ToppingOptions;
  const OptionComponent = options.map((option) => {
    return (
      <ItemComponent
        key={option.name}
        name={option.name}
        imagePath={option.imagePath}
      />
    );
  });

  return <div className="row">{OptionComponent}</div>;
};

export default Options;
