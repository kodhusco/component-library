import React from "react";
import styled from "styled-components";
import { typography } from "../shared/styles";
import PropTypes from "prop-types";

const VARIANT = {
  HEAVY: "heavy",
  LIGHT: "light"
};

const H1 = styled.h1`
  font-size: ${typography.size.l2}px;
  font-weight: ${props =>
    props.variant === VARIANT.LIGHT
      ? typography.weight.regular
      : typography.weight.bold};
`;
const H2 = styled.h1`
  font-size: ${typography.size.l1}px;
  font-weight: ${props =>
    props.variant === VARIANT.LIGHT
      ? typography.weight.regular
      : typography.weight.bold};
`;
const H3 = styled.h1`
  font-size: ${typography.size.m3}px;
  font-weight: ${props =>
    props.variant === VARIANT.LIGHT
      ? typography.weight.regular
      : typography.weight.bold};
`;
const H4 = styled.h1`
  font-size: ${typography.size.m2}px;
  font-weight: ${props =>
    props.variant === VARIANT.LIGHT
      ? typography.weight.regular
      : typography.weight.bold};
`;
const H5 = styled.h1`
  font-size: ${typography.size.m1}px;
  font-weight: ${props =>
    props.variant === VARIANT.LIGHT
      ? typography.weight.regular
      : typography.weight.bold};
`;
const H6 = styled.h1`
  font-size: ${typography.size.s3}px;
  font-weight: ${props =>
    props.variant === VARIANT.LIGHT
      ? typography.weight.regular
      : typography.weight.bold};
`;

export const Type = ({ as, variant, children }) => {
  let type;
  if (as === "h1") {
    type = <H1 variant={variant}>{children}</H1>;
  } else if (as === "h2") {
    type = <H2 variant={variant}>{children}</H2>;
  } else if (as === "h3") {
    type = <H3 variant={variant}>{children}</H3>;
  } else if (as === "h4") {
    type = <H4 variant={variant}>{children}</H4>;
  } else if (as === "h5") {
    type = <H5 variant={variant}>{children}</H5>;
  } else if (as === "h6") {
    type = <H6 variant={variant}>{children}</H6>;
  }
  return type;
};

Type.propTypes = {
  as: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(VARIANT))
};

Type.defaultProps = {
  as: "h1",
  variant: VARIANT.HEAVY
};