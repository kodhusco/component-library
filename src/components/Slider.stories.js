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
        value={1}
        appreance="secondary"
        min={1}
        max={5}
        onChange={value => console.log(value)}
      />
      <span>5</span>
    </div>
    <div style={{ marginTop: 30 }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>10</span>
        <Slider
          range
          value={[10, 30]}
          appreance="secondary"
          min={10}
          max={100}
          onChange={value => console.log(value)}
        />
        <span>100</span>
      </div>
    </div>
  </div>
);

defaultSlider.story = {
  name: "Basic slider"
};
