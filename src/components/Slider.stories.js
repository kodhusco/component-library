import React from "react";
import { Slider } from "./Slider";

export default {
  title: "Components | Slider",
  parameters: {
    component: Slider,
    componentSubtitle: "Displays a Slider control"
  }
};

export const defaultSlider = () => (
  <div style={{ marginTop: 60, padding: 30 }}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <span>1</span>
      <Slider
        value={0}
        appreance="secondary"
        min={1}
        max={5}
        onChange={value => value}
      />
      <span>5</span>
    </div>
    {/* <div style={{ marginTop: 30 }}>
      <Slider
        range
        value={[0, 10]}
        appreance="secondary"
        max={20}
        onChange={value => console.log(value)}
      />
    </div> */}
  </div>
);

defaultSlider.story = {
  name: "Basic slider"
};
