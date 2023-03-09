import { createContext, useState } from "react";

export const SurveyContext = createContext();

export const SurveyContextProvider = ({ children }) => {
  const [choice, setChoice] = useState("");
  const [slider, setSlider] = useState("");
  const [date, setDate] = useState([]);
  const [text, setText] = useState([]);

  return (
    <SurveyContext.Provider
      value={{
        choice,
        setChoice,
        slider,
        setSlider,
        date,
        setDate,
        text,
        setText,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};
