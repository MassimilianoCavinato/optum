import { useContext } from "react";
import { SurveyContext } from "../SurveyContextProvider";

const Slider = ({ max_value }) => {
  const { slider, setSlider } = useContext(SurveyContext);
  return (
    <input
      type="range"
      min={0}
      max={max_value}
      value={slider}
      onChange={(e) => setSlider(e.target.value)}
    />
  );
};

export default Slider;
