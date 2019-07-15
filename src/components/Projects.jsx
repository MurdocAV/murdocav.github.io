import React from "react";
import { Card, Button } from "react-bootstrap";
import "../App.css";

class Projects extends React.Component {
  state = {
    outsideLink: false
  };

  goTo() {
    this.setState({ outsideLink: !this.state.outsideLink });
  }

  render() {
    return (
      <React.Fragment>
        <Card
          onClick={
            this.state.outsideLink &&
            window.location.replace("https://murdocav.github.io/home/")
          }
        >
          <Card.Header>Premium Content || Animations</Card.Header>
          <Card.Body>
            <Card.Title>
              Based in Auckland. <span>Help me get on on a payroll.</span>
            </Card.Title>
            <Button onClick={() => this.goTo()} variant="primary">
              Upcoming page
            </Button>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default Projects;
