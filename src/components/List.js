import React from "react";
import styled from "styled-components";
import { color, typography } from "../shared/styles";
import { borderRadius } from "polished";

const StyledList = styled.div`
  color: ${color.dark};
  ${props =>
    props.withBorder &&
    `
        border: 1px solid ${color.mediumlight};
        border-radius: ${borderRadius.small}px;
    `}
`;
const StyledListItem = styled.div`
  padding: 14px;
  box-sizing: border-box;
  font-size: ${typography.size.s2}px;
  color: ${color.dark};
  &:not(:last-child) {
    border-bottom: 1px solid ${color.mediumlight};
  }
`;

export const ListItem = ({ children }) => (
  <StyledListItem>{children}</StyledListItem>
);

export const List = ({ header, footer, data, withBorder, listItem }) => (
  <StyledList withBorder={withBorder}>
    {header && (
      <div
        style={{
          borderBottom: `1px solid ${color.mediumlight}`,
          padding: 14,
          fontSize: parseInt(typography.size.s2)
        }}
      >
        {header}
      </div>
    )}
    {listItem && data.map(listItem)}
    {!listItem &&
      data.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
    {footer && (
      <div
        style={{
          borderTopRightRadius: `1px solid ${color.mediumlight}`,
          padding: 14,
          fontSize: parseInt(typography.size.s2)
        }}
      >
        {footer}
      </div>
    )}
  </StyledList>
);
