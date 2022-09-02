import React from "react";
import { useLocation, Link } from "react-router-dom";
import Contact from "./Contact";
import Navbar from "./Navbar";
export default function Card() {
  const { state } = useLocation();
  const { item } = state;

  return (
    <>
      <Navbar />

      <div className="container">
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Place an order for :{" "}
                  <span className="text-primary">{item[1].Title}</span>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <Contact
                  order={{
                    Title: item[1].Title,
                    PhotoURL: item[1].PhotoURL,
                    Price: item[1].Price,
                  }}
                  DBRef={"/Orders"}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body">
          <h5>Title : {item[1].Title}</h5>
          <img
            src={item[1].PhotoURL}
            className="img-fluid rounded"
            alt="art_work"
          />
          <p className="card-text pt-3">
            {" "}
            <span className="h5">Description</span> :{item[1].Description}
          </p>
          <h4 className="card-text pt-3">
            Price :<span className="text-success">{item[1].Price}</span> DT
          </h4>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-success w-25"
          >
            Place an order
          </button>
          <div className="card-footer bg-light ">
            <Link to="/">
              <button className="btn btn-link">return to home page</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
