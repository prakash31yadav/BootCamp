import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OrderService from "../services/OrderService";

const SeeOrder = () => {
  const [order, setOrders] = useState([]);

  const init = () => {
    OrderService
      .getAll()
      .then((response) => {
        console.log("Printing orders data", response.data);
        setOrders(response.data);
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
    OrderService
      .remove(id)
      .then((response) => {
        console.log("Order deleted successfully", response.data);
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
      <h3>List of Orders</h3>
      <hr />
      <div>
      
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
            <th> Order Id</th>
              <th> Customer Id</th>
              <th> Date</th>
              <th> Quantity</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {order.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.cid}</td>
                <td>{order.odate}</td>
                <td>{order.quantity}</td>
                <td>

                  <button
                    id="dprod"
                    onClick={() => {
                      handleDelete(order.id);
                    }}
                  >
                    Delete Order
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

export default SeeOrder;
