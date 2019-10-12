import React from "react";
import { AutoComplete } from "./AutoComplete";
import { Input } from "./Input";
import { Type } from "./Type";

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
      <Type as="h6" variant="light">
        Default Autocomplete
      </Type>
      <AutoComplete
        dataSource={["stockholm", "gothenburg", "source africa"]}
        onSelect={value => console.log(value)}
        skipFirst="3"
      />
    </div>
    <div style={{ marginTop: 30 }}>
      <Type as="h6" variant="light">
        Custom input Autocomplete
      </Type>
      <AutoComplete
        dataSource={["stockholm", "gothenburg", "source africa"]}
        onSelect={value => console.log(value)}
        skipFirst="1"
      >
        <Input
          placeholder="This is a custom input passed as a child to AutoComplete ..."
          style={{
            padding: 15,
            borderRadius: 5,
            width: "100%",
            fontSize: 20,
            outline: 0,
            border: "1px solid #ccc",
            boxSizing: "border-box",
            color: "#333"
          }}
        />
      </AutoComplete>
    </div>
  </div>
);

defaultAutoComplete.story = {
  name: "Basic autocomplete input box"
};
