import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
// import { a } from "react-router-dom";
const Navbar = () => {
    return (
      
    
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LOGO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
        <li class="nav-item">
          <a className="nav-link" href="/signup">Registration</a>
        </li>
     
       
      </ul>
    </div>
  </div>
</nav>
       
          
       
  
    );
  }
  
  export default Navbar;