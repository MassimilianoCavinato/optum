import { useContext } from "react";
import { SurveyContext } from "../SurveyContextProvider";
const Summary = () => {
  const { choices, slider, date, text } = useContext(SurveyContext);
  return (
    <div>
      <h1>Summary</h1>
      <div>CHOICES: {choices.join(",")}</div>
      <div>SLIDER: {slider}</div>
      <div>DATE: {date}</div>
      <div>TEXT: {text}</div>
    </div>
  );
};

export default Summary;
