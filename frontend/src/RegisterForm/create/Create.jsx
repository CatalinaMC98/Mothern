import React, { useState } from "react";

import CreatableSelect from "react-select/creatable";

const components = {
  DropdownIndicator: null,
};

const customStyles = {
  control: (styles) => ({
    ...styles,
    fontSize: 16,
    border: 0,
    borderBottom: "1px solid #626262",
    borderRadius: 0,
    boxShadow: "none",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      fontSize: 16,
    };
  },
};

const createOption = (label) => ({
  label,
  value: label,
});

export default function CreatableInputOnly() {
  const [state, setState] = useState({
    inputValue: "",
    value: [],
  });
  const handleChange = (value, actionMeta) => {
    console.group("Value Changed");
    console.groupEnd();
    setState({ ...state, value });
  };
  const handleInputChange = (inputValue) => {
    setState({ ...state, inputValue });
  };
  const handleKeyDown = (event) => {
    const { inputValue, value } = state;

    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        console.group("Value Added");
        console.groupEnd();
        setState({
          inputValue: "",
          value: [...value, createOption(inputValue)],
        });
        event.preventDefault();
    }
  };

  return (
    <CreatableSelect
      components={components}
      inputValue={state.inputValue}
      isClearable
      isMulti
      styles={customStyles}
      menuIsOpen={false}
      onChange={handleChange}
      onInputChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder="¿Cuáles?"
      value={state.value}
      style={{ fontSize: 16 }}
    />
  );
}
