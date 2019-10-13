import React from "react";
import styled from "styled-components";
import { color } from "../shared/styles";

const Color = styled.div`
  flex-basis: 25%;
  flex-shrink: 0;
  padding: 10px 20px;
  margin-top: 60px;
  font-size: 12px;
`;

const ColorCard = styled.div`
  height: 30px;
`;

const Info = styled.div`
  margin-top: 10px;
  text-align: center;
`;

export const Colors = () => (
  <div style={{ display: "flex", flexWrap: "wrap", marginTop: 40 }}>
    {Object.keys(color).map((value, index) => (
      <Color key={index}>
        <ColorCard style={{ background: color[value] }}></ColorCard>
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
            {color[value]}
          </code>
        </Info>
      </Color>
    ))}
  </div>
);
