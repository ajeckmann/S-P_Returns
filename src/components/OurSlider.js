import React, { useState, useContext } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";
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
const { Handle } = Slider;

const handle = props => {
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={props.value}
      placement="bottom"
      key={props.index}
    >
      <Handle value={props.value} {...props} />
    </Tooltip>
  );
};
function OurSlider(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  function handleChange(value) {
    // appDispatch({ type: "alterValue", value: value });
    props.setSliderValue(value);
  }

  return (
    <div className="container">
      <h4 style={{ marginTop: 30 }}>
        Use the slider to customize the range of years for which you wish to
        view the S&P returns.
      </h4>
      <div className="row justify-content-center">
        <span style={style2}>1926</span>
        <OurRange
          className="text-right"
          handle={handle}
          defaultValue={[1970, 2018]}
          min={1926}
          max={2018}
          onAfterChange={handleChange}
          allowCross={false}
          {...props}
          style={style}
        />
        <span style={style2}>2018</span>
      </div>
    </div>
  );
}

export default OurSlider;
