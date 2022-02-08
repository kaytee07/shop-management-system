import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { userContext } from "../../App";

function SellItems() {
  const { name } = useParams();
  const [product, setProduct] = useState("");
  const [sucess, setSucess] = useState("");
  const [error, setError] = useState("");
  const {state, dispatch} = useContext(userContext);
  
  const addToCart=(name, brand , price, _id) =>{
          fetch("/sell/cart",{
            method:"POST",
            body:new URLSearchParams({
              name,
              price,
              brand,
              _id,
              salesName:state
            })
          }).then(res=> res.json())
          .then(data=>{
            if(data.error){
              setError(data.error.message)
              alert("item already added")
            }else if(data.message){
              alert("item added")
            }
          })
  }

  useEffect(() => {
    fetch(`/product/${name}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="Product">
      <section style={{ marginTop: "40px" }}>
        <h4>{name} Appliances</h4>
      </section>
      <div className="newinventory">
        <section className="brands inventory-w">
          {product ? (
            product.map((prod, index) => {
              return (
                <div className="card" key={index} style={{ width: "16rem" }}>
                  <div className="card-body">
                    <div className="info">
                      <h5 className="card-title ta-l">{prod.name}</h5>
                      <h6 className="card-subtitle ml-3 mb-2 ta-l text-muted">
                        Brand: {prod.brand}
                      </h6>
                      <h6 className="card-subtitle mb-2 ta-l text-muted">
                        Price: {prod.price}
                      </h6>
                      <h6 className="card-subtitle mb-2 ta-l text-muted">
                        Quantity: {prod.quantity}
                      </h6>
                    </div>
                    <button
                      className="btn btn-primary btn-sm me-3"
                      style={{ display: "block" }}
                      onClick={(e) => {
                        addToCart(prod.name, prod.price, prod.brand, prod._id);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <h3>LOADING...</h3>
          )}
        </section>
      </div>
    </div>
  );
}

export default SellItems;
