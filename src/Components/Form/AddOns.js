import React,{useContext} from "react";
import FormHeader from "./FormHeader";
import styles from "./AddOns.module.css";
import Checkbox from "../../Helpers/Checkbox";
import { GlobalContext } from "../../Hooks/GlobalContext";
import Button from "../../Helpers/Button";
import { options } from "../../Helpers/data";


const AddOns = () => {
  const { addOns, setAddOns, step, setStep } = useContext(GlobalContext);

  return (
    <>
      <FormHeader
        title="Pick add-ons"
        info="Add-ons help enhance your gaming experience."
      />
      <Checkbox options={options} value={addOns} setValue={setAddOns} />
      <div className={styles.flexParent}>
        <div className={styles.buttonWrapper}>
          <Button
            onClick={() => setStep(step - 1)}
            id="back"
            buttonInfo="Go Back"
          />
          <Button
            onClick={() => {
              setStep(step + 1);
            }}
            id="next"
            buttonInfo="Next Step"
          />
        </div>
      </div>
    </>
  );
};

export default AddOns;
