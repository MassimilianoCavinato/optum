import { useContext } from "react";
import { SurveyContext } from "../SurveyContextProvider";

const MultipleChoice = ({ options }) => {
  const { choices, setChoices } = useContext(SurveyContext);
  const handleCheckBoxChange = (opt) => {
    choices.includes(opt)
      ? setChoices(choices.filter((c) => c !== opt))
      : setChoices([...choices, opt]);
  };
  return (
    <div>
      {options.map((opt, index) => {
        return (
          <span key={opt}>
            <input
              type="checkbox"
              key={index}
              name="choice"
              value={opt}
              checked={choices.includes(opt)}
              onChange={() => handleCheckBoxChange(opt)}
            />
            {opt}
          </span>
        );
      })}
    </div>
  );
};

export default MultipleChoice;
