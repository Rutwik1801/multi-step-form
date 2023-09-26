import React from "react";
import { GlobalContext } from "../../Hooks/GlobalContext";
import styles from "./SidebarItem.module.css";


const SidebarItem = ({ index, stepInfo }) => {
  const { step,setStep } = React.useContext(GlobalContext);



  const active=(step, index)=> {
    if (step === index) return true;
  }
  const isActive = active(step, index);
 const handleClick=(e)=>{

  setStep(parseInt(e.target.innerHTML))

 }
  return (
    <div
      className={
      styles.itemWrapper
      }
      onClick={handleClick}
    >
      <span
        className={isActive ? `${styles.index} ${styles.active}` : styles.index}
      >
        {index}
      </span>
      <div className={styles.stepWrapper} >
        <span className={styles.stepTitle}>{`Step ${index}`}</span>
        <span className={styles.stepInfo}>{ stepInfo}</span>
      </div>
    </div>
  );
};

export default SidebarItem;
