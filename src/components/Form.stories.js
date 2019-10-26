import React, { useState } from "react";
import { Form } from "./Form";
import { Input } from "./Input";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Checkbox } from "./Checkbox";
import { color } from "../shared/styles";
import styled from "styled-components";

export default {
  title: "Components | Form",
  parameters: {
    component: Form,
    componentSubtitle: "Displays a Form"
  }
};
const CenteredDiv = styled.div`
  width: ${props => (props.width ? props.width + "%" : "100%")}
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  @media (max-width: 768px) {
    width: 98%;
  }
`;

class DefaultForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: false
    };
  }
  componentDidMount() {
    this.props.validator.subcribeToErrors(formState => {
      const someError = Object.keys(formState.errors).some(
        field => formState.errors[field]
      );
      this.setState({ errors: someError || formState.pristine });
    });

    this.props.validator.validate();
  }

  render() {
    return (
      <CenteredDiv
        width={40}
        style={{
          padding: "30px",
          paddingTop: 40,
          border: "1px solid #ccc",
          borderRadius: 5,
          fontSize: 14,
          background: "#fff"
        }}
      >
        <Form
          onSubmit={e => {
            e.preventDefault();
            this.props.validator.makeDirty();
            this.props.validator.validate().then(data => console.log(data));
          }}
        >
          <Form.Element>
            {this.props.validator.validationDecorator("email", {
              apply: {
                rules: [
                  { required: true, msg: "Enter your email address" },
                  {
                    type: "email",
                    msg: "Invalid email. Enter a valid one"
                  }
                ]
              }
            })(
              <Input
                prefix={
                  <Icon
                    type="user"
                    style={{
                      right: 10,
                      top: 10,
                      fontSize: 14,
                      cursor: "pointer",
                      color: color.mediumdark
                    }}
                  />
                }
                placeholder="Enter your email address ..."
              />
            )}
          </Form.Element>
          <Form.Element>
            {this.props.validator.validationDecorator("password", {
              apply: {
                rules: [{ required: true, msg: "Enter your password!" }]
              }
            })(
              <Input
                prefix={
                  <Icon
                    type="lock"
                    style={{
                      right: 10,
                      top: 10,
                      fontSize: 14,
                      cursor: "pointer",
                      color: color.mediumdark
                    }}
                  />
                }
                type="password"
                placeholder="Enter your password ..."
              />
            )}
          </Form.Element>
          <Form.Element style={{ marginBottom: 8 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Element>
          <Form.Element style={{ lineHeight: 2.1 }}>
            <Button block htmlType="submit" disabled={this.state.errors}>
              Log in
            </Button>
            If you haven't registered,{" "}
            <a href="" style={{ color: color.primary, fontSize: 14 }}>
              Signup here
            </a>{" "}
            here.
          </Form.Element>
        </Form>
      </CenteredDiv>
    );
  }
}

const Login1 = Form.Build(DefaultForm);

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: false
    };
    this.checkSamePasswords = this.checkSamePasswords.bind(this);
  }
  componentDidMount() {
    this.props.validator.subcribeToErrors(formState => {
      const someError = Object.keys(formState.errors).some(
        field => formState.errors[field]
      );

      this.setState({ errors: someError || formState.pristine });
    });

    // this.props.validator.validate();
  }

  checkSamePasswords(elementValue, showMsg) {
    if (elementValue !== this.props.validator.getValue("password")) {
      showMsg("Confirm password should be the same as password");
    }
  }

  render() {
    return (
      <CenteredDiv
        width={40}
        style={{
          padding: "30px",
          paddingTop: 40,
          border: "1px solid #ccc",
          borderRadius: 5,
          fontSize: 14,
          background: "#fff"
        }}
      >
        <Form
          onSubmit={e => {
            e.preventDefault();
            this.props.validator.makeDirty();
            this.props.validator.validate().then(data => console.log(data));
          }}
        >
          <Form.Element>
            {this.props.validator.validationDecorator("email", {
              apply: {
                rules: [
                  { required: true, msg: "Enter your email address" },
                  {
                    type: "email",
                    msg: "Invalid email. Enter a valid one"
                  }
                ]
              }
            })(
              <Input
                prefix={
                  <Icon
                    type="user"
                    style={{
                      right: 10,
                      top: 10,
                      fontSize: 14,
                      cursor: "pointer",
                      color: color.mediumdark
                    }}
                  />
                }
                placeholder="Enter your email address ..."
              />
            )}
          </Form.Element>
          <Form.Element>
            {this.props.validator.validationDecorator("password", {
              apply: {
                rules: [{ required: true, msg: "Enter your password!" }]
              }
            })(
              <Input
                prefix={
                  <Icon
                    type="lock"
                    style={{
                      right: 10,
                      top: 10,
                      fontSize: 14,
                      cursor: "pointer",
                      color: color.mediumdark
                    }}
                  />
                }
                type="password"
                placeholder="Enter your password ..."
              />
            )}
          </Form.Element>
          <Form.Element>
            {this.props.validator.validationDecorator("confirmpassword", {
              apply: {
                rules: [
                  { required: true, msg: "Confirm your password!" },
                  { check: this.checkSamePasswords }
                ]
              }
            })(
              <Input
                prefix={
                  <Icon
                    type="lock"
                    style={{
                      right: 10,
                      top: 10,
                      fontSize: 14,
                      cursor: "pointer",
                      color: color.mediumdark
                    }}
                  />
                }
                type="password"
                placeholder="Enter your password ..."
              />
            )}
          </Form.Element>
          <Form.Element style={{ marginBottom: 30 }}>
            {this.props.validator.validationDecorator("agreement", {
              apply: {
                rules: [
                  {
                    required: true,
                    msg: "You need to agree with our terms of services!"
                  }
                ]
              }
            })(
              <Checkbox>
                Agree with{" "}
                <a href="" style={{ color: color.primary }}>
                  Terms and services
                </a>
                .
              </Checkbox>
            )}
          </Form.Element>
          <Form.Element style={{ marginTop: 15 }}>
            <Button block htmlType="submit" disabled={this.state.errors}>
              Register
            </Button>
          </Form.Element>
        </Form>
      </CenteredDiv>
    );
  }
}

const NewRegisterForm = Form.Build(RegisterForm);

export const loginForm = () => {
  return (
    <div>
      <Login1 />
    </div>
  );
};

loginForm.story = {
  name: "Login Form"
};

export const registerForm = () => {
  return <NewRegisterForm />;
};

registerForm.story = {
  name: "Register Form"
};
