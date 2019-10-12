import React from "react";
import { Icon, ICONS } from "./Icon";
import { color } from "../shared/styles";
import { Type } from "./Type";

export default {
  title: "Components | Icon",
  parameters: {
    component: Icon,
    componentSubtitle: "Displays an icon"
  }
};

export const simpleIcon = () => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap"
    }}
  >
    {Object.values(ICONS).map((type, key) => (
      <div
        style={{
          width: 140,
          height: 140,
          textAlign: "center",
          borderRadius: 5,
          marginTop: 15,
          border: "2px solid #eee",
          margin: 20,
          padding: 20,
          boxSizing: "border-box"
        }}
      >
        <Icon
          type={type}
          key={key}
          style={{
            fontSize: 30,
            color: color.dark
          }}
        />
        <br />
        <div style={{ fontSize: 14, marginTop: 10 }}>{type}</div>
      </div>
    ))}
  </div>
);

simpleIcon.story = {
  name: "Icon",
  parameters: {
    options: {
      showPanel: false
    }
  }
};
