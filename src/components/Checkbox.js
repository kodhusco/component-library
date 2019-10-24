import React from "react";
import styled from "styled-components";
import { color } from "../shared/styles";

const StyledCheckbox = styled.span`
  //   border: 1px solid #ccc;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  display: inline-block;
  padding: 0;
  position: relative;
  background: #fff;
  border: 1px solid ${color.mediumdark};
  ${props =>
    props.checked &&
    `
    background: ${color.primary};
    border: 0;
  &:after {
    
    content: "";
    width: 3px;
    border: 2px solid #fff;
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
    this.setState({ checked: this.checkbox.checked });
  }
  componentDidUpdate(prevProps) {
    console.log("called");
    return false;
  }
  onChange(e) {
    this.setState({ checked: e.target.checked });
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
            onChange={this.onChange}
          ></input>
          <StyledCheckbox checked={this.state.checked}></StyledCheckbox>
        </span>
        <span style={{ color: color.dark, fontSize: 14 }}>
          {this.props.children}
        </span>
      </label>
    );
  }
}
