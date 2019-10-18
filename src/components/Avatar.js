import React from "react";
import { color } from "../shared/styles";
import { Icon } from "./Icon";
import PropTypes from "prop-types";

export const Avatar = ({ size, icon, type, style }) => (
  <div
    style={{
      width: size,
      height: size,
      background: color.medium,
      borderRadius: "50%",
      fontSize: size / 2,
      justifyContent: "center",
      color: color.dark,
      display: "flex",
      alignItems: "center",
      borderRadius: type && type === "square" ? 5 : "50%",
      ...style
    }}
  >
    {icon && <Icon type={icon} />}
  </div>
);

Avatar.propTypes = {
  type: PropTypes.string
};

Avatar.defaultProps = {
  type: "circle"
};
