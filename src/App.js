import { useEffect, useState } from "react";
import "./App.css";
import Survey from "./components/Survey";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        id: 1,
        type: "multiple choice",
        text: "Please choose from the available options",
        options: ["Item 1", "Item 2", "Item 3"],
      },
      {
        id: 2,
        type: "slider",
        text: "Please select a value below",
        maxValue: 100,
      },
      {
        id: 3,
        type: "date picker",
        text: "Please select a date below",
      },
      {
        id: 4,
        type: "free text",
        text: "Please enter some comments below",
      },
    ]);
  }, []);

  return <Survey questions={data} />;
};

export default App;
