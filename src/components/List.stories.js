import React from "react";
import { Icon } from "./Icon";
import { List, ListItem } from "./List";
import { color } from "../shared/styles";

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
    <div style={{ marginTop: 20 }}>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        listItem={item => (
          <ListItem>
            <div style={{ display: "flex" }}>
              <div>
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: color.mediumdark,
                    color: color.lightest,
                    borderRadius: "50%",
                    width: 32,
                    height: 32,
                    padding: 5,
                    boxSizing: "border-box",
                    textAlign: "center",
                    verticalAlight: "center"
                  }}
                >
                  <Icon type="user" style={{ fontSize: 18 }}></Icon>
                </span>
              </div>
              <div style={{ marginLeft: 20 }}>
                <div>{item.title}</div>
                <div style={{ marginTop: 5 }}>{item.description}</div>
              </div>
            </div>
          </ListItem>
        )}
        data={[
          {
            title: "First component",
            description: "Some description for first title"
          },
          {
            title: "Second component",
            description: "Some description for second title"
          }
        ]}
      ></List>
    </div>
  </div>
);

defaultList.story = {
  name: "Basic List"
};
