import React,{useState,createContext} from "react";

export const GlobalContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [plan, setPlan] = useState("Arcade");
  const [duration, setDuration] = useState("");
  const [addOns, setAddOns] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        step,
        setStep,
        formData,
        setFormData,
        duration,
        setDuration,
        plan,
        setPlan,
        addOns,
        setAddOns,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
