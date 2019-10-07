import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { darken, rgba } from "polished";
import { color, typography } from "../shared/styles";

const SIZES = {
  SMALL: "small",
  MEDIUM: "medium"
};

const APPEARANCES = {
  PRIMARY: "primary",
  PRIMARY_OUTLINE: "primaryOutline",
  SECONDARY: "secondary",
  SECONDARY_OUTLINE: "secondaryOutline",
  TERTIARY: "tertiary",
  OUTLINE: "outline"
};

const Text = styled.span`
  display: inline-block;
  vertical-align: top;
`;

const StyledButton = styled.button`
  background: rgb(69, 8, 233);
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: ${props => (props.size === SIZES.SMALL ? "8px 16px" : "13px 20px")};
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0;
  outline: 0;

  font-size: ${props =>
    props.size === SIZES.SMALL ? typography.size.s1 : typography.size.s2}px;
  font-weight: ${typography.weight.extrabold};
  line-height: 1;

  ${props =>
    props.appearance === APPEARANCES.PRIMARY &&
    `
    background: ${color.primary};
    color: ${color.white};
    &:hover {
        background: ${darken(0.05, color.primary)};
      }
      &:active {
        box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
      }
      &:focus {
        box-shadow: ${rgba(color.primary, 0.4)} 0 1px 9px 2px;
      }
      &:focus:hover {
        box-shadow: ${rgba(color.primary, 0.2)} 0 8px 18px 0px;
      }
    `};
`;

/**
 Use this button as your main button in the page, If you don't pass the appearance props, the default will be primary. Children is the text within the button.
**/

export const Button = ({ children, ...props }) => {
  const innerText = <Text>{children}</Text>;

  return <StyledButton {...props}>{innerText}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  appearance: PropTypes.oneOf(Object.values(APPEARANCES)),
  size: PropTypes.oneOf(Object.values(SIZES))
};

Button.defaultProps = {
  appearance: APPEARANCES.PRIMARY,
  size: SIZES.MEDIUM
};
