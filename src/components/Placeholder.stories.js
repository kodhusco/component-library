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
      First with hero
      <Placeholder withHero />
    </div>
    <div>
      Second with TItle 10
      <Placeholder withTitle="10" />
    </div>
    <div style={{ marginTop: 10 }}>
      <Placeholder withAvatar withContent="20" withHero={false} />
    </div>
    <div style={{ marginTop: 10 }}>
      <Placeholder withAvatar withContent={{ rows: 6, width: 90 }} />
    </div>
  </div>
);

defaultPlaceholder.story = {
  name: "Basic placeholder"
};
