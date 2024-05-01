import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contacts from "../assets/img1.png";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';



const Contact = () => {
  const [inputValue, setInputValue] = useState(
    {
      email: '',
      message: ''
    }
  )
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value })
    console.log(value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('clicked')
    setInputValue({
      email: '',
      message: ''
    })
    setShowSuccessMessage(true);
    setTimeout(() => {
        setShowSuccessMessage(false);
    }, 2000);
  }
  return (
    <>
      <Container fluid className="contact">
        <div className='card' style={{ color: '#009688' }}>
          <div class="img-box">
            <img src={contacts} />
          </div>
          <div class="content">
            <h2>Hire Me</h2>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" name='email' value={inputValue.email} onChange={handleInput} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} name='message' value={inputValue.message} onChange={handleInput} />
              </Form.Group>
              <Button variant="primary" type="submit" className='button'>
                Submit
              </Button>
            </Form>
            {/* <a href="">Read More</a> */}
          </div>
        </div>
        {showSuccessMessage && (
                    <Alert variant="success">User Added Successfully!</Alert>
                )}
      </Container>
    </>
  )
}

export default Contact