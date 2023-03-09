import { useContext } from "react";
import { SurveyContext } from "../SurveyContextProvider";
const FreeText = () => {
  const { text, setText } = useContext(SurveyContext);
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default FreeText;
