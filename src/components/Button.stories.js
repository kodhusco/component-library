import React from "react";
import Button from "./Button";

export default {
  title: "Design System | Button",
  parameters: {
    component: Button,
    componentSubtitle:
      "Displays a primary button with custom page in your interface"
  }
};

export const primaryButton = () => (
  <div>
    <Button appearance="primary">Primary button</Button>
  </div>
);

primaryButton.story = {
  name: "Primary button"
};
