import React from "react";
import { Placeholder } from "./Placeholder";

export default {
  title: "Components | Placeholder",
  parameters: {
    component: Placeholder,
    componentSubtitle: "Displays a content Placeholder"
  }
};

export const defaultPlaceholder = () => (
  <div>
    <div>
      <Placeholder withTitle="10" />
    </div>
    <div style={{ marginTop: 10 }}>
      <Placeholder withAvatar withContent="20" />
    </div>
  </div>
);

defaultPlaceholder.story = {
  name: "Basic placeholder"
};
