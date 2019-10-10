import React from "react";
import { Button, ButtonGroup } from "./Button";

export default {
  title: "Components | Button",
  parameters: {
    component: Button,
    componentSubtitle:
      "Displays a primary button with custom page in your interface"
  }
};

export const primaryButton = () => (
  <div>
    <div style={{ marginTop: 10 }}>
      <Button appearance="primary">Primary button</Button>
    </div>
    <div style={{ marginTop: 10 }}>
      <Button appearance="primaryOutline">Primary outline button</Button>
    </div>
    <div style={{ marginTop: 10 }}>
      <Button appearance="secondary">Secondary button</Button>
    </div>
    <div style={{ marginTop: 10 }}>
      <Button appearance="secondaryOutline">Secondary outline button</Button>
    </div>
    <div style={{ marginTop: 10 }}>
      <Button appearance="tertiary">Tertiary button</Button>
    </div>
    <div style={{ marginTop: 10 }}>
      <Button appearance="outline">Outline button</Button>
    </div>
  </div>
);

primaryButton.story = {
  name: "Primary button"
};

export const buttonGroup = () => (
  <div>
    <ButtonGroup>
      <Button appearance="outline">Small</Button>
      <Button appearance="outline">Medium</Button>
      <Button appearance="outline">Large</Button>
    </ButtonGroup>
  </div>
);

buttonGroup.story = {
  name: "Button group"
};
