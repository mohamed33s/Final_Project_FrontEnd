import React, { useEffect, useState } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import axios from "axios";

export default function BookingViewRating() {
  const [itemsRating, setItemsRating] = useState([]);

  useEffect(() => {
    axios
      .get(`https://62d3e4435112e98e4846e84e.mockapi.io/commentAPI`)
      .then((response) => {
        console.log(response.data);
        setItemsRating(response.data);
      });
  }, []);

  return (
    <div className="formAndView">
      <div className="formBooking">
        <Form>
          <h1>احجز موعد استشارة</h1>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="text" placeholder="الاسم" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="text" placeholder="رقم الجوال" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="email" placeholder="الايميل" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Select defaultValue="Choose...">
                <option>كيف نساعدك؟</option>
                <option>استشارة</option>
                <option>دعم فني</option>
                <option>اخرى</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Select defaultValue="Choose...">
                <option>المجال</option>
                <option>الشبكات</option>
                <option>الأمن السيبراني و أمن المعلومات</option>
                <option>هندسة البرمجيات</option>
                <option>الأجهزة و التقنيات</option>
                <option>اخري</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Button id="button" variant="primary" type="submit" size="lg">
            حجز
          </Button>
        </Form>
      </div>

      <div className="viewRating">
        <h1>آراء العملاء</h1>
        {itemsRating.map((item) => (
                                  <div className="comment">
            <h4 key={item.id}>{item.comment}</h4>
            <p>{item.userName}</p>
          </div>
            ))}
      </div>
    </div>
  );
}
