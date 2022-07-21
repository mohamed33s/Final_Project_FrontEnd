import React, { useEffect, useState } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function RatingComment() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");

  const addComment = () => {
    axios
      .post(`https://62d3e4435112e98e4846e84e.mockapi.io/commentAPI`, {
          userName,
          comment,
      })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="formRegising">
        <Form>
          <h1 style={{ textAlign: "center" }}>قيمنا!</h1>
          <br />

          <div class="container">
            <div class="starrating risingstar d-flex justify-content-center flex-row-reverse">
              <input type="radio" id="star5" name="rating" value="5" />
              <label for="star5" title="5 star">
                5
              </label>
              <input type="radio" id="star4" name="rating" value="4" />
              <label for="star4" title="4 star">
                4
              </label>
              <input type="radio" id="star3" name="rating" value="3" />
              <label for="star3" title="3 star">
                3
              </label>
              <input type="radio" id="star2" name="rating" value="2" />
              <label for="star2" title="2 star">
                2
              </label>
              <input type="radio" id="star1" name="rating" value="1" />
              <label for="star1" title="1 star">
                1
              </label>
            </div>
          </div>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                type="text"
                placeholder="الاسم"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              onChange={(e) => {
                setComment(e.target.value);
              }}
              as="textarea"
              rows={3}
              placeholder="اكتب رايك"
            />
          </Form.Group>

          <Button onClick={addComment} id="button" variant="primary" size="lg">
            ارسال
          </Button>
        </Form>
      </div>
    </div>
  );
}
