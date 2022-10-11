import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Admin() {
  return (
    <div className="container" id="admin">
      <div className="m-5 p-5">
        <Link to="/prodlist">
          <button className="button1">View Advertisment List</button>
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <Link to="/custlist">
          <button className="button2">View Customer List</button>
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <Link to="/orderlist">
        <button className="button3">View Order List</button>
        </Link>
      </div>
    </div>
  );
}
