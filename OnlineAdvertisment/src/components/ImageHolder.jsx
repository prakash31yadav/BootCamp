import React from "react";
import { Link } from "react-router-dom";

export default function ImageHolder() {
  return (
    <div className="container mb-2 mt-4 ">
      <div className="row">
        <div className="col-lg-4 col-lg-10">
          <Link to="/store/accessories"><img
            src={require("../static/21.jpeg")}
            alt="image1"
            className="img-fluid rounded"
          />
          </Link>
        </div>
      </div>
    </div>
  );
}
