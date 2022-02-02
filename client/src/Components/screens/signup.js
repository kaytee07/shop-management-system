import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signin d-flex justify-content-center m-t">
      <div className="card" style={{ width: "18rem", height: "fit-content" }}>
        <div className="card-body">
          <h5 className="card-title form-align ">Login</h5>
          <form>
            <div className="mb-3">
              <label
                htmlFor="exampleInputFirstname1"
                className="form-label form-align"
              >
                Name
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputFirstname1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label form-align"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputLastname1"
                className="form-label form-align"
              >
                Employee Type
              </label>
              <select
                class="form-select"
                id="exampleInputLastname1"
                aria-label="Default select example"
              >
                <option selected>Employee Type</option>
                <option value="1">Administrator</option>
                <option value="2">Sales</option>
                <option value="3">Stocks</option>
              </select>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label form-align"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label form-align"
              >
                Verify Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button
              type="submit"
              style={{ display: "block" }}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
