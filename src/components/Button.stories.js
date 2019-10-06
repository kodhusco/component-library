import React from "react";
import Button from "./Button";

export default {
  title: "Design System | Button",
  component: Button
};

export const primaryButton = () => (
  <div>
    <Button appearance="primary">Primary button</Button>
  </div>
);

primaryButton.story = {
  name: "Primary button"
};
