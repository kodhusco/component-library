import React from "react";
import { color } from "../shared/styles";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";

export default {
  title: "Global | Styles",
  parameters: {
    componentSubtitle: "Design system colors"
  }
};

const Color = styled.div`
  flex-basis: 25%;
  flex-shrink: 0;
  padding: 10px 20px;
  margin-top: 60px;
  font-size: 12px;
`;

const ColorCard = styled.div`
  height: 30px;
  border-radius: 3px;
`;

const Info = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const Colors = () => (
  <div style={{ display: "flex", flexWrap: "wrap", marginTop: 40 }}>
    {Object.keys(color).map(key => (
      <Color>
        <ColorCard style={{ background: color[key] }}></ColorCard>
        <Info>
          {key}
          <br />
          <code
            style={{
              fontSize: 12,
              background: "#eee",
              padding: "3px 5px",
              color: "#999",
              marginTop: 6,
              borderRadius: 3
            }}
          >
            {color[key]}
          </code>
        </Info>
      </Color>
    ))}
  </div>
);

storiesOf("Styles", module).add("Colors", () => <Colors />, {
  options: { showPanel: false }
});
