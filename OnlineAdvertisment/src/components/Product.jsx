import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import NotFound from "./NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Product() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route path="/addprod" element={<AddProduct />} />
            <Route path="/products/edit/:id" element={<AddProduct />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default Product;
