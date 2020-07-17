import React, { useState, useContext } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Tooltip from "react-tooltip";
import { grey, red, blue } from "color-name";

const { createSliderWithTooltip } = Slider;
const OurRange = createSliderWithTooltip(Slider.Range);
const style = { width: 500, marginTop: 50, marginLeft: 0 };
const style2 = {
  marginTop: 30,
  marginBottom: 20,
  marginLeft: 20,
  marginRight: 20,
  verticalAlign: "top",
  fontSize: 30,
  color: "grey"
};

function OurSlider(props) {
  //functions to update our state value (using the input bar)
  function onLowerBoundChange(e) {
    e.preventDefault();
    props.setLowerBound(e.target.value);
    console.log("lower bound changed");
  }

  function onUpperBoundChange(e) {
    e.preventDefault();
    props.setUpperBound(e.target.value);
    console.log("upper bound changed");
  }
  //function to update our state value (using the range slider)
  function handleChange(value) {
    props.setLowerBound(value[0]);
    props.setUpperBound(value[1]);
  }

  return (
    <div className="container">
      <h4 style={{ marginTop: 30 }}>
        Use the slider to customize the range of years for which you wish to
        view the S&P returns. Alternatively, adjust the years in the appropriate
        boxes.
      </h4>
      <div className="row justify-content-end">
        <span style={style2}>1926</span>

        {/* range slider */}
        <OurRange
          className="text-right"
          defaultValue={[props.lowerBound, props.upperBound]}
          value={[props.lowerBound, props.upperBound]}
          min={1926}
          max={2018}
          onChange={handleChange}
          allowCross={false}
          {...props}
          style={style}
        />
        <span style={style2}>2018</span>
        <div>
          <div className="row" style={{ marginBottom: 10, marginTop: 20 }}>
            <label className="col-2 mt-1">From:</label>
            <div className="col-7">
              <input
                className="form-control form-control-sm "
                type="number"
                value={props.lowerBound}
                onChange={onLowerBoundChange}
              />
            </div>
          </div>

          <div className="row">
            <label className="col-2 mt-1">Until:</label>
            <div className="col-7">
              <input
                className="form-control form-control-sm "
                type="number"
                value={props.upperBound}
                onChange={onUpperBoundChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurSlider;
