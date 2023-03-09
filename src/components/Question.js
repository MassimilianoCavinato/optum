import DatePicker from "./DatePicker";
import FreeText from "./FreeText";
import MultipleChoice from "./MultipleChoice";
import Slider from "./Slider";

const Question = ({ question }) => {
  console.log(question);
  const renderInput = () => {
    switch (question.type) {
      case "multiple choice":
        return <MultipleChoice options={question.options} />;
        break;
      case "slider":
        return <Slider min={0} max={question.maxValue} />;
        break;
      case "date picker":
        return <DatePicker />;
        break;
      case "free text":
        return <FreeText />;
        break;
      default:
        return null;
    }
  };
  return (
    <div>
      <h3>{question.text}</h3>
      {renderInput()}
    </div>
  );
};

export default Question;
