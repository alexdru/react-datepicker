import React from "react";
import "./App.scss";
import DatePicker from "./components/DatePicker";

function App() {
  return (
    <div className="App">
      <DatePicker />
      <DatePicker disabled />
      <DatePicker invalid />
    </div>
  );
}

export default App;
