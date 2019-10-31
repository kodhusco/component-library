import React from "react";
import styled from "styled-components";
import { color, typography } from "../shared/styles";
import { Icon } from "./Icon";
import PropTypes from "prop-types";
import { borderRadius } from "../shared/styles";

const KEYS = {
  ENTER: 13
};

const StyledInput = styled.input`
  font-size: ${typography.size.s2}px;
  padding: 8px 6px;
  color: ${color.darker};
  width: 100%;
  outline: none;
  border: 0;
`;
const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: ${borderRadius.small}px;
  border-width: 1px;
  border-style: solid;
  padding: 0 0 0 5px;
  border-color: ${color.mediumlight};
  transition: border-color 0.6s;
`;

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.state = { showClear: false, value: "" };
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({ value: this.props.value });
    }
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
      this.props.onEnter(e);
    }
  }

  render() {
    const type = this.props.type || "text";
    if (this.props.withClear) {
      return (
        <StyledInputWrapper style={this.props.style}>
          <StyledInput
            style={{
              paddingRight: 30,
              boxSizing: "border-box",
              ...this.props.style
            }}
            type={type}
            className={this.props.className}
            placeholder={this.props.placeholder}
            onChange={e => this.setState({ value: e.target.value })}
            onKeyUp={this.onKeyPress}
            value={this.state.value}
            placeholder={this.props.placeholder}
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
        <StyledInputWrapper style={this.props.style}>
          {"prefix" in this.props && this.props.prefix}
          <StyledInput
            onKeyUp={this.onKeyPress}
            className={this.props.className}
            onChange={e => this.setState({ value: e.target.value })}
            value={this.state.value}
            style={this.props.style}
            type={type}
            placeholder={this.props.placeholder}
          />
        </StyledInputWrapper>
      );
    }
  }
}

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.someRef = React.createRef();
    this.state = {
      value: this.props.value,
      searchButtonWidth: "auto"
    };
    this.onKeyPress = this.onKeyPress.bind(this);
  }
  componentDidMount() {
    this.setState({
      searchButtonWidth: this.someRef.current.offsetHeight
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({ value: this.props.value });
    }
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
            ref={this.someRef}
            style={{
              paddingRight: 30,
              boxSizing: "border-box",
              borderTopRightRadius: 0,
              borderRightWidth: 0,
              borderBottomRightRadius: 0,
              width: "auto",
              flex: 1,
              ...this.props.style,
              border: 0
            }}
            placeholder={this.props.placeholder}
            className={this.props.className}
            onChange={e => this.setState({ value: e.target.value })}
            onKeyPress={this.onKeyPress}
            value={this.state.value}
          />
          <div
            style={{
              background: color.primary,
              padding: "10px 16px",
              width: this.state.searchButtonWidth,
              height: this.state.searchButtonWidth,
              boxSizing: "border-box",
              borderTopRightRadius: 3,
              borderBottomRightRadius: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              alignSelf: "strech"
            }}
            onClick={e => this.props.onSearch(this.state.value)}
          >
            {typeof this.props.searchButton === "boolean" && (
              <Icon
                type="search"
                style={{
                  fontSize: this.props.searchButtonSize || 14,
                  color: color.lightest
                }}
              />
            )}
            {typeof this.props.searchButton === "string" && (
              <span
                style={{
                  color: color.lightest,
                  fontSize: this.props.searchButtonSize || 14
                }}
              >
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
            placeholder={this.props.placeholder}
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
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: this.props.searchButtonSize || 14,
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
