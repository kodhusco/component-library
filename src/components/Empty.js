import React from "react";
import styled from "styled-components";
import { Icon } from "./Icon";
import PropTypes from "prop-types";
import { color, typography, spacing } from "../shared/styles";

const EmptyContainer = styled.div`
  text-align: center;
  padding: ${spacing.large}px 0;
`;

export const Empty = ({ text, size, ...props }) => (
  <EmptyContainer className={props.className}>
    <Icon
      style={{ fontSize: size, color: color.mediumdark, ...props.style }}
      type="no-data"
    ></Icon>
    <div
      style={{
        marginTop: 10,
        color: (props.style && props.style.color) || color.mediumdark,
        fontSize: `${(typography.size.s1 * size) / 80}px`
      }}
    >
      {text}
    </div>
  </EmptyContainer>
);

Empty.propTypes = {
  text: PropTypes.string,
  size: PropTypes.number
};

Empty.defaultProps = {
  size: 60
};
