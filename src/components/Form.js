import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { color } from "../shared/styles";

const StyledFormElement = styled.div`
  margin-bottom: 26px;
`;

const FormElement = ({ children, ...props }) => (
  <StyledFormElement {...props}>{children}</StyledFormElement>
);

class Validator {
  elements = {};
  pristine = true;
  errors = {};
  handlers = [];
  subcribeToErrors(handler) {
    this.handlers.push(handler);
  }

  makeDirty() {
    if (this.pristine) this.pristine = false;
  }

  getValue(field) {
    return this.elements[field] ? this.elements[field].value : "";
  }
  validationDecorator(name, rules) {
    return OriginalComponent => {
      if (!this.elements[name]) {
        this.elements[name] = {
          value: "",
          rules: rules.apply.rules
        };
      }
      const ref = React.createRef();
      this.applyRules(rules, this.elements[name].value, name);

      let newProps = {
        ref,
        onChange: e => {
          if (this.pristine) this.pristine = false;
          // loop through rules and apply logic for each rule

          this.elements[name].value
            ? (this.elements[name].value = e.target.value)
            : (this.elements[name] = {
                ...this.elements[name],
                value: e.target.value
              });

          this.applyRules(rules, e.target.value, name, ref);
          this.handlers.forEach(item => {
            item.call(window, { errors: this.errors, pristine: this.pristine });
          });
        }
      };
      this.elements[name].ref = ref;
      const newComponent = React.cloneElement(OriginalComponent, newProps);

      return (
        <div>
          {newComponent}
          <div
            style={{
              position: "absolute",
              color: color.negative,
              marginLeft: 6,
              marginTop: 3,
              fontSize: 14,
              display: "none"
            }}
          ></div>
        </div>
      );
    };
  }
  validate = callback => {
    return new Promise((resolve, reject) => {
      Object.keys(this.elements).forEach(key => {
        this.elements[key].rules.forEach(rule => {
          if (!this.pristine) {
            if (rule.required) {
              if (this.elements[key].value.length === 0) {
                this.errors[key] = true;
                ReactDOM.findDOMNode(
                  this.elements[key].ref.current
                ).style.borderColor = color.negative;
                ReactDOM.findDOMNode(
                  this.elements[key].ref.current
                ).nextSibling.innerHTML = rule.msg;
                ReactDOM.findDOMNode(
                  this.elements[key].ref.current
                ).nextSibling.style.display = "block";
              } else {
                this.errors[key] = false;
              }
            }
          }
        });
      });
      const someError = Object.keys(this.errors).some(
        field => this.errors[field]
      );
      if (someError) {
        reject(this.errors, this.elements);
      }
      const values = Object.keys(this.elements).reduce((acc, val) => {
        acc[val] = this.elements[val].value;
        return acc;
      }, {});
      resolve(values);
      this.handlers.forEach(item =>
        item.call(window, { errors: this.errors, pristine: this.pristine })
      );
    });
  };

  applyRules(rules, value, name, ref) {
    rules.apply.rules.forEach(rule => {
      if (rule.required) {
        if (value.length > 0) {
          this.errors = { ...this.errors, [name]: false };
          if (ref) {
            ReactDOM.findDOMNode(ref.current).style.borderColor = "";
            ReactDOM.findDOMNode(ref.current).nextSibling.innerHTML = "";
            ReactDOM.findDOMNode(ref.current).nextSibling.style.display =
              "none";
          }
        } else {
          this.errors = { ...this.errors, [name]: true };
          if (ref) {
            ReactDOM.findDOMNode(ref.current).style.borderColor =
              color.negative;
            ReactDOM.findDOMNode(ref.current).nextSibling.innerHTML = rule.msg;
            ReactDOM.findDOMNode(ref.current).nextSibling.style.display =
              "block";
          }
        }
      } else if (ref && rule.check) {
        rule.check(value, msg => {
          if (msg) {
            this.errors = { ...this.errors, [name]: true };
            if (ref) {
              ReactDOM.findDOMNode(ref.current).style.borderColor =
                color.negative;
              ReactDOM.findDOMNode(ref.current).nextSibling.innerHTML = msg;
              ReactDOM.findDOMNode(ref.current).nextSibling.style.display =
                "block";
            }
          } else {
            this.errors = { ...this.errors, [name]: false };
            if (ref) {
              ReactDOM.findDOMNode(ref.current).style.borderColor = "";
              ReactDOM.findDOMNode(ref.current).nextSibling.innerHTML = "";
              ReactDOM.findDOMNode(ref.current).nextSibling.style.display =
                "none";
            }
          }
        });
      } else if (value.length > 0 && rule.type && rule.type === "email") {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          this.errors = { ...this.errors, [name]: true };
          if (ref) {
            ReactDOM.findDOMNode(ref.current).style.borderColor =
              color.negative;
            ReactDOM.findDOMNode(ref.current).nextSibling.innerHTML = rule.msg;
            ReactDOM.findDOMNode(ref.current).nextSibling.style.display =
              "block";
          }
        } else {
          this.errors = { ...this.errors, [name]: false };
          if (ref) {
            ReactDOM.findDOMNode(ref.current).style.borderColor = "";
            ReactDOM.findDOMNode(ref.current).nextSibling.innerHTML = "";
            ReactDOM.findDOMNode(ref.current).nextSibling.style.display =
              "none";
          }
        }
      }
    });
  }
}

export class Form extends React.Component {
  static Element = FormElement;
  static Build(OriginalComponent) {
    const validator = new Validator();

    return () => <OriginalComponent validator={validator} />;
  }
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    if (this.props.onSubmit) {
      this.props.onSubmit(e);
    }
  }
  render() {
    return <form onSubmit={this.handleSubmit}>{this.props.children}</form>;
  }
}
