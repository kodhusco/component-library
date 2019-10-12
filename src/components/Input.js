import React from "react";
import styled from "styled-components";
import { color } from "../shared/styles";
import { Icon } from "./Icon";

const StyledInput = styled.input`
  font-size: 14px;
  padding: 8px 6px;
  border-radius: 3px;
  border: 1px solid ${color.mediumlight};
  color: ${color.darker};
  width: 100%;
  &:focus {
    border-color: ${color.medium};
  }
`;
const StyledInputWrapper = styled.span`
  position: relative;
`;

export const Input = ({ ...props }) => <StyledInput {...props} />;

export const Search = ({ ...props }) => (
  <StyledInputWrapper>
    <StyledInput
      {...props}
      style={{ paddingRight: 30, boxSizing: "border-box" }}
    />
    <Icon
      type="search"
      style={{
        position: "absolute",
        right: 10,
        top: 4,
        fontSize: 14,
        color: color.mediumdark
      }}
    />
  </StyledInputWrapper>
);
