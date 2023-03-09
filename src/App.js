import "./App.css";
import Survey from "./components/Survey";
import { SurveyContextProvider } from "./SurveyContextProvider";

const App = () => {
  return (
    <SurveyContextProvider>
      <Survey />
    </SurveyContextProvider>
  );
};

export default App;
