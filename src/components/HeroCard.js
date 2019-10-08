import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { typography } from "../shared/styles";

const HOVER_EFFECTS = {
  NONE: "none",
  GRAY_SCALE: "gray_scale"
};

const StyledDiv = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  box-sizing: border-box;
  min-height: 340px;
  border: 1px solid #eee;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;

const Image = styled.div`
  height: 194px;
  ${props => `
    background: url(${props.image});
    background-size: cover;
    background-position: center center;
  `}
`;
const Content = styled.div`
  padding: 16px;
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

const Children = styled.div`
  margin-top: 24px;
`;

export const HeroCard = ({ title, image, children }) => {
  return (
    <StyledDiv>
      <Image image={image}></Image>
      <Content>
        <Title>{title}</Title>
        <Children>{children}</Children>
      </Content>
    </StyledDiv>
  );
};

HeroCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string.isRequired
};
