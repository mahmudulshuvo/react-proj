import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class DateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectFirst: false,
            selectedDateFirst: new Date(),
            selectedDateSecond: new Date(),
            rangeProblem: 0
        };
    }

    handleDateChangeFirst = event => {
        console.log("first ", new Date(event.currentTarget.value));
        this.setState({
            selectFirst: true,
            selectedDateFirst: event.currentTarget.value
        });
    };

    handleDateChangeSecond = event => {
        console.log("second ", new Date(event.currentTarget.value));
        let startDate = new Date(this.state.selectedDateFirst);
        let endDate = new Date(event.currentTarget.value);
        let range = this.daysBetween(startDate, endDate);

        console.log("range ", range);

        if (!this.state.selectFirst) {
            this.setState({
                rangeProblem: true
            });
            toast.error("Please select start date !", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else if (endDate.getTime() < startDate.getTime()) {
            console.log("first block");
            this.setState({
                rangeProblem: true
            });
            toast.error("End date can't be less than start date", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else if (range > 10) {
            console.log("second block");
            this.setState({
                rangeProblem: true
            });
            toast.error("End date can't be more than 10 days", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            console.log("third block");
            this.setState({
                selectedDateSecond: event.currentTarget.value,
                rangeProblem: false
            });
            toast.success("Success!", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    };

    daysBetween = (date1, date2) => {
        console.log("called");
        // The number of milliseconds in one day
        var ONE_DAY = 1000 * 60 * 60 * 24;

        // Convert both dates to milliseconds
        var date1_ms = date1.getTime();
        var date2_ms = date2.getTime();

        // Calculate the difference in milliseconds
        var difference_ms = Math.abs(date1_ms - date2_ms);

        // Convert back to days and return
        return Math.round(difference_ms / ONE_DAY);
    };

    render() {
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
                <div>
                    <TextField
                        id="calender"
                        label="Start Date"
                        type="date"
                        style={{
                            position: "relative",
                            top: 20
                        }}
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={this.handleDateChangeFirst}
                    />
                </div>

                <div>
                    <TextField
                        error={this.state.rangeProblem}
                        id="calender"
                        label="End Date"
                        type="date"
                        style={{
                            position: "relative",
                            top: 20
                        }}
                        InputLabelProps={{
                            shrink: true
                        }}
                        onChange={this.handleDateChangeSecond}
                    />
                    <ToastContainer />
                </div>
            </div>
        );
    }
}

export default DateComponent;
