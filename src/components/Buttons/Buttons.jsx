import React, { Component } from "react";
import { capFirstLetter } from "../../components/Other/capFirstLetter";
import "./Buttons.css";
import { Progress, Card, InputNumber } from "antd";
import "antd/dist/antd.css";

export default class Buttons extends Component {
  render() {
    const sumOfColors = this.props.calculateSum();
    return (
      <div className="buttons">
        {Object.keys(this.props.colors).map((color) => {
          const colorCount = (this.props.colors[color] / sumOfColors) * 100;
          return (
            <React.Fragment key={color}>
              <Card title={`Button ${[capFirstLetter(color)]}`}>
                <Progress
                  className="progress"
                  type="circle"
                  onClick={this.props.handleButtonClick(color)}
                  percent={isNaN(colorCount) ? 0 : colorCount.toFixed(2)}
                  strokeColor={color}
                  format={(e) => `${e}%`}
                />

                <p>{this.props.description}</p>
                <InputNumber
                  min={0}
                  max={9999}
                  value={this.props.colors[color]}
                  onChange={this.props.handleChangeInput(color)}
                />
              </Card>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}
