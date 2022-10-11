import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function UserList() {
  return (
    <div className="container" id="userlist">
      <div className="m-5 p-5">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Link to="/buy">
          <button className="butt1">Buy Product</button>
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <Link to="/seeorder">
          <button className="butt2">See Your Order</button>
        </Link>
      </div>
    </div>
  );
}
