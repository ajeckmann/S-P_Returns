import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import OurSlider from "./components/OurSlider";
import { allReturns } from "./Data";
import Table from "./components/Table";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  //store the bounds in state
  const [lowerBound, setLowerBound] = useState(1970);
  const [upperBound, setUpperBound] = useState(2018);

  //to properly sort the data in ascending order
  allReturns.sort((x, y) => (x.year > y.year ? 1 : -1));

  //to properly filter returns from the lowerBound year to the upperBound year
  const filteredReturns = allReturns.filter(
    element => element.year >= lowerBound && element.year <= upperBound
  );

  return (
    <div className="App">
      <NavBar />
      <div className="container-fluid">
        <OurSlider
          lowerBound={lowerBound}
          upperBound={upperBound}
          setLowerBound={setLowerBound}
          setUpperBound={setUpperBound}
        />

        <div className="col text-right">
          <Table
            //pass in the data to the table
            data={filteredReturns}
            //pass in the bounds, and their set properties
            lowerBound={lowerBound}
            upperBound={upperBound}
            setLowerBound={setLowerBound}
            setUpperBound={setUpperBound}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
