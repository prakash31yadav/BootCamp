import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductService from "../services/ProductService";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const init = () => {
    ProductService.getAll()
      .then((response) => {
        console.log("Printing Products", response.data);
        setProducts(response.data);
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
    ProductService.remove(id)
      .then((response) => {
        console.log("Product has been Deleted", response.data);
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
      <h3 className="ab"><b><u>List of Advertisment:</u></b></h3>
      <hr />
      <div>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
            <th id="webpro"> Adv Id</th>
              <th id="webpro"> Adv name</th>
              <th id="webpro"> Price</th>
              <th id="webpro"> Discription</th>

              {/* <th id="webpro">Actions </th> */}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.pname}</td>
                <td>{product.price}</td>
                <td>{product.discription}</td>

                
              </tr>
            ))}
          </tbody>
        </table>
        <div>
                  <Link
                     
                    to="/buy"
                  >
                    <button className="btn1">
                      Buy
                    </button>
                    
                  </Link>
                  <Link
                     
                     to="/addprod"
                   >
                     <button className="abtn">
                       Add
                     </button>
                     
                   </Link>
                  </div>
                
                 
                 
                  
      </div>
    </div>
  );
};

export default ProductList;
