import React from "react";

const Input = ({
  id,
  label,
  value,
  type,
  onChange,
  onBlur,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={id}>
        {label} 
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
