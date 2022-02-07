import React, {useEffect, useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../App';

function Navbar(props){
const navigate = useNavigate();
const {state, dispatch} = useContext(userContext);
const logout = () => {
  fetch("/logout",{
    method:"GET"
  }).then(res=>res.json())
  
}

const renderList = () => {
  if(state){
     return [
       <li key={1} className="nav-item">
         <Link className="nav-link active" aria-current="page" to="/">
           home
         </Link>
       </li>,
       <button
         key={2}
         className="nav-item btn btn-primary"
         onClick={(e) => {
           logout();
           localStorage.clear();
           dispatch({ type: "CLEAR" });
           navigate("/signin");
         }}
       >
         Logout
       </button>,
     ];
  } else{
      return [
        <li key={3} className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signin">
            signin
          </Link>
        </li>,
      ];
  }
}

    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="#">
            Navbar
          </Link>
          <button
            key={5}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navb collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">{renderList()}</ul>
          </div>
        </nav>
        {props.children}
      </div>
    );
}

export default Navbar