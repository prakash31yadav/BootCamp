import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import customerService from "../services/customer.service";

const AddCustomer = () => {
  const [cname, setCname] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [caddress, setCaddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveCustomer = (e) => {
    e.preventDefault();

    const customer = { cname,userName,password, caddress,phone, id };

    if (id) {
      //update
      customerService
        .update(customer)
        .then((response) => {
          alert("Details updated Successfully");
          console.log("Customer data updated successfully", response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      customerService
        .create(customer)
        .then((response) => {
          alert("Details Saved");
          console.log("Customer added successfully", response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      customerService
        .get(id)
        .then((customer) => {
          setCname(customer.data.cname);
          setUserName(customer.data.userName);
          setPassword(customer.data.password);
          setCaddress(customer.data.caddress);
          setPhone(customer.data.phone);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <h3 className="ab">
        <b>
          <u>Add/Update Customer</u>
        </b>
      </h3>
      <form className="form1">
        <br></br>
        <div className="form-group">
          {/* <p className="prsub">Customer Name:</p> */}
          <input
            type="text"
            className="form-control col-4"
            id="cname"
            value={cname}
            onChange={(e) => setCname(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <br></br>
        <div className="form-group">
          {/* <p className="prsub">Customer Name:</p> */}
          <input
            type="text"
            className="form-control col-4"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <br></br>
        <div className="form-group">
          {/* <p className="prsub">Customer Name:</p> */}
          <input
            type="password"
            className="form-control col-4"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
          />
        </div>
        <br></br>
        <div className="form-group">
          {/* <p className="prsub">Customer Address:</p> */}
          <input
            type="text"
            className="form-control col-4"
            id="caddress"
            value={caddress}
            onChange={(e) => setCaddress(e.target.value)}
            placeholder="Enter your address"
          />
        </div>
        <br></br>
        <div className="form-group">
          {/* <p className="prsub">Customer Name:</p> */}
          <input
            type="text"
            className="form-control col-4"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your Phone no"
          />
        </div>
        <div>
          <button onClick={(e) => saveCustomer(e)} id="svep">
            Save
          </button>
          <Link to="/user">
            <button className="bckc">Back To list</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddCustomer;
