import React,{useState} from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [employeeType, setEmployeeType] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  function signUp(){
    fetch("auth/signup", {
      method:"POST",
      body:new URLSearchParams({
        name,
        email,
        password,
        employeeType,
        verifyPassword
      })
    });
  }

  return (
    <div className="signin d-flex justify-content-center m-t">
      <div className="card" style={{ width: "18rem", height: "fit-content" }}>
        <div className="card-body">
          <h5 className="card-title form-align ">Login</h5>
          <div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputFirstname1"
                className="form-label form-align"
              >
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputFirstname1"
                aria-describedby="emailHelp"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                className="form-select"
                id="exampleInputLastname1"
                aria-label="Default select example"
                onChange={(e) => setEmployeeType(e.target.value)}
              >
                <option defaultValue={(e) => e.target.value }>
                  Employee Type
                </option>
                <option value="Administrator">Administrator</option>
                <option value="Sales">Sales</option>
                <option value="Stocks">Stocks</option>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={verifyPassword}
                onChange={(e) => setVerifyPassword(e.target.value)}
              />
            </div>
            <button
              style={{ display: "block" }}
              className="btn btn-primary"
              onClick={() => signUp()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
