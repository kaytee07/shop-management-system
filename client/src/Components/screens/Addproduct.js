import React,{useState, useEffect} from "react";


function AddProduct(){
    const brands = ["bosch", "whirlpool", "samsung", "philips", "beko", "nasco", "binatone"];
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    
    const AddProduct = () => {
        fetch("/createproduct",{
            method:"POST",
            body:new URLSearchParams({
                name,
                brand,
                quantity,
                price
            })
        }).then(res=>res.json())
          .then(data=> console.log(data))
    }

    return (
      <div className="signin d-flex justify-content-center m-t">
        <div className="card" style={{ width: "20rem", height: "fit-content" }}>
          <div className="card-body">
            <h5 className="card-title form-align ">Add Product</h5>
            <div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputFirstname1"
                  className="form-label form-align"
                >
                  Product Name
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
                  htmlFor="exampleInputLastname1"
                  className="form-label form-align"
                >
                  Brand
                </label>
                <select
                  className="form-select"
                  id="exampleInputLastname1"
                  aria-label="Default select example"
                  onChange={(e) => setBrand(e.target.value)}
                >
                  <option defaultValue={(e) => e.target.value}>Brand</option>
                  {brands.map((brand) => {
                    return <option value={brand}>{brand}</option>;
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label form-align"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label form-align"
                >
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <button
                style={{ display: "block" }}
                className="btn btn-primary"
                onClick={() => AddProduct()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );

}

export default AddProduct