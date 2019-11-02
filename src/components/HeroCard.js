import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  typography,
  breakpoint,
  boxShadow,
  spacing,
  color,
  borderRadius
} from "../shared/styles";

const MOBILE_TYPE = {
  LIST: "list",
  CARD: "card"
};

const StyledDiv = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${borderRadius.small}px;
  background: #fff;
  box-sizing: border-box;
  border: 1px solid ${color.mediumlight};
  box-shadow: ${boxShadow.default};
  ${props =>
    props.type === MOBILE_TYPE.LIST &&
    `
  @media (max-width: ${breakpoint.screenSmall}) {
    display: flex;
    padding: ${spacing.medium}px;
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
    border-bottom: 1px solid ${color.medium};
  `}
  ${props =>
    props.type === MOBILE_TYPE.LIST &&
    `
    @media (max-width: ${breakpoint.screenSmall}) {
      flex-shrink: 0;
      width: 100px;
      height: 100px;
    }
    `}
`;
const Content = styled.div`
  padding: 16px 8px;
  ${props =>
    props.type === MOBILE_TYPE.LIST &&
    `
    @media (max-width: ${breakpoint.screenSmall}) {
      padding: 5px 10px;
      width: calc(100% - 120px);
    }
    `}
`;

const Title = styled.div`
  font-size: ${typography.size.m1}px;

  @media (max-width: ${breakpoint.screenSmall}) {
    font-size: ${typography.size.s3}px;
  }
  font-weight: ${typography.weight.regular};
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Children = styled.div`
  margin-top: 16px;
`;

export const HeroCard = ({
  title,
  image,
  type,
  children,
  className,
  ...props
}) => {
  return (
    <StyledDiv type={type} className={className} {...props}>
      <Image image={image} type={type}></Image>
      <Content type={type}>
        <Title>{title}</Title>
        <Children>{children}</Children>
      </Content>
    </StyledDiv>
  );
};

HeroCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.oneOf(Object.values(MOBILE_TYPE))
};

HeroCard.defaultTypes = {
  type: MOBILE_TYPE.CARD
};
