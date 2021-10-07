import React, { Component } from "react";
import { Form, Button, Badge, Placeholder, ProgressBar } from "react-bootstrap";
//import Placeholder from 'react-bootstrap/Placeholder'

class AddPhone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      modal: null,
      rating: null,
      prize: null,
    };
  }

  create() {
    fetch("http://localhost:3000/iphone", {
      method: "Post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
        alert("data insert");
      });
    });
  }
  render() {
    return (
      <div>
        {/* <h1><Badge bg="danger">Creating...</Badge></h1> */}
        <h1>Creating........</h1>
        <ProgressBar animated now={45} />
       <div>
          <Form>
            <Form.Control
              type="text"
              onChange={(event) => {
                this.setState({
                  name: event.target.value,
                });
              }}
              placeholder="Enter Phone Name"
            />
            <br />
            <br />
            <Form.Control
              onChange={(event) => {
                this.setState({
                  modal: event.target.value,
                });
              }}
              placeholder="Enter Modal no..."
            />
            <br />
            <br />
            <Form.Control
              onChange={(event) => {
                this.setState({
                  rating: event.target.value,
                });
              }}
              placeholder="Enter Rating"
            />
            <br />
            <br />
            <Form.Control
              onChange={(event) => {
                this.setState({
                  prize: event.target.value,
                });
              }}
              placeholder="Enter Prize"
            />
            <br />
            <br />
            <Button
              variant="outline-success"
              type="Add Phone"
              onClick={() => {
                this.create();
              }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default AddPhone;
