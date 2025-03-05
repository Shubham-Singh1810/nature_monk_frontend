import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOtpServ } from "../services/user.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    email: "",
    fullName: "",
  });
  const formValidation = () => {
    if (formData.password && formData.email && formData.fullName) {
      return true;
    } else {
      return false;
    }
  };
  const handleSignUp = async () => {
    try {
      let response = await sendOtpServ(formData);
      if (response?.data.message == "Otp has been sent to the given email address") {
        toast.success(response?.data.message);
        setTimeout(() => {
          navigate("/otp");
        }, 1200);
      } else {
        toast.warning(response?.data.message);
      }
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };
  return (
    <div className="row m-0 p-0 mt-md-5  loginBg">
      <div className="col-6 d-none d-md-flex  vh-100 row align-items-center justify-content-end m-0 p-0 ">
        <div
          className="col-xl-6 col-lg-11 col-md-11  py-5 px-3 bg-light border d-flex align-items-center"
          style={{ height: "550px" }}
        >
          <div className="w-100">
            <div className="text-center mt-2">
              <img src="https://cdn-icons-png.flaticon.com/256/8686/8686070.png" className="img-fluid" />
            </div>
            <div className="text-center">
              <h4 className="text-center text-success my-5">
                Access your orders, cart, <br /> and more after logging in.
              </h4>
              <button
                onClick={() => navigate("/login")}
                className="btn btn-success w-100 mb-2 py-2"
                style={{ borderRadius: "30px" }}
              >
                Log in
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
            <h1 className="text-light">
              <i className="fa fa-user"></i> Sign up
            </h1>
            <div className="mt-5 ">
              <b className="text-light">
                <i className="fa fa-map"></i> Full Name
              </b>
              <input
                className="form-control mt-2 mb-4 text-light"
                style={{
                  background: "transparent",
                  borderRadius: "none",
                  outline: "none",
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                  borderBottom: "2px solid white",
                }}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
              <b className="text-light">
                <i className="fa fa-map"></i> Email
              </b>
              <input
                className="form-control mt-2 mb-4 text-light"
                style={{
                  background: "transparent",
                  borderRadius: "none",
                  outline: "none",
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                  borderBottom: "2px solid white",
                }}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <b className="text-light">
                <i className="fa fa-lock"></i> Password
              </b>
              <input
                className="form-control mt-2 mb-4 text-light"
                style={{
                  background: "transparent",
                  borderRadius: "none",
                  outline: "none",
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                  borderBottom: "2px solid white",
                }}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <p className="text-light mb-4">
                <u>Forgot Password ?</u>
              </p>
              <button
                onClick={handleSignUp}
                className={"btn btn-light w-100 py-2 " + (formValidation() ? " " : " disabled")}
                style={{ borderRadius: "30px" }}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
