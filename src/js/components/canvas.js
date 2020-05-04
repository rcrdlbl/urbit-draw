import React, { Component } from "react";

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawing: false,
      strokeColor: "#FFFFFF",
      position: { offsetX: 0, offsetY: 0 },
      stroke: [],
    };
  }

  onMouseDown = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    this.setState({ isDrawing: true, position: { offsetX, offsetY } });
  };

  onMouseMove = ({ nativeEvent }) => {
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
  };

  endStroke = () => {
    if (this.state.isDrawing) {
      this.setState({ isDrawing: false, stroke: [] });
    }
  };

  draw = (oldPosition, newPosition, strokeColor) => {
    const { offsetX, offsetY } = newPosition;
    const { offsetX: x, offsetY: y } = oldPosition;

    this.ctx.beginPath();
    this.ctx.strokeStyle = strokeColor;
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(offsetX, offsetY);
    this.ctx.stroke();
    this.setState({ position: { offsetX, offsetY } });
  };

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
      <div className="center flex items-center justify-center w-100 h-100 ">
        <canvas
          ref={(ref) => (this.canvas = ref)}
          style={{ background: "#333" }}
          onMouseDown={this.onMouseDown}
          onMouseLeave={this.endStroke}
          onMouseUp={this.endStroke}
          onMouseMove={this.onMouseMove}
          className="center ba b--gray4 b--gray1-d br1"
        />
      </div>
    );
  }
}

export default Canvas;
