import React from "react";
import { List, ListItem } from "./List";

export default {
  title: "Components | List",
  parameters: {
    component: List,
    componentSubtitle: "Displays a List"
  }
};

export const defaultList = () => (
  <div>
    <div>
      <List
        withBorder
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        listItem={item => (
          <ListItem>
            <b>Breaking:</b> {item}
          </ListItem>
        )}
        data={[
          "This is the first item in the list",
          "and this is the second item in the list"
        ]}
      ></List>
    </div>
  </div>
);

defaultList.story = {
  name: "Basic List"
};
