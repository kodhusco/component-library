import React from "react";
import { Checkbox } from "./Checkbox";

export default {
  title: "Components | Checkbox",
  parameters: {
    component: Checkbox,
    componentSubtitle: "Displays an Input box"
  }
};

export const defaultCheckbox = () => (
  <div>
    <Checkbox>Do you agree with our terms and services?</Checkbox>
  </div>
);

defaultCheckbox.story = {
  name: "Basic checkbox"
};
