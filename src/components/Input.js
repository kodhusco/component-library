import React from "react";
import styled from "styled-components";
import { color } from "../shared/styles";
import { Icon } from "./Icon";
import PropTypes from "prop-types";

const KEYS = {
  ENTER: 13
};

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

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.state = { showClear: false, value: "" };
  }

  onKeyPress(e) {
    this.setState({ value: e.target.value });
    if (e.target.value.length > 0 && this.props.withClear) {
      this.setState({ showClear: true });
    }
    let keyCode = e.keyCode ? e.keyCode : e.which;
    if (keyCode === KEYS.ENTER) {
      this.props.onEnter(e);
    }
  }

  render() {
    if (this.props.withClear) {
      return (
        <StyledInputWrapper>
          <StyledInput
            style={{ paddingRight: 30, boxSizing: "border-box" }}
            onChange={this.onKeyPress}
            value={this.state.value}
          />
          {this.state.showClear && (
            <Icon
              type="clear_circle"
              style={{
                position: "absolute",
                right: 10,
                top: 4,
                fontSize: 14,
                cursor: "pointer",
                color: color.mediumdark
              }}
              onClick={() => this.setState({ value: "", showClear: false })}
            />
          )}
        </StyledInputWrapper>
      );
    } else {
      return <StyledInput onKeyPress={this.onKeyPress} />;
    }
  }
}

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

Input.propTypes = {
  onEnter: PropTypes.func
};
