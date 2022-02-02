import React from "react";
import { Link } from "react-router-dom";

function Login(){
    return (
      <div className="signin d-flex justify-content-center">
        <div className="card" style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title form-align ">Login</h5>
                <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label form-align">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label form-align">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" style={{display:"block"}} className="btn btn-primary">Submit</button>
                </form> 
          </div>
        </div>
      </div>
    );
}

export default Login;