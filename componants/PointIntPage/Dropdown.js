import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: "Choix 1",
      value: "Choix 1",
    },
    {
      label: "Choix 2",
      value: "Choix 2",
    },
    {
      label: "Choix 3",
      value: "Choix 3",
    },
  ]);

  return (
    <DropDownPicker
      zIndex={6000}
      stickyHeader={true}
      style={{
        zIndex: 60,
        borderColor: "#E17E01",
        borderRadius: 20,
        width: "100%",
        height : 45 , 
      }}
      placeholder="Tous"
      placeholderStyle={{
        color: "#B3B1B1",
        fontWeight: "500",
      }}
      showArrowIcon={true}
      arrowIconStyle={{
        color: "#B3B1B1",
      }}
      dropDownDirection="BOTTOM"
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      dropDownContainerStyle={{
        backgroundColor: "#fdfdfd",
        borderRadius: 0,
        borderColor: "#E17E01",
        zIndex: 60,
        // position: "relative"
      }}
      containerStyle={{
        zIndex: 60,
        // position: "relative"
      }}
    />
  );
};

export default Dropdown;
