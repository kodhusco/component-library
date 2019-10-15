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
  CROP: "crop",
  LAYOUT: "layout-outline",
  FILTER: "filter_list",
  CALENDAR: "calendar",
  ARROW_LEFT: "arrow_left",
  ARROW_RIGHT: "arrow_right",
  ARROW_UP: "arrow_up",
  ARROW_DOWN: "arrow_down",
  CLEAR: "clear",
  CLEAR_CIRCLE: "clear_circle",
  NO_DATA: "no-data"
};

const StyledIcon = ({ type, ...props }) => {
  return <i className={`icon-${type}`} {...props}></i>;
};

export const Icon = ({ type, ...props }) => (
  <StyledIcon type={type} {...props} />
);
