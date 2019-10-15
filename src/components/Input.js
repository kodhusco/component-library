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
const StyledInputWrapper = styled.div`
  position: relative;
`;

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.state = { showClear: false, value: "" };
  }

  onKeyPress(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }

    if (e.target.value.length > 0 && this.props.withClear) {
      this.setState({ showClear: true });
    }
    let keyCode = e.keyCode ? e.keyCode : e.which;
    console.log(e);
    if (keyCode === KEYS.ENTER) {
      this.props.onEnter(e);
    }
  }

  render() {
    if (this.props.withClear) {
      return (
        <StyledInputWrapper>
          <StyledInput
            style={{
              paddingRight: 30,
              boxSizing: "border-box",
              ...this.props.style
            }}
            className={this.props.className}
            onChange={e => this.setState({ value: e.target.value })}
            onKeyPress={this.onKeyPress}
            value={this.state.value}
          />
          {this.state.showClear && (
            <Icon
              type="clear_circle"
              style={{
                position: "absolute",
                right: 10,
                top: 10,
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
      return (
        <StyledInput
          onKeyPress={this.onKeyPress}
          className={this.props.className}
          style={this.props.style}
        />
      );
    }
  }
}

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.onKeyPress = this.onKeyPress.bind(this);
  }
  onKeyPress(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }

    if (e.target.value.length > 0 && this.props.withClear) {
      this.setState({ showClear: true });
    }
    let keyCode = e.keyCode ? e.keyCode : e.which;
    if (keyCode === KEYS.ENTER) {
      this.props.onSearch(this.state.value);
    }
  }
  render() {
    if (this.props.searchButton) {
      return (
        <StyledInputWrapper style={{ display: "flex" }}>
          <StyledInput
            style={{
              paddingRight: 30,
              boxSizing: "border-box",
              borderTopRightRadius: 0,
              width: "auto",
              flex: 1,
              ...this.props.style
            }}
            className={this.props.className}
            onChange={e => this.setState({ value: e.target.value })}
            onKeyPress={this.onKeyPress}
            value={this.state.value}
          />
          <div
            style={{
              background: color.primary,
              padding: "10px 14px",
              boxSizing: "border-box",
              borderTopRightRadius: 3,
              borderBottomRightRadius: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer"
            }}
            onClick={e => this.props.onSearch(this.state.value)}
          >
            {typeof this.props.searchButton === "boolean" && (
              <Icon
                type="search"
                style={{
                  fontSize: 14,
                  color: color.lightest
                }}
              />
            )}
            {typeof this.props.searchButton === "string" && (
              <span style={{ color: color.lightest }}>
                {this.props.searchButton}
              </span>
            )}
          </div>
        </StyledInputWrapper>
      );
    } else {
      return (
        <StyledInputWrapper>
          <StyledInput
            style={{
              paddingRight: 30,
              boxSizing: "border-box",
              ...this.props.style
            }}
            className={this.props.className}
            onChange={e => this.setState({ value: e.target.value })}
            onKeyPress={this.onKeyPress}
            value={this.state.value}
          />
          <Icon
            type="search"
            style={{
              position: "absolute",
              right: 10,
              top: 10,
              fontSize: 14,
              color: color.mediumdark
            }}
          />
        </StyledInputWrapper>
      );
    }
  }
}

Input.propTypes = {
  onEnter: PropTypes.func
};
