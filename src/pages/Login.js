import React from "react";

function Login() {
  return (
    <div
      className="row m-0 p-0 mt-md-5  loginBg"
      
    >
      <div className="col-6 d-none d-md-flex  vh-100 row align-items-center justify-content-end m-0 p-0 ">
        <div
          className="col-xl-6 col-lg-11 col-md-11  py-5 px-3 bg-light border d-flex align-items-center"
          style={{ height: "550px" }}
        >
          <div className="w-100">
            <div className="text-center mt-2">
              <img
                src="https://cdn-icons-png.flaticon.com/256/8663/8663614.png"
                className="img-fluid"
              />
            </div>
            <div className="text-center">
              <h4 className="text-center text-success my-5">
                Get access to your orders, <br /> cart list and so on
              </h4>
              <button
                className="btn btn-success w-100 mb-2 py-2"
                style={{ borderRadius: "30px" }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6  vh-100 row align-items-center justify-content-start m-0 p-0">
        <div
          className="col-xl-6 col-lg-11 col-md-11 py-5 px-4 bg-success  d-flex align-items-center"
          style={{ height: "550px" }}
        >
          <div className="w-100">
            <h1 className="text-light"><i className="fa fa-user"></i> Login</h1>
            <div className="mt-5 pt-4">
              <b className="text-light"><i className="fa fa-map"></i> Email</b>
              <input className="form-control mt-2 mb-5 text-light"  style={{background:"transparent",borderRadius:"none",outline:"none", borderTop:"none",borderRight:"none", borderLeft:"none", borderBottom:"2px solid white"}}/>
              <b className="text-light"><i className="fa fa-lock"></i>  Password</b>
              <input className="form-control mt-2 mb-5" style={{background:"transparent",borderRadius:"none",outline:"none", borderTop:"none",borderRight:"none", borderLeft:"none", borderBottom:"2px solid white"}}/>
              <p className="text-light mb-4"><u>Forgot Password ?</u></p>
              <button className="btn btn-light w-100 py-2" style={{borderRadius:"30px"}}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
