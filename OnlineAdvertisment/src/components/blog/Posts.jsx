import React, { Component } from "react";
import "./style-blog.css";
import "./App-blog.css";
import { Link, useNavigate } from "react-router-dom";
import customerService from "../../services/customer.service";

function Posts() {
  sessionStorage.setItem("loggedin","false");

  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.user.value);

    if (!e.target.user.value) {
      alert("Username is required");
    } else if (!e.target.user.value) {
      alert("Valid username is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.user.value === "admin" &&
      e.target.password.value === "1234" 
    ) {
      // alert("Successfully logged in");
      sessionStorage.setItem("loggedin","true");
      navigate("/admin");
      navigate(0);
      e.target.user.value = "";
      e.target.password.value = "";
    } 
    /*else if (
      e.target.user.value === "user" &&
      e.target.password.value === "user" 
    ) {
      // alert("Successfully logged in");
      navigate("/userlist")
      navigate(0)
      e.target.user.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong username or password combination");
    }*/
    else{
      const data={
        "userName":e.target.user.value,
        "password":e.target.password.value
      };
      customerService.login(JSON.stringify(data)).then(response=>{
        if (response.data=="success")
        {
          sessionStorage.setItem("loggedin","true");
          navigate("/userlist") 
        }
        else{
          alert("Wrong username or password combination");
        }
      }); 

    }
  };

  const handleClick = (e) => {
    navigate("/addcust");
   

    
  };

  return (
    <div className="fbody">
      <div className="App">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="user">USER NAME</label>
            <input type="user" name="user" placeholder="user/admin" />
          </div>
          <div className="input-group">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" name="password" placeholder="password" />
          </div>
          <button className="primary">LOGIN</button>
          <button className="primary" onClick={handleClick}>Register</button>
        </form>
        {/* <button className="secondary" onClick={handleClick}>
          BACK
        </button> */}
      </div>
    </div>
  );
     }


export default Posts;
