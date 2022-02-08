import React,{useState, useEffect, useContext} from "react";
import { userContext } from "../../App";


function CartItems(){
    const [data, setData] = useState("")
    const [total, setTotal] = useState(0);
    let [quant, setQuantity] = useState(0);
    let add = 0;
    const {state, dispatch} = useContext(userContext);
     useEffect(()=>{
        fetch("/sell/cartItems",{
            method:"POST",
            body: new URLSearchParams({
            user:state
            })

        }).then(res=>res.json())
          .then(data=> {
              setData(data)
            })
    },[])

    function addToTotal(value){
        add = value
        console.log(add)
    }
     
    return (
      <div>
        <section style={{ marginTop: "40px" }}>
          <h4>Cart</h4>
        </section>
        <section
          className=""
          style={{ width: "45%", margin: "10px auto", height: "300px" }}
        >
          <section className="list-group bs">
              {
            data ?data.map((data) => {
              return (
                <div className="list-group-item">
                  <div style={{ textAlign: "left" }}>
                    <span>Product name:</span> {data.name}
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <span>Brand name:</span> {data.brand}
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <span>Price:</span> {data.price}.00
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <span>Quantity:</span>
                    <input onChange={(e)=>{addToTotal(Number(e.target.value))}} min={0} defaultValue={0} type="number" />
                  </div>
                </div>
              )
}):"LOADING"
}
          </section>
          <div className=" d-flex" style={{marginTop:"10px"}}>
            <div style={{ textAlign: "left" }}>
              <span>Total:</span>
              <h5>{total}</h5>
            </div>
          </div>
        </section>
      </div>
    );
}

export default CartItems;