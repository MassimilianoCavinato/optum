import { useState } from "react";
import Question from "./Question";

const Survey = ({ questions }) => {
  const [question_index, setQuestionIndex] = useState(0);

  const renderNavigator = () => {
    if (question_index === 0) {
      return (
        <div>
          <button
            onClick={(e) => {
              setQuestionIndex(question_index + 1);
            }}
          >
            Next
          </button>
        </div>
      );
    } else if (question_index >= questions.length - 1) {
      return (
        <div>
          <button
            onClick={(e) => {
              setQuestionIndex(question_index - 1);
            }}
          >
            Previous
          </button>
          <button
            onClick={(e) => {
              console.log("todo");
            }}
          >
            Summary
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            onClick={(e) => {
              setQuestionIndex(question_index - 1);
            }}
          >
            Previous
          </button>
          <button
            onClick={(e) => {
              setQuestionIndex(question_index + 1);
            }}
          >
            Next
          </button>
        </div>
      );
    }
  };

  return (
    <>
      <Question question={questions[question_index]} />
      {renderNavigator()}
    </>
  );
};

export default Survey;
