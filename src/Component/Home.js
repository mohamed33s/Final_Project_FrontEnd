import React, { useEffect, useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import Logoimg from "./Images/logo.png";
import CarouselImg1 from "./Images/bastService.jpeg";
import CarouselImg2 from "./Images/bestProvider.png";
import CarouselImg3 from "./Images/bastSiper.jpeg";
import Chat from "./Images/chat.png";
import Done from "./Images/done.png";
import Profile from "./Images/profile.png";
import FormAndView from "./Booking&ViewRating";
import CardsFields from "./CardsFields";
import CardsFieldsData from "./CardsFieldsData";
import { Link } from "react-router-dom";

export default function () {
  let Cards = CardsFieldsData.map((cards) => {
    return <CardsFields cards={cards} />;
  });

  return (
    <div>
      <Carousel fade style={{ marginTop: "0%"}}>
        <Carousel.Item>
          <img
            className="d-block w-100 imgcarousel"
            src={CarouselImg1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="carouselH3">
              لا تترد ابدًا في طلب الخدمة فا لدينا افضل التقنيين
            </h3>
            <Link to="/service">
              <Button id="button">اطلب الخدمة الآن</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imgcarousel"
            src={CarouselImg2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="carouselH3">
              أحرص على طلب الاستشارة من الشخص المناسب في شتى مجالات الثنية
            </h3>
            <Link to="/service">
              <Button id="button">أطلب الإستشارة الآن</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imgcarousel"
            src={CarouselImg3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="carouselH3">
              احرص على تثقيف نفسك في مجال الأمن السيبراني
            </h3>
            <Link to="/service">
              <Button id="button">أطلب الخدمة الآن</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="fields">
        <h1>المجالات</h1>
        <div class="container2">{Cards}</div>
      </div>

      <hr />
      <div className="achievements" id="achievements">
        <h1>الإنجازات</h1>
        <div className="icons">
          <div>
            <img src={Profile} />
            <p>20</p>
            <p>الاستشاريين</p>
          </div>
          <div>
            <img src={Done} />
            <p>59</p>
            <p>الاستشرات المنجزة</p>
          </div>
          <div>
            <img src={Chat} />
            <p>30</p>
            <p>خدمات الدعم الفني</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="about">
        <h1 id="about">نبذة عنا</h1>
        <p>
          مستشارك التقني هو موقع يقدم خدمة لأي شخص يستخدم التقنية بأشكالها
          المختلفة ، وهذه الخدمة إما باستشارة متخصصين في المجالات التقنية أو
          بتقديم خدمة فنية من خلال فنيين أو متخصصين. ويعتبر مستشارك التقني
          رابطًا بين العميل ومزود الخدمة سواء كان متخصصًا أو فنيًا.
        </p>
      </div>
      <div id="booking">
        <FormAndView />
      </div>
    </div>
  );
}
