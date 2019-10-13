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
  width: 14px;
  height: 14px;
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
  top: -2px;
  transform: translateX(${props => props.xPosition}px);
  cursor: pointer;
`;
const SliderProgress = styled.div`
  position: absolute;
  height: 4px;
  width: 100%;
  transform: scaleX(${props => props.xScale});
  left: ${props => props.startPosition}px;
  top: 3px;
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
  width: 100%;
  height: 12px;
  margin: 12px 12px 8px 12px;
  padding: 4px 0;
`;

const StyledDiv = styled.div`
  color: ${color.lighter};
  background: ${color.darker};
  display: inline-block;
  bottom: 18px;
  font-size: ${typography.size.s2}px;
  display: none;
  transform: translate(calc(${props => props.xPosition + 8}px - 50%));
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
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
    this.firstHandleRef = React.createRef();
    this.secondHandleRef = React.createRef();
    this.positions = [];
    this.state = {
      currentPosition: [0, 0],
      firstHandledragging: false,
      secondHanleDragging: false,
      rootOffsetLeft: 0,
      rootOffsetWidth: 0,
      showFirstHandleTooltip: false,
      showSecondHandleTooltip: false
    };
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseuop", this.onMouseUp);
  }

  firstHandleMouseDown = e => {
    this.setState({
      firstHandledragging: true,
      showFirstHandleTooltip: true
    });
  };

  secondHandleMouseDown = e => {
    this.setState({
      secondHanleDragging: true,
      showSecondHandleTooltip: true
    });
  };

  onMouseMove = e => {
    let pos = e.pageX;
    // if (e.pageX < this.state.rootOffsetLeft + 8) pos = 0;
    // if (e.pageX > this.state.rootOffsetWidth + this.state.rootOffsetLeft)
    //   pos = this.state.rootOffsetWidth;
    if (this.state.firstHandledragging) {
      const closest = this.positions.reduce(function(prev, curr) {
        return Math.abs(curr - pos) < Math.abs(prev - pos) ? curr : prev;
      });
      if (this.props.range) {
        this.setState(
          {
            currentPosition: [closest, this.state.currentPosition[1]],
            showTooltip: true
          },
          () =>
            this.props.onChange(
              this.state.currentPosition.map(pos =>
                Math.round((pos / this.state.rootOffsetWidth) * this.props.max)
              )
            )
        );
      } else {
        this.setState(
          { currentPosition: [closest - this.state.rootOffsetLeft - 7] },
          () =>
            this.props.onChange(
              this.state.currentPosition.map(pos =>
                Math.round((pos / this.state.rootOffsetWidth) * this.props.max)
              )
            )
        );
      }
    } else if (this.state.secondHanleDragging) {
      const closest = this.positions.reduce(function(prev, curr) {
        return Math.abs(curr - pos) < Math.abs(prev - pos) ? curr : prev;
      });
      if (this.props.range) {
        this.setState(
          {
            currentPosition: [this.state.currentPosition[0], closest]
          },
          () =>
            this.props.onChange(
              this.state.currentPosition.map(pos =>
                Math.round((pos / this.state.rootOffsetWidth) * this.props.max)
              )
            )
        );
      } else {
        this.setState({ currentPosition: [closest] }, () =>
          this.props.onChange(
            this.state.currentPosition.map(pos =>
              Math.round((pos / this.state.rootOffsetWidth) * this.props.max)
            )
          )
        );
      }
    }
  };

  onMouseUp = e => {
    this.setState({
      firstHandledragging: false,
      secondHanleDragging: false,
      showFirstHandleTooltip: false,
      showSecondHandleTooltip: false
    });
  };

  componentDidMount() {
    for (let i = 0; i <= this.props.max - this.props.min; i++) {
      this.positions.push(
        Math.round(
          (i / (this.props.max - this.props.min)) *
            this.sliderRef.current.offsetWidth +
            this.sliderRef.current.offsetLeft
        )
      );
    }
    this.setState({
      rootOffsetLeft: this.sliderRef.current.offsetLeft,
      rootOffsetWidth: this.sliderRef.current.offsetWidth,
      currentPosition: Array.isArray(this.props.value)
        ? [
            Math.round(
              (this.props.value[0] * this.sliderRef.current.offsetWidth) /
                (this.props.max - this.props.min)
            ) - 7,
            Math.round(
              (this.props.value[1] * this.sliderRef.current.offsetWidth) /
                (this.props.max - this.props.min)
            ) - 7
          ]
        : [
            Math.round(
              (this.props.value * this.sliderRef.current.offsetWidth) /
                (this.props.max - this.props.min)
            ) - 7
          ]
    });

    this.firstHandleRef.current.addEventListener(
      "mousedown",
      this.firstHandleMouseDown
    );
    if (this.props.range)
      this.secondHandleRef.current.addEventListener(
        "mousedown",
        this.secondHandleMouseDown
      );
    document.addEventListener("mouseup", this.onMouseUp);
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("touchmove", e => {
      let pos = e.touches[0].pageX;
      let closest = this.positions.reduce(function(prev, curr) {
        return Math.abs(curr - pos) < Math.abs(prev - pos) ? curr : prev;
      });
      this.setState(
        {
          currentPosition: [closest - this.state.rootOffsetLeft - 7],
          showFirstHandleTooltip: true
        },
        () => {
          console.log("currentPosition", this.state.currentPosition[0]);
          this.props.onChange(
            this.state.currentPosition.map(pos =>
              Math.round(
                (pos / this.state.rootOffsetWidth) *
                  (this.props.max - this.props.min)
              )
            )
          );
        }
      );
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
              : this.state.currentPosition[0] / this.state.rootOffsetWidth
          }
        ></SliderProgress>
        <Tooltip
          text={Math.round(
            (this.state.currentPosition[0] / this.state.rootOffsetWidth) *
              (this.props.max - this.props.min) +
              this.props.min || 0
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
              (this.state.currentPosition[1] / this.state.rootOffsetWidth) *
                this.props.max
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
