import { useContext } from "react";
import { SurveyContext } from "../SurveyContextProvider";
const MultipleChoice = ({ options }) => {
  const { choice, setChoice } = useContext(SurveyContext);
  return (
    <div>
      {options.map((opt, index) => {
        return (
          <>
            <input type="radio" key={index} name="choice" />
            {opt}
          </>
        );
      })}
    </div>
  );
};

export default MultipleChoice;
