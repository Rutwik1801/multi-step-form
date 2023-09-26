import React,{useContext} from "react";
import logo from "../../Assets/logo192.png"
import FormHeader from "./FormHeader";
import styles from "./PlanSelection.module.css";
import { GlobalContext } from "../../Hooks/GlobalContext";
import Slider from "../../Helpers/Slider";
import Button from "../../Helpers/Button";
import { planOptions } from "../../Helpers/data";

const PlanSelection = () => {
  const { duration, setDuration, plan, setPlan, setStep, step } =
    useContext(GlobalContext);
  const isMonthly = duration[0] ? false : true;

  const handleClick = ({ currentTarget }) => {
    setPlan(currentTarget.id);
  }

  return (
    <>
      <FormHeader
        title="Select your plan"
        info="You have the option of monthly or yearly billing."
      />
      <div
        className={
        styles.planWrapper
        }
      >
        {planOptions.map((item) => {
          const isPlanSelected = plan.includes(Object.keys(item));
          return (
            <div
              className={
                isPlanSelected
                  ? `${styles.planItem} ${styles.active} `
                  : `${styles.planItem} `
              }
              onClick={handleClick}
              id={Object.keys(item)}
              key={Object.keys(item)}
            >
              <img src={logo} alt="" />
              <div>
                <h2>{Object.keys(item)}</h2>
                {isMonthly ? (
                  <p>${item[Object.keys(item)].monthPrice}/mo</p>
                ) : (
                  // <>
                    <p>${item[Object.keys(item)].yearPrice}/yr</p>
                  // </>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.durationWrapper}>
        <span className={isMonthly ? styles.active : ""}>Monthly</span>
        <Slider options={["Yearly"]} value={duration} setValue={setDuration} />
        <span className={isMonthly ? "" : styles.active}>Yearly</span>
      </div>
      <div className={styles.flexParent}>
        <div className={styles.buttonWrapper}>
          <Button
            onClick={() => setStep(step - 1)}
            id="back"
            buttonInfo="Go Back"
          />
          <Button
            onClick={() => {
              if (plan) setStep(step + 1);
            }}
            id="next"
            buttonInfo="Next Step"
          />
        </div>
      </div>
    </>
  );
};

export default PlanSelection;
