import React,{useContext} from "react";
import { GlobalContext } from "../../Hooks/GlobalContext";
import styles from "./Forms.module.css";
import PersonalInfo from "./PersonalInfo";
import PlanSelection from "./PlanSelection";
import AddOns from "./AddOns";
import Summary from "./Summary";

const Form = () => {
  const { step } = useContext(GlobalContext);

  switch (step) {
    case 1:
      return (
        <section
          className={
            styles.formWrapper
          }
        >
          <PersonalInfo />
        </section>
      );

    case 2:
      return (
        <section
          className={
           styles.formWrapper
          }
        >
          <PlanSelection />
        </section>
      );

    case 3:
      return (
        <section
          className={
              styles.formWrapper
          }
        >
          <AddOns />
        </section>
      );

    case 4:
      return (
        <section
          className={
           styles.formWrapper
          }
        >
          <Summary />
        </section>
      );

    default:
      break;
  }
};

export default Form;
