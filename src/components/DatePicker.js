import { useContext } from "react";
import { SurveyContext } from "../SurveyContextProvider";

const DatePicker = () => {
  const { date, setDate } = useContext(SurveyContext);
  return (
    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
  );
};

export default DatePicker;
