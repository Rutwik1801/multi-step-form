import React,{useContext} from "react";
import FormHeader from "./FormHeader";
import styles from "./PersonalInfo.module.css";
import Input from "../../Helpers/Input";
import Button from "../../Helpers/Button";
import { GlobalContext } from "../../Hooks/GlobalContext";

const PersonalInfo = () => {
  const { step, setStep,formData,setFormData } = useContext(GlobalContext);


    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
      setStep(step + 1);
  }

  return (
    <>
      <FormHeader
        title="Personal Info"
        info="Please provide your name, email address, and phone number."
      />
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          id="name"
          label="Name"
          placeholder="e.g. Martin Scorsese"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          id="email"
          label="Email Address"
          placeholder="e.g. scorsesemarty@lorem.com"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="phone"
          id="phone"
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          value={formData.phone}
          onChange={handleChange}
        />
        <div className={styles.flexParent}>
          <div className={styles.buttonWrapper}>
            <Button id="next" buttonInfo="Next Step" />
          </div>
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
