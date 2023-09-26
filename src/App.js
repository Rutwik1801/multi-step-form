import React from "react";
import { BrowserRouter } from "react-router-dom";
import { FormDataProvider } from "./Hooks/GlobalContext";
import FormComonent from "./Components/FormComonent";

const App = () => {
  return (
    <BrowserRouter>
      <FormDataProvider>
        <FormComonent />
      </FormDataProvider>
    </BrowserRouter>
  );
};

export default App;
