import React, { useState } from "react";
import { useImmerReducer } from "use-immer";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import OurSlider from "./components/OurSlider";
import { allReturns } from "./Data";
import Table from "./components/Table";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [sliderValue, setSliderValue] = useState([1970, 2018]);
  function tempReducer(draftState, action) {
    switch (action.type) {
      case "alterValue":
        draftState.value = action.value;

        return;
    }
  }

  //now let's properly sort the data
  allReturns.sort((x, y) => (x.year > y.year ? 1 : -1));
  const filteredReturns = allReturns.filter(
    element => element.year >= sliderValue[0] && element.year <= sliderValue[1]
  );

  return (
    <div className="App">
      <NavBar />
      <div className="container-fluid">
        <OurSlider setSliderValue={setSliderValue} sliderValue={sliderValue} />

        <div className="col text-right">
          <Table data={filteredReturns} sliderValue={sliderValue} />
        </div>
        <div className="col text-left"></div>
      </div>
    </div>
  );
}

export default App;
