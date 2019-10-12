import React from "react";
import "../style.css";

export const ICONS = {
  HOME: "home-outline",
  CREDIT_CARD: "creditcard",
  BATHTHUB: "bathtub",
  PIN: "pin",
  LIST: "list",
  DOOR: "door",
  MONEY: "money",
  CROP: "crop"
};

const StyledIcon = ({ type, ...props }) => {
  return <i className={`icon-${type}`} {...props}></i>;
};

export const Icon = ({ type, ...props }) => (
  <StyledIcon type={type} {...props} />
);
