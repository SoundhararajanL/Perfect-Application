
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Calculator from './cal';
import Length from './length';
import NavbarPage from './nav';
import BMI from './BMI';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showModal1: false,
      showModal2: false,
    };
  }
// 1
  handleCalculator = () => {
    this.setState({ showModal: true });
  }
  handleLength = () => {
    this.setState({ showModal1: true });
  
  }
  handleBMIcalculator = () => {
    this.setState({ showModal2: true });
  
  }
// 2
  handleClose = () => {
    this.setState({ showModal: false });
  }
  handleClose1 = () => {
    this.setState({ showModal1: false });
  }
  handleClose2 = () => {
    this.setState({ showModal2: false });
  }

  render() {
    return (
      <>
        {/* NAVBAR */}
        <NavbarPage />
  
        {/* Cards */}
        <div style={{ display: "-webkit-box", justifyContent: 'space-between' }}>
          {/* Calculator CARD */}
          <Card
            bg="light"
            text="dark"
            style={{ width: '9rem' }}
            onClick={this.handleCalculator}
          >
            <Card.Header>Calculator</Card.Header>
            <Card.Body>
              <Card.Img variant="top" src="https://shorturl.at/psLUZ" />
            </Card.Body>
          </Card>
  
          {/* Length CARD */}
          <Card
            bg="light"
            text="dark"
            style={{ width: '9rem' }}
            onClick={this.handleLength}
          >
            <Card.Header>Length</Card.Header>
            <Card.Body>
              <Card.Img variant="top" src="https://shorturl.at/awJNX" />
            </Card.Body>
          </Card>

          
          {/* BMIcalculator CARD */}
          <Card
            bg="light"
            text="dark"
            style={{ width: '9rem' }}
            onClick={this.handleBMIcalculator}
          >
            <Card.Header>BMIcalculator</Card.Header>
            <Card.Body>
              <Card.Img variant="top" src="https://shorturl.at/qFRU0" />
            </Card.Body>
          </Card>
        </div>
  
        {/* Calculator MODAL */}
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Calculator</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Calculator />
          </Modal.Body>
        </Modal>
  
        {/* Length MODAL */}
        <Modal show={this.state.showModal1} onHide={this.handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>Length</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Length />
          </Modal.Body>
        </Modal>

        {/* BMI calculator MODAL */}
        <Modal show={this.state.showModal2} onHide={this.handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>BMI calculator</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BMI />
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
}

export default Main;
