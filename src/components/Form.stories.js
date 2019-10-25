import React, { useState } from "react";
import { Form, Validator } from "./Form";
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
    Validator.subcribeToErrors(formState => {
      const someError = Object.keys(formState.errors).some(
        field => formState.errors[field]
      );

      this.setState({ errors: someError || formState.pristine });
    });

    Validator.validate();
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
            Validator.validate().then(data => console.log(data));
          }}
        >
          <Form.Element>
            {Validator.validationDecorator("email", {
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
            {Validator.validationDecorator("password", {
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

export const defaultForm = () => {
  return <DefaultForm />;
};

defaultForm.story = {
  name: "Default Form"
};
