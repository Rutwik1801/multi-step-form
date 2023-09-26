import React from "react";
import { GlobalContext } from "../Hooks/GlobalContext";
import styles from "./Checkbox.module.css";

const Checkbox = ({ options, value, setValue }) => {
  const { duration } = React.useContext(GlobalContext);

  const handleChange=(e)=> {
    if (e.target.checked) {
      setValue([...value, e.target.value]);
    } else {
      setValue(value.filter((item) => item !== e.target.value));
    }
  }

  return (
    <>
      {options.map((option, index) => {
        const isChecked = value.includes(option.name);
        return (
          <label
            key={option.name}
            htmlFor={index}
            className={
              isChecked
                ? `${styles.checkboxWrapper} ${styles.active}`
                : styles.checkboxWrapper
            }
          >
            <input
              id={index}
              type="checkbox"
              value={option.name}
              checked={isChecked}
              onChange={handleChange}
            />
            <div>
              <h2>{option.name}</h2>
              <p>{option.description}</p>
            </div>
            <span>
              {duration.length
                ? `+$${option.pricePerYear}/yr`
                : `+$${option.pricePerMonth}/mo`}
            </span>
          </label>
        );
      })}
    </>
  );
};
export default Checkbox;
