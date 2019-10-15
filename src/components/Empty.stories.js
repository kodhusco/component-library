import React from "react";
import { Empty } from "./Empty";

export default {
  title: "Components | Empty",
  parameters: {
    component: Empty,
    componentSubtitle: "Displays an Input box"
  }
};

export const defaultEmpty = () => (
  <div>
    <Empty text="Nothing found" />
  </div>
);

defaultEmpty.story = {
  name: "Basic Empty info"
};
