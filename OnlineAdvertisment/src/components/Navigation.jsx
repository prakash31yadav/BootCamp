import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, FormControl, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
function Navigation() {
  const navigate = useNavigate();
  function setvalue(){
    let name="Login";
    if(sessionStorage.getItem("loggedin")=="true"){
      name="LogOut";
    }
    return name;
    
  }
  function validate(){
    sessionStorage.setItem("loggedin","false");
     navigate("/login");
  }
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-light fixed-top ">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <Navbar.Brand href="#home">
             {" "}
              <strong className="logo">Tienda</strong>
            </Navbar.Brand>
          </NavLink>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Find here....."
              className="me-2"
              aria-label="Search"
              id="sbar"
            />
            <Button variant="outline-secondary" className="sbtn">
              Search
            </Button>
          </Form>

          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login"  onClick={validate}>
                {setvalue}
                
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
