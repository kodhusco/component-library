import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { color } from "../shared/styles";
import { Avatar } from "./Avatar";

const PlaceholderStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.withHero ? "column" : "row")};
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

export const PlaceholderLine = ({ children, width, loading }) => {
  if (loading) {
    return (
      <PlaceholderTitle
        style={{ width: width ? parseInt(width) + "%" : "100%", marginTop: 0 }}
      />
    );
  } else {
    if (children) return children;
    else return "";
  }
};

export const Placeholder = ({
  withTitle,
  withContent,
  withAvatar,
  withHero,
  children,
  loading,
  style,
  className
}) => {
  if (loading) {
    return (
      <PlaceholderStyled
        withHero={withHero}
        className={className}
        style={style}
      >
        {withHero && (
          <div
            style={{
              background: color.medium,
              height: 190,
              width: "100%",
              borderRadius: 2,
              marginBottom: 16
            }}
          ></div>
        )}
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          {withAvatar && (
            <div style={{ flexGrow: 0, paddingTop: 8, marginRight: 16 }}>
              <Avatar size={32} style={{ background: color.mediumlight }} />
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
                {" "}
                {withContent.rows &&
                  Array.from(Array(withContent.rows).keys()).map(it => (
                    <PlaceholderContentLine key={it}></PlaceholderContentLine>
                  ))}
                {!withContent.rows && (
                  <div>
                    <PlaceholderContentLine></PlaceholderContentLine>
                    <PlaceholderContentLine></PlaceholderContentLine>
                    <PlaceholderContentLine></PlaceholderContentLine>
                  </div>
                )}
                <PlaceholderContentLine
                  style={{
                    width: !isNaN(parseInt(withContent))
                      ? parseInt(withContent) + "%"
                      : withContent.width
                      ? parseInt(withContent.width) + "%"
                      : "80%"
                  }}
                ></PlaceholderContentLine>
              </PlaceholderContent>
            )}
          </div>
        </div>
      </PlaceholderStyled>
    );
  } else {
    if (children) return children;
    else return "";
  }
};

Placeholder.propTypes = {
  withTitle: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string
  ]),
  withContent: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  withAvatar: PropTypes.bool,
  withHero: PropTypes.bool,
  loading: PropTypes.bool
};

Placeholder.defaultProps = {
  withTitle: true,
  withContent: true,
  withAvatar: false,
  withHero: false,
  loading: false
};
