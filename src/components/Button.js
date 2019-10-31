import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { darken, rgba } from "polished";
import { color, typography, borderRadius } from "../shared/styles";

const SIZES = {
  SMALL: "small",
  MEDIUM: "medium"
};

export const APPEARANCES = {
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
  font-weight: ${typography.weight.regular};
  display: flex;
  align-items: center;
  > *:last-child {
    margin-left: 8px;
  }
`;

const StyledButton = styled.button`
  background: ${color.primary};
  border: 0;
  border-radius: ${borderRadius.small}px;
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
    `}
  ${props =>
    props.appearance === APPEARANCES.PRIMARY_OUTLINE &&
    `
      background: ${color.white};
      color: ${color.primary};
      border: 1px solid ${color.primary};
      &:hover {
          border-color: ${darken(0.05, color.primary)};
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
      `}
      ${props =>
        props.appearance === APPEARANCES.SECONDARY &&
        `
        background: ${color.secondary};
        color: ${color.white};
        &:hover {
            background: ${darken(0.05, color.secondary)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: ${rgba(color.secondary, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: ${rgba(color.secondary, 0.2)} 0 8px 18px 0px;
          }
        `}
      ${props =>
        props.appearance === APPEARANCES.SECONDARY_OUTLINE &&
        `
          background: ${color.white};
          color: ${color.secondary};
          border: 1px solid ${color.secondary};
          &:hover {
              border-color: ${darken(0.05, color.secondary)};
            }
            &:active {
              box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
            }
            &:focus {
              box-shadow: ${rgba(color.secondary, 0.4)} 0 1px 9px 2px;
            }
            &:focus:hover {
              box-shadow: ${rgba(color.secondary, 0.2)} 0 8px 18px 0px;
            }
          `}
          ${props =>
            props.appearance === APPEARANCES.TERTIARY &&
            `
            background: ${color.tertiary};
            color: ${color.mediumdark};
            &:hover {
                background: ${darken(0.05, color.tertiary)};
              }
              &:active {
                box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
              }
              &:focus {
                box-shadow: ${rgba(color.tertiary, 0.4)} 0 1px 9px 2px;
              }
              &:focus:hover {
                box-shadow: ${rgba(color.tertiary, 0.2)} 0 8px 18px 0px;
              }
            `}
          ${props =>
            props.appearance === APPEARANCES.OUTLINE &&
            `
              background: ${color.white};
              color: ${color.mediumdark};
              border: 1px solid ${color.tertiary};
              &:hover {
                  border-color: ${darken(0.05, color.tertiary)};
                  background-color: ${color.mediumlight}
                }
                &:active {
                  box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
                }
                &:focus {
                  box-shadow: ${rgba(color.tertiary, 0.4)} 0 1px 9px 2px;
                }
                &:focus:hover {
                  box-shadow: ${rgba(color.tertiary, 0.2)} 0 8px 18px 0px;
                }
              `}
              ${props =>
                props.disabled &&
                `
                  cursor: not-allowed !important;
                  border: 1px solid ${color.mediumdark};
                  color: ${color.darkest};
                  background-color: ${color.medium};
                  opacity: 0.5;
                  &:hover {
                    transform: none;
                    color: ${color.darker};
                    background-color: ${color.medium};
                  }
                  &:active {
                    box-shadow: none;
                  }
                  &:focus {
                    box-shadow: none;
                  }
                  &:focus:hover {
                    box-shadow: none;
                  }
                `}
                ${props =>
                  props.block &&
                  `
                  width: 100%;
                  text-align: center;
                `}

`;

export const Button = ({ children, ...props }) => {
  const innerText = (
    <Text>
      {React.Children.map(children, child => (
        <span>{child}</span>
      ))}
    </Text>
  );

  return <StyledButton {...props}>{innerText}</StyledButton>;
};

const ButtonWrapper = styled.div`
  ${props =>
    props.margin === "0" &&
    `
    > button:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    > button:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    > button:not(:last-child):not(:first-child) {
      border-radius: 0;
    }
  `}
  ${props =>
    props.margin !== "0" &&
    `
  > button:not(:first-child):not(:last-child) {
    margin: 0 ${props.margin}px; 
  }
  `}
`;

export const ButtonGroup = ({ children, margin }) => (
  <ButtonWrapper margin={margin}>{children}</ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  appearance: PropTypes.oneOf(Object.values(APPEARANCES)),
  size: PropTypes.oneOf(Object.values(SIZES))
};

Button.defaultProps = {
  appearance: APPEARANCES.PRIMARY,
  size: SIZES.MEDIUM
};

ButtonGroup.propTypes = {
  margin: PropTypes.string
};
ButtonGroup.defaultProps = {
  margin: "0"
};
