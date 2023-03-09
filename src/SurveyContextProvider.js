import { createContext, useState } from "react";

export const SurveyContext = createContext(null);

export const SurveyContextProvider = ({ children }) => {
  const [choices, setChoices] = useState([]);
  const [slider, setSlider] = useState(0);
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [question_index, setQuestionIndex] = useState(0);
  const [show_summary, setShowSummary] = useState(false);
  const data = [
    {
      id: 1,
      type: "multiple choice",
      text: "Please choose from the available options",
      options: ["Item 1", "Item 2", "Item 3"],
    },
    {
      id: 2,
      type: "slider",
      text: "Please select a value below",
      maxValue: 100,
    },
    {
      id: 3,
      type: "date picker",
      text: "Please select a date below",
    },
    {
      id: 4,
      type: "free text",
      text: "Please enter some comments below",
    },
  ];

  return (
    <SurveyContext.Provider
      value={{
        question_index,
        setQuestionIndex,
        data,
        choices,
        setChoices,
        slider,
        setSlider,
        date,
        setDate,
        text,
        setText,
        show_summary,
        setShowSummary,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};
