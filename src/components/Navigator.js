import { useContext } from "react";
import { SurveyContext } from "../SurveyContextProvider";

const Navigator = () => {
  const {
    data,
    question_index,
    setQuestionIndex,
    show_summary,
    setShowSummary,
  } = useContext(SurveyContext);

  const handlePreviousClick = () => setQuestionIndex(question_index - 1);
  const handleNextClick = () => setQuestionIndex(question_index + 1);
  const handleSummaryClick = () => setShowSummary(!show_summary);

  return (
    <div>
      {question_index > 0 ? (
        <button onClick={handlePreviousClick}>Previous</button>
      ) : (
        ""
      )}
      {question_index < data.length - 1 ? (
        <button onClick={handleNextClick}>Next</button>
      ) : (
        ""
      )}
      {question_index >= data.length - 1 ? (
        <button onClick={handleSummaryClick}>Summary</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navigator;
