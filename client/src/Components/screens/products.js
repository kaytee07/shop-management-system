import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";

function Product(){
    const { name } = useParams();
    const [product, setProduct] = useState("")

    useEffect(()=>{
        fetch(`/product/${name}`,{
            method:"GET"
        }).then(res=> res.json())
        .then(data=> setProduct(data))
    },[])

    return (
      <div className="Product">
        <section style={{ marginTop: "40px" }}>
          <h4>{name} Appliances</h4>
        </section>
        <section className="brands inventory-w">
          {product ? (
            product.map((prod, index) => {
              return (
                <div className="card" key={index} style={{ width: "16rem" }}>
                  <div className="card-body">
                    <div className="info" style={{marginLeft:"18px"}}>
                      <h5 className="card-title ta-l">{prod.name}</h5>
                      <h6 class="card-subtitle ml-3 mb-2 ta-l text-muted">
                        Brand: {prod.brand}
                      </h6>
                      <h6 class="card-subtitle mb-2 ta-l text-muted">
                        Price: {prod.price}
                      </h6>
                      <h6 class="card-subtitle mb-2 ta-l text-muted">
                        Quantity: {prod.quantity}
                      </h6>
                    </div>
                    <button className="btn btn-primary btn-sm me-3">
                      Restock
                    </button>
                    <button className="btn btn-danger btn-sm">
                      Delete Product
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
    );
}

export default Product;