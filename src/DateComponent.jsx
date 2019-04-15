import React, { Component } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { MuiPickersUtilsProvider, InlineDatePicker } from "material-ui-pickers";

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
            <InlineDatePicker
              keyboard
              clearable
              variant="outlined"
              label="Start Date"
              value={this.state.selectedDateFirst}
              onChange={this.handleDateChangeFirst}
              format="MM/dd/yyyy"
              mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
            />
          </div>
        </MuiPickersUtilsProvider>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className="pickers">
            <InlineDatePicker
              keyboard
              clearable
              variant="outlined"
              label="End Date"
              value={this.state.selectedDateSecond}
              onChange={this.handleDateChangeSecond}
              maxDate={this.state.range}
              format="MM/dd/yyyy"
              mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
            />
          </div>
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}

export default DateComponent;
