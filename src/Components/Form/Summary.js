import React,{useContext} from "react";
import FormHeader from "./FormHeader";
import { GlobalContext } from "../../Hooks/GlobalContext";
import { planOptions } from "../../Helpers/data";
import { options} from "../../Helpers/data"
import styles from "./Summary.module.css";
import Button from "../../Helpers/Button";

const Summary = () => {
  const { plan, duration, setDuration, addOns, step, setStep,setAddOns,setPlan,setFormData } = useContext(GlobalContext);

  const planFiltered = planOptions.filter((i) =>
    Object.keys(i).includes(plan)
  )[0][plan];

  const addOnsFiltered = options.filter((i) => addOns.includes(i.name));
  
const handleClick = () => {
    if (duration.length) {
      setDuration([]);
    } else {
      setDuration(["Yearly"]);
    }
  }

  const handleResetClick=()=>{
    alert("Form Submitted Successfully")
    setStep(1);
    setAddOns([])
    setDuration("")
    setPlan("Arcade")
    setFormData({
      name:"",
      email:"",
      phone:""
    })
  }


  const addOnsSum = addOnsFiltered.reduce((a, b) => {
    if (duration.length) {
      return a + b.pricePerYear;
    } else {
      return a + b.pricePerMonth;
    }
  }, 0);

  return (
    <>
      <FormHeader
        title="Finishing up"
        info="Double check everything looks OK before confirming."
      />
      <div className={styles.summaryWrapper}>
        <div className={styles.planPriceWrapper}>
          <div>
            <h2>
              {plan} {duration.length ? "(Yearly)" : "(Monthly)"}
            </h2>
            <button onClick={handleClick}>Change</button>
          </div>
          <span className={styles.planPrice}>
            {duration.length
              ? `$${planFiltered.yearPrice}/yr`
              : `$${planFiltered.monthPrice}/mo`}
          </span>
        </div>
        {addOns.length ? (
          <div className={styles.addOnsWrapper}>
            {addOnsFiltered.map((item) => (
              <div key={item.name} className={styles.addOnsItemWrapper}>
                <p>{item.name}</p>
                <span>
                  {duration.length
                    ? `+$${item.pricePerYear}/yr`
                    : `+$${item.pricePerMonth}/mo`}
                </span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className={styles.finalPriceWrapper}>
        <p>Total {duration.length ? "(per year)" : "(per month)"} </p>
        <span>
          {duration.length
            ? `$${addOnsSum + planFiltered.yearPrice}/yr`
            : `$${addOnsSum + planFiltered.monthPrice}/mo`}
        </span>
      </div>
      <div className={styles.flexParent}>
        <div className={styles.buttonWrapper}>
          <Button
            onClick={() => setStep(step - 1)}
            id="back"
            buttonInfo="Go Back"
          />
          <Button
            onClick={handleResetClick}
            id="next"
            buttonInfo="Finish"
          />
        </div>
      </div>
    </>
  );
};

export default Summary;
