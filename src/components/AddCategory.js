import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (inputValue.trim() === "") {
        return;
      }
      console.log("Enter key Pressed");
      setCategories((categories) => [inputValue.trim(), ...categories]);
      setInputValue("");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search a Gif..."
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
