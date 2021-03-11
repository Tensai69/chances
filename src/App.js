import React from "react";
import "./App.css";
import Options from "../src/components/Options/Options";
import Clicks from "../src/components/Clicks/Clicks";
import Buttons from "../src/components/Buttons/Buttons";
import "antd/dist/antd.css";
import { PageHeader, Button, Descriptions } from "antd";

const BUTTONS = ["black", "red", "blue", "gold"];

const renderContent = (column = 2) => (
  <Descriptions size="small" column={column}>
    <Descriptions.Item label="Created">
      <a href="https://vk.com/romulusheidi">Tensai69</a>
    </Descriptions.Item>
    <Descriptions.Item label="GitHub">
      <a href="https://github.com/tensai69">Tensai69</a>
    </Descriptions.Item>
    <Descriptions.Item label="Creation Time">2021</Descriptions.Item>
    <Descriptions.Item label="Editors">
      <a href="https://vk.com/mcave">Michael Papug</a>
      <a href="https://vk.com/mcave">Michael Papug</a>
    </Descriptions.Item>
  </Descriptions>
);

const Content = ({ children, extra }) => (
  <div className="content">
    <div className="main">{children}</div>
    <div className="extra">{extra}</div>
  </div>
);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: BUTTONS.reduce((acc, val) => {
        acc[val] = 0;
        return acc;
      }, {}),
      value: "",
      notUsedColors: [
        "brown",
        "lime",
        "purple",
        "cyan",
        "white",
        "grey",
        "fuchsia",
      ],
      description: "To start, you need to click on the circle",
    };
  }
  calculateSum = () => {
    return Object.keys(this.state.colors).reduce(
      (acc, val) => acc + this.state.colors[val],
      0
    );
  };
  handleButtonClick = (color) => () => {
    this.setState((prevState) => ({
      colors: {
        ...prevState.colors,
        [color]: prevState.colors[color] + 1,
      },
      description: "",
    }));
  };
  handleButtonClickBack = (color) => {
    return () => {
      this.setState((prevState) => ({
        colors: {
          ...prevState.colors,
          [color]: prevState.colors[color] ? prevState.colors[color] - 1 : 0,
        },
      }));
    };
  };
  handleChangeInput = (color) => {
    return (value) => {
      console.log("handle change called", color);
      this.setState((state) => ({
        colors: {
          ...state.colors,
          [color]: value,
        },
      }));
    };
  };

  deleteButton = (color) => (event) => {
    let newColorState = { ...this.state.colors };
    console.log(event);
    delete newColorState[color];
    this.setState((prevstate) => ({
      colors: newColorState,
      notUsedColors: [...prevstate.notUsedColors, color],
    }));
    console.log(this.state.notUsedColors);
  };

  handleChange = (value) => {
    console.log(`selected ${value}`);
    this.setState({ value: value });
  };
  deleteSubscription = () => {
    this.setState({ description: "" });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("213123");
    console.log(this.state.value);
    if (this.state.value.length > 0)
      this.setState((prevState) => ({
        colors: {
          ...prevState.colors,
          [this.state.value]: 0,
        },
      }));
    let newNotUsedColors = this.state.notUsedColors;
    newNotUsedColors = newNotUsedColors.filter((e) => e !== this.state.value);
    this.setState({ notUsedColors: newNotUsedColors });
  };

  render() {
    console.log(this.state);
    const sumOfColors = this.calculateSum();
    return (
      <div className="all">
        <PageHeader
          className="site-page-header-responsive"
          title="Chances"
          subTitle="This is a chances app"
          extra={[
            <Button key="2">unused button</Button>,
            <Button key="1" type="primary">
              unused button
            </Button>,
          ]}
        >
          <Content>{renderContent()}</Content>
        </PageHeader>
        <div className="clickClack">Total clicks: {sumOfColors}</div>
        <div className="App">
          <Buttons
            colors={this.state.colors}
            handleButtonClick={this.handleButtonClick}
            calculateSum={this.calculateSum}
            description={this.state.description}
            handleChangeInput={this.handleChangeInput}
          />
          <Clicks
            colors={this.state.colors}
            handleButtonClickBack={this.handleButtonClickBack}
            deleteButton={this.deleteButton}
          />
        </div>
        <Options
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          notUsedColors={this.state.notUsedColors}
        />
      </div>
    );
  }
}

export default App;
