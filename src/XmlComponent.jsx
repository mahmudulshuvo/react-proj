import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class XmlComponent extends Component {
    render() {
        return (
            <div
                style={{
                    marginTop: "20px",
                    marginLeft: "20px"
                }}
            >
                <Card
                    style={{
                        width: 300
                    }}
                >
                    <CardContent>
                        <Typography color="primary" variant="h3" gutterBottom>
                            My Card
                        </Typography>

                        <Typography color="inherit" variant="heading">
                            Card Content
                        </Typography>
                        <Typography component="p" color="default">
                            Paragraph
                            <br />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained">
                            Button
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default XmlComponent;
