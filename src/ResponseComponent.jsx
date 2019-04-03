import React, { Component } from "react";

// class ResponseComponent extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>ResponseComponent</h1>
//             </div>
//         );
//     }
// }

// export default ResponseComponent;

import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import "react-json-inspector/json-inspector.css";
// import "./Footer.css";
import { any } from "prop-types";

const jsonURL = "https://jsonplaceholder.typicode.com/users";

class ResponseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonData: any
        };
    }

    componentDidMount() {
        this.fetchJson();
    }

    fetchJson() {
        fetch(jsonURL)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    jsonData: data
                });
            })
            .catch(() => console.log("Error in fetching"));
    }

    deleteData = () => {
        this.setState({
            jsonData: null
        });
    };

    saveData = () => {
        let prettyJsondata = JSON.stringify(this.state.jsonData, null, 2);
        this.download(prettyJsondata, "json.txt", "text/plain");
    };

    download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], { type: contentType });
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }

    expand = () => {
        return true;
    };

    render() {
        var Inspector = require("react-json-inspector");
        return (
            <div
                style={{
                    textAlign: "left"
                }}
            >
                <div
                    style={{
                        flexGrow: 1,
                        marginLeft: "20px",
                        marginTop: "20px"
                    }}
                >
                    <Button
                        variant="fab"
                        aria-label="Delete"
                        style={{ marginBottom: "10px" }}
                        onClick={this.deleteData}
                    >
                        <DeleteIcon />
                    </Button>
                    <Button
                        variant="fab"
                        aria-label="Save"
                        style={{ marginLeft: "20px", marginBottom: "10px" }}
                        onClick={this.saveData}
                    >
                        <SaveIcon />
                    </Button>
                </div>
                <div
                    style={{
                        flexGrow: 11,
                        marginLeft: "20px",
                        marginTop: "20px"
                    }}
                >
                    <Inspector
                        data={this.state.jsonData}
                        isExpanded={this.expand}
                    />
                </div>
            </div>
        );
    }
}

export default ResponseComponent;
