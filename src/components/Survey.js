import { useContext } from "react";
import { SurveyContext } from "../SurveyContextProvider";
import Question from "./Question";
import Navigator from "./Navigator";
import Summary from "./Summary";

const Survey = () => {
  const { data, question_index, show_summary } = useContext(SurveyContext);

  return (
    <>
      <Question question={data[question_index]} />
      <Navigator />
      {show_summary ? <Summary /> : ""}
    </>
  );
};

export default Survey;
