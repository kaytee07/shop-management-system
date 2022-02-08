import React, {useState, useEffect, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../App";


function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  let navigate = useNavigate();
  const {state, dispatch} = useContext(userContext);

  const signIn = () => {
    fetch("auth/signin", {
      method: "POST",
      body: new URLSearchParams({
        email,
        password
      }),
    })
    .then(res=> res.json())
    .then(data=> {
      localStorage.setItem("user", data.user);
      dispatch({type:"USER", payload: data.user})
      setMessage(data.message)
    })
  };

 useEffect(()=>{
   if(message){
     navigate("/")
   }

 })



    return (
      <div className="signin d-flex justify-content-center">
        <div className="card" style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title form-align ">Login</h5>
                <div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label form-align">Email address</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label form-align">Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <button 
                 style={{display:"block"}} 
                 className="btn btn-primary"
                 onClick={(e)=> signIn()}
                 >Submit</button>
                </div> 
          </div>
        </div>
      </div>
    );
}

export default Login;