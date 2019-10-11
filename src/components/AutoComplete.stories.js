import React from "react";
import { AutoComplete } from "./AutoComplete";

export default {
  title: "Components | Autocomplete",
  parameters: {
    component: AutoComplete,
    componentSubtitle: "Displays an Input box"
  }
};

export const defaultAutoComplete = () => (
  <div>
    <div>
      <AutoComplete
        dataSource={["stockholm", "gothenburg", "source africa"]}
        onSelect={value => console.log(value)}
        skipFirst="1"
      />
    </div>
  </div>
);

defaultAutoComplete.story = {
  name: "Basic autocomplete input box"
};
