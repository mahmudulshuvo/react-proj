import React, { Component } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { DatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";

class DateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDateFirst: new Date(),
      selectedDateSecond: new Date(),
      range: new Date().setDate(new Date().getDate() + 10)
    };
  }

  handleDateChangeFirst = date => {
    console.log("first ", date);
    let copiedDate = new Date(date.getTime());
    this.setState({
      selectedDateFirst: date,
      range: copiedDate.setDate(copiedDate.getDate() + 10)
    });
  };

  handleDateChangeSecond = date => {
    console.log("second", date);
    this.setState({
      selectedDateSecond: date
    });
  };

  render() {
    console.log("render");
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          textAlign: "left",
          margin: "100px",
          justifyContent: "space-between"
        }}
      >
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className="pickers">
            <DatePicker
              value={this.state.selectedDateFirst}
              onChange={this.handleDateChangeFirst}
            />
          </div>
        </MuiPickersUtilsProvider>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className="pickers">
            <DatePicker
              value={this.state.selectedDateSecond}
              onChange={this.handleDateChangeSecond}
              maxDate={this.state.range}
            />
          </div>
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}

export default DateComponent;
