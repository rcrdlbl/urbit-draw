const _jsxFileName = "/Users/przemyslaw/urbit-draw/src/js/components/canvas.js";import React, { Component } from "react";

class Canvas extends Component {
  constructor(props) {
    super(props);Canvas.prototype.__init.call(this);Canvas.prototype.__init2.call(this);Canvas.prototype.__init3.call(this);Canvas.prototype.__init4.call(this);;
    this.state = {
      isDrawing: false,
      strokeColor: "#FFFFFF",
      position: { offsetX: 0, offsetY: 0 },
      stroke: [],
    };
  }

  __init() {this.onMouseDown = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    this.setState({ isDrawing: true, position: { offsetX, offsetY } });
  }}

  __init2() {this.onMouseMove = ({ nativeEvent }) => {
    if (this.state.isDrawing) {
      const { offsetX, offsetY } = nativeEvent;
      const newPositionData = {
        start: this.state.position,
        stop: { offsetX, offsetY },
      };
      const newStroke = this.state.stroke.concat(newPositionData);
      this.setState({ stroke: newStroke });
      console.log(newPositionData);
      this.draw(
        this.state.position,
        newPositionData.stop,
        this.state.strokeColor
      );
    }
  }}

  __init3() {this.endStroke = () => {
    if (this.state.isDrawing) {
      this.setState({ isDrawing: false, stroke: [] });
    }
  }}

  __init4() {this.draw = (oldPosition, newPosition, strokeColor) => {
    const { offsetX, offsetY } = newPosition;
    const { offsetX: x, offsetY: y } = oldPosition;

    this.ctx.beginPath();
    this.ctx.strokeStyle = strokeColor;
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(offsetX, offsetY);
    this.ctx.stroke();
    this.setState({ position: { offsetX, offsetY } });
  }}

  componentDidMount() {
    this.canvas.width = 1200;
    this.canvas.height = 1200;
    this.canvas.style.width = "600px";
    this.canvas.style.height = "600px";
    this.ctx = this.canvas.getContext("2d");
    this.ctx.scale(2, 2);
    this.ctx.lineJoin = "round";
    this.ctx.lineCap = "round";
    this.ctx.lineWidth = 5;
  }

  render() {
    return (
      React.createElement('div', { className: "center flex items-center justify-center w-100 h-100 "      , __self: this, __source: {fileName: _jsxFileName, lineNumber: 69}}
        , React.createElement('canvas', {
          ref: (ref) => (this.canvas = ref),
          style: { background: "#333" },
          onMouseDown: this.onMouseDown,
          onMouseLeave: this.endStroke,
          onMouseUp: this.endStroke,
          onMouseMove: this.onMouseMove,
          className: "center ba b--gray4 b--gray1-d br1"    , __self: this, __source: {fileName: _jsxFileName, lineNumber: 70}}
        )
      )
    );
  }
}

export default Canvas;
