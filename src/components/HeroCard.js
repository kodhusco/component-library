import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { typography, breakpoint } from "../shared/styles";

const MOBILE_TYPE = {
  LIST: "list",
  CARD: "card"
};

const StyledDiv = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  box-sizing: border-box;
  border: 1px solid #eee;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  ${props =>
    props.as === MOBILE_TYPE.LIST &&
    `
  @media (max-width: ${breakpoint["screen-sm"]}) {
    display: flex;
    padding: 10px;
    box-sizing: border-box;
  }
  `}
`;

const Image = styled.div`
  height: 194px;
  ${props => `
    background: url(${props.image});
    background-size: cover;
    background-position: center center;
    border-bottom: 1px solid #ddd;
  `}
  ${props =>
    props.as === MOBILE_TYPE.LIST &&
    `
    @media (max-width: ${breakpoint["screen-sm"]}) {
      width: 100px;
      height: 100px;
    }
    `}
`;
const Content = styled.div`
  padding: 16px;
  ${props =>
    props.as === MOBILE_TYPE.LIST &&
    `
    @media (max-width: ${breakpoint["screen-sm"]}) {
      padding: 5px 10px;
    }
    `}
`;

const Title = styled.div`
  font-size: ${typography.size.m1}px;
  font-weight: ${typography.weight.regular};
  line-height: 1;
`;

const Children = styled.div`
  margin-top: 24px;
`;

export const HeroCard = ({ title, image, as, children, ...props }) => {
  return (
    <StyledDiv className={props.className} as={as}>
      <Image as={as} image={image}></Image>
      <Content as={as}>
        <Title>{title}</Title>
        <Children>{children}</Children>
      </Content>
    </StyledDiv>
  );
};

HeroCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  as: PropTypes.oneOf(Object.values(MOBILE_TYPE))
};

HeroCard.defaultTypes = {
  as: MOBILE_TYPE.CARD
};
