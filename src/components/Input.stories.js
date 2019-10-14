import React from "react";
import { Input, Search } from "./Input";

export default {
  title: "Components | Input",
  parameters: {
    component: Input,
    componentSubtitle: "Displays an Input box"
  }
};

export const defaultInput = () => (
  <div>
    <div>
      <Input
        placeholder="Basic input"
        withClear
        onEnter={() => console.log("enter happened")}
      />
    </div>
    <div style={{ marginTop: 10 }}>
      <Search searchButton="Search" placeholder="Search input" />
    </div>
  </div>
);

defaultInput.story = {
  name: "Basic input box"
};
