import React, { Component } from "react";
import { capFirstLetter } from "../Other/capFirstLetter";
import "./Options.css";
import { Select, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

export default class Options extends Component {
  render() {
    return (
      <div className="optionsForm">
        <form onSubmit={this.props.handleSubmit}>
          <label>
            You can add more buttons:
            <Select
              defaultValue="choose"
              style={{ width: 120 }}
              onChange={this.props.handleChange}
              value={this.props.value}
            >
              <Option value="" disabled>
                choose
              </Option>
              {this.props.notUsedColors.map((color) => (
                <Option key={color} value={color}>
                  {capFirstLetter(color)}
                </Option>
              ))}
            </Select>
            <Button type="primary" icon={<PlusOutlined />} htmlType="submit" />
          </label>
        </form>
      </div>
    );
  }
}
