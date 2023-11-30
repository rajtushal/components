import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const [selectedValue, setSelectedValue] = useState(null);
  const handleSelection = (option) => {
    setSelectedValue(option.value);
  };
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "Blue" },
  ];
  return (
    <>
      <Dropdown
        options={options}
        value={selectedValue}
        onChange={handleSelection}
      />
      <Dropdown
        options={options}
        value={selectedValue}
        onChange={handleSelection}
      />
    </>
  );
}

export default DropdownPage;
