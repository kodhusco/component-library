import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./Button";

it("", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button>Some text</Button>, div);
  expect(div.textContent).toEqual("Some text");

  ReactDOM.unmountComponentAtNode(div);
});
