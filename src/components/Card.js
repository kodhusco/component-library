import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { typography, color } from "../shared/styles";

const HOVER_EFFECTS = {
  NONE: "none",
  GRAY_SCALE: "gray_scale"
};

const COLOR_THEME = {
  LIGHT: "light",
  DARK: "dark"
};

const StyledDiv = styled.div`
  position: relative;
  overflow: hidden;
  ${props =>
    props.hoverEffect === HOVER_EFFECTS.GRAY_SCALE &&
    `
        filter: grayscale(1);
        transition: filter 0.4s;
        &:hover {
            filter: grayscale(0);
        }
    `}
  box-sizing: border-box;
  ${props => `
    background: url(${props.image});
    background-size: cover;
  `}
  background-position: center center;
  height: 340px;
`;

const InfoWrapper = styled.div`
  color: ${props =>
    props.theme === COLOR_THEME.LIGHT ? color.lighter : color.darkest};
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 15px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  text-align: left;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: ${typography.weight.regular};
  line-height: 1;
`;

const SubTitle = styled.div`
  margin-top: 10px;
  font-size: 14px;
  display: inline-block;
  border-radius: 3px;
  transition: all 0.4s;
  font-weight: ${typography.weight.regular};
`;

export const Card = ({
  title,
  subTitle,
  image,
  theme,
  hoverEffect,
  ...props
}) => {
  return (
    <StyledDiv image={image} hoverEffect={hoverEffect} {...props}>
      <InfoWrapper theme={theme}>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </InfoWrapper>
    </StyledDiv>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  hoverEffect: PropTypes.oneOf(Object.values(HOVER_EFFECTS)),
  style: PropTypes.oneOf(Object.values(COLOR_THEME))
};

Card.defaultProps = {
  hoverEffect: HOVER_EFFECTS.NONE,
  style: COLOR_THEME.DARK
};
