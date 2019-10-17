import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { color } from "../shared/styles";
import { is } from "@babel/types";

const PlaceholderStyled = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
`;
const PlaceholderTitle = styled.div`
  height: 16px;
  margin-top: 16px;
  background-color: ${color.mediumlight};
`;
const PlaceholderContent = styled.div``;
const PlaceholderContentLine = styled.div`
  width: 100%;
  height: 16px;
  margin-top: 16px;
  background-color: ${color.mediumlight};
`;

export const Placeholder = ({ withTitle, withContent, withAvatar }) => (
  <PlaceholderStyled>
    {withAvatar && (
      <div style={{ flexGrow: 0, paddingTop: 8, marginRight: 16 }}>
        <div
          style={{
            width: 32,
            height: 32,
            background: color.mediumlight,
            borderRadius: "50%"
          }}
        ></div>
      </div>
    )}
    <div style={{ flexGrow: 1 }}>
      {withTitle && (
        <PlaceholderTitle
          style={{
            width: !isNaN(parseInt(withTitle))
              ? parseInt(withTitle) + "%"
              : "40%"
          }}
        ></PlaceholderTitle>
      )}
      {withContent && (
        <PlaceholderContent>
          <PlaceholderContentLine></PlaceholderContentLine>
          <PlaceholderContentLine></PlaceholderContentLine>
          <PlaceholderContentLine
            style={{
              width: !isNaN(parseInt(withContent))
                ? parseInt(withContent) + "%"
                : "80%"
            }}
          ></PlaceholderContentLine>
        </PlaceholderContent>
      )}
    </div>
  </PlaceholderStyled>
);

Placeholder.propTypes = {
  withTitle: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string
  ]),
  withContent: PropTypes.bool,
  withAvatar: PropTypes.bool
};

Placeholder.defaultProps = {
  withTitle: true,
  withContent: true,
  withAvatar: false
};
