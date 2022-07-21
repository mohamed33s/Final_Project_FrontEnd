import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImgUser from "./Images/default-user.png";
import axios from "axios";

export default function ServiceProviders() {
  const [itemsServiceProvidor, setItemsServiceProvidor] = useState([]);

  useEffect(() => {
    axios
      .get(`https://62d3e4435112e98e4846e84e.mockapi.io/serviceProviderAPI`)
      .then((response) => {
        console.log(response.data);
        setItemsServiceProvidor(response.data);
      });
  }, []);

  const twoLinks = () => {
    let locs = ["https://wa.me/+966500303116"];

    for (let i = 0; i < locs.length; i++) {
      window.open(locs[i]);
    }
  };
  return (
    <div>
      {itemsServiceProvidor.map((item) => (
        <div className="container containerCards">
          <div className="row text-center">
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-2 px-2">
                <img
                  src={ImgUser}
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h3 className="mb-0" key={item.id}>
                  {item.firstName} {item.lastName}
                </h3>
                <br />
                <p>{item.field}</p>
                <p>{item.service}</p>
                <span className="small text-uppercase text-muted">
                  {item.timeSession} - {item.priceService}SAR
                </span>
                <br />
                <Link to="/rating">
                  <button
                    onClick={twoLinks}
                    type="button"
                    className="btn btn-primary btn-lg"
                    id="button"
                  >
                    اختيار
                  </button>
                </Link>

                <ul className="social mb-0 list-inline mt-3">
                  <div className="liCards">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
