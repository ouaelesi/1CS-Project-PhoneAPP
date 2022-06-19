import React, { useState } from "react";
import CheckBox from "expo-checkbox";

const CheckBOX = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <CheckBox
      disabled={false}
      value={toggleCheckBox}
      onValueChange={(newValue) => setToggleCheckBox(newValue)}
      onColor={{ true: "red", false: "black" }}
    />
  );
};

export default CheckBOX;
