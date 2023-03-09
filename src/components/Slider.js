import { useContext } from "react";
import { SurveyContext } from "../SurveyContextProvider";

const Slider = () => {
  const { slider, setSlider } = useContext(SurveyContext);
  return (
    <input
      type="range"
      min={0}
      max={100}
      value={slider}
      onChange={(e) => setSlider(e.target.value)}
    />
  );
};

export default Slider;
