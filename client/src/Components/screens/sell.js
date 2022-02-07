import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";

function Sell(){
    const [brand, setBrand] = useState("")

      useEffect(() => {
        fetch("/brand", {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => setBrand(data));
      },[]);

    return (
      <div className="shop">
        <section style={{ marginTop: "40px" }}>
          <h4>Item Brands</h4>
        </section>
        <section className="brands inventory-w">
          {     
              brand?brand.map((brand, index)=>{
                  return (
                    <div key={index} className="card" style={{ width: "16rem" }}>
                      <div className="card-body">
                        <h5 className="card-title">{brand.name}</h5>
                        <Link to={`/sale/${brand.name}`} className="btn btn-primary btn-sm me-3">
                          appliances
                        </Link>
                        <button className="btn btn-danger btn-sm" >
                          Delete Brand
                        </button>
                      </div>
                    </div>
                  );
              }) : <h3>LOADING...</h3>
          }
        </section>
      </div>
    );
}

export default Sell