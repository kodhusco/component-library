import React from "react";
import styled from "styled-components";
import { color } from "../shared/styles";
import { removePropertiesDeep } from "@babel/types";

const StyledCheckbox = styled.span`
  //   border: 1px solid #ccc;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  display: inline-block;
  padding: 0;
  position: relative;
  background: ${props => (props.disabled ? color.medium : color.lightest)};
  ${props => props.disabled && `cursor: not-allowed !important;`}
  border: 1px solid
    ${props => (props.disabled ? color.mediumlight : color.mediumdark)};
  ${props =>
    props.checked &&
    `
    background: ${props.disabled ? color.mediumlight : color.primary};
    border: 0;
  &:after {
    content: "";
    width: 3px;
    border: 2px solid ${props.disabled ? color.mediumdark : color.lightest};
    height: 6px;
    border-left: none;
    border-top: none;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`};
`;

export class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.checkbox = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.state = {
      checked: false
    };
  }
  componentDidMount() {
    if (this.props.checked) this.setState({ checked: this.props.checked });
  }
  "";
  onChange(e) {
    if (this.props.disabled) return;
    this.setState({ checked: e.target.checked });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }
  render() {
    return (
      <label
        style={{ display: "flex", cursor: "pointer" }}
        htmlFor={this.props.id || "kodhus-checkbox"}
      >
        <span
          style={{
            padding: 0,
            margin: 0,
            position: "relative",
            width: 16,
            height: 16,
            marginRight: 5
          }}
        >
          <input
            type="checkbox"
            name="checkbox"
            ref={this.checkbox}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              opacity: 0,
              display: "none"
            }}
            id={this.props.id || "kodhus-checkbox"}
            checked={this.state.checked}
            onChange={this.onChange}
          ></input>
          <StyledCheckbox
            checked={this.state.checked}
            disabled={this.props.disabled}
          ></StyledCheckbox>
        </span>
        <span style={{ color: color.dark, fontSize: 14 }}>
          {this.props.children}
        </span>
      </label>
    );
  }
}
