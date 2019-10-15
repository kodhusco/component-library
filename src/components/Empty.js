import React from "react";
import styled from "styled-components";
import { Icon } from "./Icon";
import { color, typography } from "../shared/styles";

const EmptyContainer = styled.div`
  text-align: center;
  padding: 20px 0;
`;

export const Empty = ({ text }) => (
  <EmptyContainer>
    <Icon
      style={{ fontSize: 60, color: color.mediumdark }}
      type="no-data"
    ></Icon>
    <div
      style={{
        marginTop: 10,
        color: color.mediumdark,
        fontSize: `${typography.size.s1}px`
      }}
    >
      {text}
    </div>
  </EmptyContainer>
);
