import React from "react";
import { Input, Search } from "./Input";
import styled from "styled-components";
import { color } from "../shared/styles";
import { typography, boxShadow } from "../shared/styles";
import { borderRadius } from "polished";

const AutocompleteWrapper = styled.div`
  position: relative;
`;

const Suggestions = styled.div`
  position: absolute;
  border: 1px solid ${color.mediumlight};
  width: 100%;
  border-bottom-left-radius: ${borderRadius.small}px;
  border-bottom-right-radius: ${borderRadius.small}px;
  overflow: hidden;
  box-shadow: ${boxShadow.default};
  z-index: 999999;
`;
const SuggestionItem = styled.div`
  background-color: ${color.lightest};
  color: ${color.darker};
  padding: 12px 10px;
  :not(:last-child) {
    border-bottom: 1px solid ${color.medium};
  }
  font-size: ${typography.size.s2}px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${color.light};
  }
  text-align-left;
`;

export class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      showSuggestions: false,
      value: "",
      case: ""
    };
    this.selectSuggestion = this.selectSuggestion.bind(this);
  }
  suggest(value) {
    if (value.length < 1)
      this.setState({ suggestions: [], showSuggestions: false });
    this.setState({ value });
    if (value.length < this.props.skipFirst) return;
    const suggestions = this.props.dataSource.filter(item =>
      item.toLowerCase().startsWith(value.toLowerCase())
    );
    this.setState({
      suggestions,
      showSuggestions: true
    });
  }
  selectSuggestion(e) {
    const value = e.target.innerHTML;
    this.setState({ showSuggestions: false, value }, () =>
      this.props.onSelect(value)
    );
  }

  render() {
    const { children } = this.props;

    let child;

    if (children && children.type.name === "Input") {
      child = (
        <Input
          placeholder={this.props.placeholder}
          value={this.state.value}
          onClick={e => this.suggest(e.target.value)}
          onChange={e => this.suggest(e.target.value)}
          {...children.props}
        />
      );
    } else if (children && children.type.name === "Search") {
      child = (
        <Search
          placeholder={this.props.placeholder}
          value={this.state.value}
          onClick={e => this.suggest(e.target.value)}
          onChange={e => this.suggest(e.target.value)}
          {...children.props}
        />
      );
    }

    return (
      <AutocompleteWrapper
        style={this.props.style}
        className={this.props.className}
      >
        {children ? (
          child
        ) : (
          <Input
            placeholder={this.props.placeholder}
            value={this.state.value}
            onClick={e => this.suggest(e.target.value)}
            onChange={e => {
              this.suggest(e.target.value);
              this.setState({ case: e.target.value });
            }}
          />
        )}

        {this.state.showSuggestions && (
          <Suggestions>
            {this.state.suggestions.map((item, key) => (
              <SuggestionItem onClick={this.selectSuggestion} key={key}>
                {item}
              </SuggestionItem>
            ))}
          </Suggestions>
        )}
      </AutocompleteWrapper>
    );
  }
}
