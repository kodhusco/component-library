import React from "react";
import { Checkbox } from "./Checkbox";

export default {
  title: "Components | Checkbox",
  parameters: {
    component: Checkbox,
    componentSubtitle: "Displays an Input box"
  }
};

export const defaultCheckbox = () => (
  <div>
    <Checkbox onChange={e => console.log(e.target.checked)}>
      Do you agree with our terms and services? (Uncheked)
    </Checkbox>
  </div>
);

defaultCheckbox.story = {
  name: "Basic checkbox"
};

export const checkedCheckbox = () => (
  <div>
    <Checkbox
      disabled
      checked={true}
      onChange={e => console.log(e.target.checked)}
    >
      Checked
    </Checkbox>
  </div>
);

checkedCheckbox.story = {
  name: "Checked checkbox"
};
