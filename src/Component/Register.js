import axios from "axios";
import React, { useState } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [field, setField] = useState("");
  const [service, setService] = useState("");
  const [timeSession, setTimeSession] = useState("");
  const [priceService, setPriceService] = useState("");

  const addService = () => {
    axios
      .post(`https://62d3e4435112e98e4846e84e.mockapi.io/serviceProviderAPI`, {
        firstName,
        lastName,
        field,
        service,
        timeSession,
        priceService,
      })
      .then((response) => {
        console.log(response);
        navigate("/service");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="formRegising">
        <Form>
          <h1>سجل معنا الأن وتميز بخدمتك</h1>
          <br />
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                placeholder="الاسم الاول"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                placeholder="الاسم الاخير"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                onChange={(e) => {
                  setField(e.target.value);
                }}
                type="text"
                placeholder="المجال"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Select
                onChange={(e) => {
                  setService(e.target.value);
                }}
                defaultValue="Choose..."
              >
                <option>الخدمة التي رغب بتقديمها</option>
                <option>استشارة</option>
                <option>دعم فني</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Select
                onChange={(e) => {
                  setTimeSession(e.target.value);
                }}
                defaultValue="Choose..."
              >
                <option>حدد الوقت</option>
                <option>15 دقيقة</option>
                <option>30 دقيقة</option>
                <option>45 دقيقة</option>
                <option>60 دقيقة</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                onChange={(e) => {
                  setPriceService(e.target.value);
                }}
                type="text"
                placeholder="حدد السعر SAR"
              />
            </Form.Group>
          </Row>
          <Button onClick={addService} id="button" variant="primary" size="lg">
            التسجيل
          </Button>
        </Form>
      </div>
    </div>
  );
}
