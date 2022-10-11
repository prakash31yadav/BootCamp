import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import OrderService from "../services/OrderService";

const AddOrder = () => {
  const [odate, setOdate] = useState("");
  const [cid, setCid] = useState("");
  const [quantity, setQuantity] = useState("");
  const [pid, setPid] = useState("");
   const [pname, setPname] = useState("");
   const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrder = (o) => {
    o.preventDefault();

   // const order = { odate, cust, pro_id, quantity, id };
    const pid={
      pname,
      price
    };
    const order={
      id,
      cid,
      odate,
      quantity,
      pid

    };
    if(id){
      //update
      OrderService
        .update(order)
        .then((response) => {
          console.log("Order data updated successfully", response.data);
          
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
    // create
    OrderService.create(order)
      .then((response) => {
        alert("Order placed");
        console.log("Product has been added successfully", response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
    }
  };

  useEffect(() => {
    if (id) {
      OrderService.get(id)
        .then((order) => {
          setOdate(order.data.odate);
          setPname(order.data.pname);
          setPrice(order.data.price);
          setCid(order.data.cid);
          setPid(order.data.pid);
          setQuantity(order.data.quantity);
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
      <h3 className="ab"><b><u>Place Your Order</u></b></h3>

      <form className="form1">
        <div className="form-group" id="ab1">
          <input
            type="text"
            className="form-control col-4"
            id="odate"
            value={odate}
            onChange={(o) => setOdate(o.target.value)}
            placeholder="Enter Date"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="cid"
            value={cid}
            onChange={(o) => setCid(o.target.value)}
            placeholder="Enter Customer Id"
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="quantity"
            value={quantity}
            onChange={(o) => setQuantity(o.target.value)}
            placeholder="Enter Quantity"
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="ordp"
            value={pname}
            onChange={(o) => setPname(o.target.value)}
            placeholder="Enter Product Name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control col-4"
            id="ordp"
            value={price}
            onChange={(o) => setPrice(o.target.value)}
            placeholder="Enter Price"
          />
        </div>
        <div>
          <button onClick={(o) => saveOrder(o)} className="btn2 ">
            Place Order
          </button>
          <Link to="/store/accessories"><button className="btn3">Back to List</button></Link>
        </div>
        
      
      </form>
     
    </div>
  );
};

export default AddOrder;
