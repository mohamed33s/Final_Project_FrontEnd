import React from "react";
import { Link } from "react-router-dom";

export default function CardsFields(props) {
  return (
    <div>
      <div class="box">
        <div class="imgBox">
          <img src={props.cards.img} alt="" />
        </div>
        <div class="content">
          <Link className="linkTag" to="/service">
            <h2>{props.cards.field}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
