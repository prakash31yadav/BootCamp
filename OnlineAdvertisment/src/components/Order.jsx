import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AddOrder from "./AddOrder";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function Order() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Routes>
          {/* <Route exact path="/" element={<ProductList />} />  */}
            <Route path="/addorder" element={<AddOrder />} />
            {/* <Route path="/products/edit/:id" element={<AddProduct />} />
            <Route path="/*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default Order;
