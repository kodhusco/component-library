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
    <div style={{ marginTop: 4 }}>
      Placeholder with hero
      <Placeholder withHero loading={true} />
    </div>
    <div style={{ marginTop: 30 }}>
      Placeholder with TItle 10% width
      <Placeholder withTitle="10" loading={true} />
    </div>
    <div style={{ marginTop: 30 }}>
      Placeholder with Avatar and content
      <Placeholder withAvatar withContent="20" loading={true} />
    </div>
    <div style={{ marginTop: 30 }}>
      Placeholder with Avatar and 6 rows
      <Placeholder
        withAvatar
        withContent={{ rows: 6, width: 90 }}
        loading={true}
      />
    </div>
  </div>
);

defaultPlaceholder.story = {
  name: "Basic placeholder"
};
