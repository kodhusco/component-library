import React, { PureComponent } from "react";
import styled from "styled-components";
import { color, typography } from "../shared/styles";

const SliderBar = styled.div`
  width: 100%;
  height: 4px;
  background: ${color.mediumlight};
  border-radius: 2px;
`;
const SliderHandle = styled.span`
  width: 16px;
  height: 16px;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  background: ${color.lightest};
  border: 3px solid ${color.primary};
  ${props =>
    props.appreance &&
    `
    border-color: ${color[props.appreance]}
  `}
  top: -6px;
  transform: translateX(${props => props.xPosition}px);
  cursor: pointer;
`;
const SliderProgress = styled.div`
  position: absolute;
  height: 4px;
  width: 100%;
  transform: scaleX(${props => props.xScale});
  left: ${props => props.startPosition}px;
  top: 0;
  transform-origin: 0;
  background-color: ${color.primary};
  ${props =>
    props.appreance &&
    `
    background-color: ${color[props.appreance]}
  `}
  border-radius: 2px;
`;
const SliderControl = styled.div`
  position: relative;
`;

const StyledDiv = styled.div`
  color: ${color.lighter};
  background: ${color.darker};
  display: inline-block;
  bottom: 18px;
  font-size: ${typography.size.s2}px;
  display: none;
  transform: translate(calc(${props => props.xPosition}px - 50%));
  display: ${props => props.show && `block`};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  padding: 5px 10px;
  border-radius: 3px;
  position: absolute;
  &:after {
    content: "";
    bottom: -7px;
    width: 0;
    height: 0;
    left: 50%;
    transform: translate(-50%);
    border: 4px solid ${color.darker};
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    position: absolute;
  }
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

const Tooltip = ({ text, xPosition, show, children }) => {
  return (
    <span>
      <StyledDiv xPosition={xPosition} show={show}>
        {text}
      </StyledDiv>
      {children}
    </span>
  );
};

export class Slider extends React.Component {
  state = {
    currentPosition: [0, 0],
    firstHandledragging: false,
    secondHanleDragging: false,
    rootOffsetLeft: 0,
    rootOffsetWidth: 0,
    showFirstHandleTooltip: false,
    showSecondHandleTooltip: false
  };
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
    this.firstHandleRef = React.createRef();
    this.secondHandleRef = React.createRef();
  }

  componentDidMount() {
    // get parent pageX
    this.setState({
      rootOffsetLeft: this.sliderRef.current.offsetLeft,
      rootOffsetWidth: this.sliderRef.current.offsetWidth,
      currentPosition: Array.isArray(this.props.value)
        ? [
            Math.round(
              (this.props.value[0] * this.sliderRef.current.offsetWidth) / 100
            ),
            Math.round(
              (this.props.value[1] * this.sliderRef.current.offsetWidth) / 100
            )
          ]
        : [(this.props.value * this.sliderRef.current.offsetWidth) / 100]
    });

    this.firstHandleRef.current.addEventListener("mousedown", e => {
      this.setState({
        firstHandledragging: true,
        showFirstHandleTooltip: true
      });
    });
    if (this.props.range)
      this.secondHandleRef.current.addEventListener("mousedown", e => {
        this.setState({
          secondHanleDragging: true,
          showSecondHandleTooltip: true
        });
      });
    document.addEventListener("mouseup", e => {
      this.setState({
        firstHandledragging: false,
        secondHanleDragging: false,
        showFirstHandleTooltip: false,
        showSecondHandleTooltip: false
      });
    });
    document.addEventListener("mousemove", e => {
      let pos = e.pageX - this.state.rootOffsetLeft - 8;
      if (e.pageX < this.state.rootOffsetLeft + 8) pos = 0;
      if (e.pageX > this.state.rootOffsetWidth + this.state.rootOffsetLeft)
        pos = this.state.rootOffsetWidth;
      if (this.state.firstHandledragging) {
        if (this.props.range) {
          this.setState({
            currentPosition: [pos, this.state.currentPosition[1]],
            showTooltip: true
          });
        } else {
          this.setState({ currentPosition: [pos] });
        }
      } else if (this.state.secondHanleDragging) {
        if (this.props.range) {
          this.setState({
            currentPosition: [this.state.currentPosition[0], pos]
          });
        } else {
          this.setState({ currentPosition: [pos] });
        }
      }
    });
  }
  render() {
    return (
      <SliderControl ref={this.sliderRef}>
        <SliderBar></SliderBar>

        <SliderProgress
          appreance={this.props.appreance}
          startPosition={this.props.range ? this.state.currentPosition[0] : 0}
          xScale={
            this.props.range
              ? (this.state.currentPosition[1] -
                  this.state.currentPosition[0]) /
                this.state.rootOffsetWidth
              : this.state.currentPosition / this.state.rootOffsetWidth
          }
        ></SliderProgress>
        <Tooltip
          text={Math.round(
            (this.state.currentPosition[0] / this.state.rootOffsetWidth) *
              100 || 0
          )}
          show={this.state.showFirstHandleTooltip}
          xPosition={this.state.currentPosition[0]}
        >
          <SliderHandle
            appreance={this.props.appreance}
            ref={this.firstHandleRef}
            xPosition={this.state.currentPosition[0]}
          />
        </Tooltip>
        {this.props.range && (
          <Tooltip
            text={Math.round(
              (this.state.currentPosition[1] / this.state.rootOffsetWidth) * 100
            )}
            show={this.state.showSecondHandleTooltip}
            xPosition={this.state.currentPosition[1]}
          >
            <SliderHandle
              ref={this.secondHandleRef}
              appreance={this.props.appreance}
              xPosition={this.state.currentPosition[1]}
            />
          </Tooltip>
        )}
      </SliderControl>
    );
  }
}
