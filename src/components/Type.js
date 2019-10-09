import React from "react";
import styled from "styled-components";
import { typography } from "../shared/styles";

const H1 = styled.h1`
  font-size: ${typography.size.l2}px;
`;
const H2 = styled.h1`
  font-size: ${typography.size.l1}px;
`;
const H3 = styled.h1`
  font-size: ${typography.size.m3}px;
`;
const H4 = styled.h1`
  font-size: ${typography.size.m2}px;
`;
const H5 = styled.h1`
  font-size: ${typography.size.m1}px;
`;
const H6 = styled.h1`
  font-size: ${typography.size.s3}px;
`;

export const Type = ({ as, children }) => {
  let type;
  if (as === "h1") {
    type = <H1>{children}</H1>;
  } else if (as === "h2") {
    type = <H2>{children}</H2>;
  } else if (as === "h3") {
    type = <H3>{children}</H3>;
  } else if (as === "h4") {
    type = <H4>{children}</H4>;
  } else if (as === "h5") {
    type = <H5>{children}</H5>;
  } else if (as === "h6") {
    type = <H6>{children}</H6>;
  }
  return type;
};
