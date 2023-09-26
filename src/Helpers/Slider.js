import React from "react";

const Slider = ({ options, value, setValue }) => {


  const handleChange=(e)=> {
    if (e.target.checked) {
      setValue([...value, e.target.value]);
    } else {
      setValue(value.filter((item) => item !== e.target.value));
    }
  }

  return (
    <>
      {options.map((option) => (
        <label className="switch" htmlFor="toggle-button" key={option}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
            id="toggle-button"
            name="toggle-button"
          />
          <span className="slider"></span>
        </label>
      ))}
    </>
  );
};
export default Slider;
