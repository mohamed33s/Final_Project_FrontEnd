import React from "react";
import Logoimg from "./Images/logo.png";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavFooterBar() {
  return (
    <div>
      <div>
        <Navbar className="px-3  Navbar sticky-top" variant="dark">
          <Image
            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
            src={Logoimg}
          ></Image>
          <Link className="linkTag" to="/">
            <Navbar.Brand href="/">مستشارك التقني</Navbar.Brand>
          </Link>
          <Nav className="me-auto LinkNavbar">
            <Nav.Link href="/">الرئسية</Nav.Link>
            <Nav.Link href="/register">التسجيل</Nav.Link>
            <Nav.Link href="#achievements">الإنجازات</Nav.Link>
            <Nav.Link href="#about">من نحن</Nav.Link>
            <Nav.Link href="#booking">تواصل معنا</Nav.Link>
            <Nav.Link href="#booking">أحجز استشارة الان</Nav.Link>
          </Nav>
        </Navbar>
      </div>

      <div className="wrapper">
        <ul>
          <li className="whatsapp">
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
            <div className="slider">
              <a
                href="https://wa.me/+966500303116"
                target="_blank"
                className="linkTag"
              >
                <p>whatsapp</p>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <a href="#" class="top">
          &#8593;
        </a>
      </div>
    </div>
  );
}


