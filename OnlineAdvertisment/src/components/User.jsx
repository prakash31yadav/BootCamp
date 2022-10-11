import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import customerService from "../services/customer.service";
import "./style.css";

const User = () => {
  const [customers, setCustomers] = useState([]);

  const init = () => {
    customerService
      .getAll()
      .then((response) => {
        console.log("Printing customers data", response.data);
        setCustomers(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log("Printing id", id);
    customerService
      .remove(id)
      .then((response) => {
        console.log("customer deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h3>List of Customers</h3>
      <hr />
      <div>
        <Link to="/addcust" className="btn  mb-2" id="aprod">
          Add Yourself
        </Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th> User Id</th>
              <th> Name</th>
              <th> userName</th>
              <th> Password</th>
              <th> Address</th>
              <th> Phone</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.cname}</td>
                <td>{customer.userName}</td>
                <td>{customer.password}</td>
                <td>{customer.caddress}</td>
                <td>{customer.phone}</td>
                <td>
                  <Link
                    className="btn "
                    id="uprod"
                    to={`/customers/edit/${customer.id}`}
                  >
                    Edit Yourself
                  </Link>

                  <button
                    id="dprod"
                    onClick={() => {
                      handleDelete(customer.id);
                    }}
                  >
                    Delete Yourself
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
