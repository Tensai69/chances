import React, { Component } from "react";
import { capFirstLetter } from "./../Other/capFirstLetter";
import { Button, Card } from "antd";
import { RollbackOutlined, CloseOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../Clicks/Clicks.css";

export default class Clicks extends Component {
  render() {
    return (
      <div className="clicks">
        {Object.keys(this.props.colors).map((color) => (
          <Card
            key={color}
            title={`${[capFirstLetter(color)]} clicks: ${
              this.props.colors[color]
            }`}
          >
            <p></p>
            <Button
              type="primary"
              onClick={this.props.handleButtonClickBack(color)}
              icon={<RollbackOutlined />}
            >
              {" "}
              GO BACK{" "}
            </Button>
            <div></div>
            <Button
              type="default"
              onClick={this.props.deleteButton(color)}
              icon={<CloseOutlined />}
              danger
            >
              {" "}
              Delete color{" "}
            </Button>
          </Card>
        ))}
      </div>
    );
  }
}
