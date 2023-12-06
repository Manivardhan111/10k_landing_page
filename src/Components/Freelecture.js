import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import guy_working from "../Assets/guy_working_on_comp.png";

const Freelecture = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleRequestCallbackModal = () => setShow(true);
  return (
    <div className="d-flex">
      <div style={{width:"50%"}}>
        <h2>Grab Your Free Lecture</h2>
        <p>
          Experience the 1000coders vibe for FREE! Join our web development
          lecture and kickstart your coding journey at no cost. Seize this
          chance to learn and grow in the exciting world of web development!
        </p>
        <button
          className="btn enrbtn"
          style={{ backgroundColor: "rgb(255, 133, 65)", color: "white" }}
        >
           Watch Free Lecture
        </button>
        <button
          onClick={handleRequestCallbackModal}
          style={{
            textDecoration: "none",
            color: "rgb(255, 133, 65)",
            border: "none",
            backgroundColor: "white",
          }}
          type="button"
        >
          Request a Callback
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header
            style={{ backgroundColor: "rgb(255, 133, 65)", color: "white" }}
          >
            <Modal.Title>ENQUIRY FORM</Modal.Title>
            <Button variant="light" onClick={handleClose}>
              <span style={{ color: "rgb(255, 133, 65)" }}>X</span>
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="mobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your mobile number"
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="qualification">
                <Form.Label>Highest Educational Qualification</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your qualification"
                />
              </Form.Group>
              <Form.Group controlId="passingYear">
                <Form.Label>Year of Passing</Form.Label>
                <Form.Control type="text" placeholder="Enter year of passing" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{
                color: "rgb(255, 133, 65)",
                backgroundColor: "white",
                border: "none",
              }}
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              style={{
                color: "white",
                backgroundColor: "rgb(255, 133, 65)",
                border: "none",
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div style={{width:"50%"}}>
        <img src={guy_working} alt="" style={{width:"250px",height:"300px"}} />
      </div>
    </div>
  );
};

export default Freelecture;
