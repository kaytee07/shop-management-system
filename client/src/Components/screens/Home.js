import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";

function Home(){
const [name,setName] = useState("")
const [employeeType, setEmployeeType] = useState("");
const [email,setEmail] = useState("")

useEffect(()=>{
fetch('/home',{
    method:"GET",
}).then(res=> res.json())
    .then(data=>{
        setName(data.name)
        setEmployeeType(data.employeeType)
        setEmail(data.email)
    })
}, [])

const renderHome = () =>{
    if (employeeType === "Sales") {
      return [
        <div className="card card-w col-md-4 mb-40">
          <div className="card-body">
            <h5 className="card-title">Sell Product</h5>
            <Link to="/sell" className="btn btn-primary">
              Sell Product
            </Link>
          </div>
        </div>,
        <div className="card card-w mb-40 col-md-4">
          <div className="card-body">
            <h5 className="card-title">Inventory</h5>
            <Link to="#" className="btn btn-primary">
              Inventory
            </Link>
          </div>
        </div>,
      ];
    } else if (employeeType === "Administrator") {
      return [
        <div className="card card-w col-md-4 mb-40">
          <div className="card-body">
            <h5 className="card-title">Sell Product</h5>
            <Link to="/sell" className="btn btn-primary">
              Sell Product
            </Link>
          </div>
        </div>,
        <div className="card card-w mb-40 col-md-4">
          <div className="card-body">
            <h5 className="card-title">Inventory</h5>
            <Link to="/inventory" className="btn btn-primary">
              Inventory
            </Link>
          </div>
        </div>,
        <div className="card card-w mb-40 col-md-4">
          <div className="card-body">
            <h5 className="card-title">Add Stock Items</h5>

            <Link to="/addproduct" className="btn btn-primary">
              Add Stock Items
            </Link>
          </div>
        </div>,
        <div className="card card-w mb-40 col-md-4">
          <div className="card-body">
            <h5 className="card-title">History</h5>
            <Link to="#" className="btn btn-primary">
              History
            </Link>
          </div>
        </div>,
        <div className="card card-w mb-40 col-md-4">
          <div className="card-body">
            <h5 className="card-title">Create New Users</h5>
            <Link to="/signup" className="btn btn-primary">
              Create Users
            </Link>
          </div>
        </div>,
      ];
    } else if (employeeType === "Stocks") {
      return [
        <div className="card card-w mb-40 col-md-4">
          <div className="card-body">
            <h5 className="card-title">Inventory</h5>
            <Link to="#" className="btn btn-primary">
              Inventory
            </Link>
          </div>
        </div>,
        <div className="card card-w mb-40 col-md-4">
          <div className="card-body">
            <h5 className="card-title">Add Stock Items</h5>

            <Link to="#" className="btn btn-primary">
              Add Stock Items
            </Link>
          </div>
        </div>,
        <div className="card card-w mb-40 col-md-4">
          <div className="card-body">
            <h5 className="card-title">History</h5>
            <Link to="#" className="btn btn-primary">
              History
            </Link>
          </div>
        </div>
      ];
    }
}

    return (
      <div className="Home container">
        <section className="heading">
          <h4>SHOP MANAGEMENT SYSTEM</h4>
        </section>
        <section>
          <div className="ul-p mt-3 row">
          {
              employeeType ? renderHome() : ""
          }
          </div>
        </section>
      </div>
    );
}

export default Home