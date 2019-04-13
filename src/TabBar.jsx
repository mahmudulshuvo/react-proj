import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ResponseComponent from "./ResponseComponent";
import XmlComponent from "./XmlComponent";
import DateComponent from "./DateComponent";
// import Typography from "@material-ui/core/Typography";

function TabContainer(props) {
  return (
    <div>
      {props.children === "response" ? <ResponseComponent /> : null}

      {props.children === "xml" ? <XmlComponent /> : null}

      {props.children === "date" ? <DateComponent /> : null}
    </div>
  );
}

class TabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div
        style={{
          flexGrow: 1
        }}
      >
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="response" />
            <Tab label="xml" />
            <Tab label="date" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>response</TabContainer>}
        {value === 1 && <TabContainer>xml</TabContainer>}
        {value === 2 && <TabContainer>date</TabContainer>}
      </div>
    );
  }
}

export default TabBar;
