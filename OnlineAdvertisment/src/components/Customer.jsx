import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerList from "./CustomerList";
import "bootstrap/dist/css/bootstrap.min.css";
import AddCustomer from "./AddCustomer";
import NotFound from "./NotFound";

function Customer() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Routes>
            <Route exact path="/" element={<CustomerList />} />
            <Route path="/add" element={<AddCustomer />} />
            <Route path="/customers/edit/:id" element={<AddCustomer />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Customer;
