import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductService from "../services/ProductService";

const AddProduct = () => {
  const [pname, setPname] = useState("");
  const [price, setPrice] = useState("");
  const [discription, setDiscription] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveProduct = (o) => {
    o.preventDefault();
    const product = { pname, price,discription, quantity, id };

    if (id) {
      //update
      ProductService.update(product)
        .then((response) => {
          alert("Product Data Updated successfully!");
          console.log("Product data updated successfully", response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      ProductService.create(product)
        .then((response) => {
          alert("Product Saved");
          console.log("Product has been added successfully", response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      ProductService.get(id)
        .then((product) => {
          setPname(product.data.pname);
          setPrice(product.data.price);
          setDiscription(product.data.discription);
          setQuantity(product.data.quantity);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <div className="container">
      <br></br>
      <h3 className="ab">
        <b>
          <u>Add/Update Advertisment</u>
        </b>
      </h3>
      <form className="form1">
        <br></br>
        <div className="form-group">
          {/* <p className="prsub">Product Name:</p> */}
          <input
            type="text"
            className="form-control col-4"
            id="pname"
            value={pname}
            onChange={(o) => setPname(o.target.value)}
            placeholder="Enter Adv Name"
          />
        </div>
        <br></br>
        <div className="form-group">
          {/* <p className="prsub">Product Price:</p> */}
          <input
            type="text"
            className="form-control col-4"
            id="price"
            value={price}
            onChange={(o) => setPrice(o.target.value)}
            placeholder="Enter Price"
          />
        </div>
        <br></br>
        <div className="form-group">
          {/* <p className="prsub">Product Discription:</p> */}
          <input
            type="text"
            className="form-control col-4"
            id="discription"
            value={discription}
            onChange={(o) => setDiscription(o.target.value)}
            placeholder="Enter discription"
          />
        </div>
        <br></br>
        <div>
          <button onClick={(o) => saveProduct(o)} id="svep">
            Save
          </button>
          <Link to="/prodlist">
            <button className="bckc">Back To list</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
