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
      <span>0</span>
      <Slider
        value={0}
        appreance="secondary"
        min={0}
        max={6}
        step={2}
        onChange={value => console.log(value)}
      />
      <span>6</span>
    </div>
    <div style={{ marginTop: 30 }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>1000</span>
        <Slider
          range
          value={[1000, 20000]}
          appreance="secondary"
          min={1000}
          max={20000}
          step={1000}
          onChange={value => console.log(value)}
        />
        <span>20000</span>
      </div>
    </div>
  </div>
);

defaultSlider.story = {
  name: "Basic slider"
};
