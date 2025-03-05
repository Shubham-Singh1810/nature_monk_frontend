import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"; // For validation schema
import { loginServ } from "../services/user.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useGlobalState} from "../GlobalProvider"
function Login() {
  const {globalState, setGlobalState} = useGlobalState()
  const navigate = useNavigate();
  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        let response = await loginServ(values);
        if (response?.data?.message == "User Logged In Successfully") {
          toast.success(response?.data?.message);
          localStorage.setItem("naturemonk_user", JSON.stringify(response?.data?.data));
          localStorage.setItem("naturemonk_token", JSON.stringify(response?.data?.token));
          setGlobalState({
            user:response?.data?.data,
            token:response?.data?.token
          });
          navigate("/")
        }
        // Handle successful login logic here
      } catch (error) {
        console.error("Login failed", error);
      }
    },
  });

  return (
    <div className="row m-0 p-0 mt-md-5 loginBg">
      <div className="col-6 d-none d-md-flex vh-100 row align-items-center justify-content-end m-0 p-0">
        <div
          className="col-xl-6 col-lg-11 col-md-11 py-5 px-3 bg-light border d-flex align-items-center"
          style={{ height: "550px" }}
        >
          <div className="w-100">
            <div className="text-center mt-2">
              <img
                src="https://cdn-icons-png.flaticon.com/256/8663/8663614.png"
                className="img-fluid"
                alt="Login Illustration"
              />
            </div>
            <div className="text-center">
              <h4 className="text-center text-success my-5">
                Get access to your orders, <br /> cart list and so on
              </h4>
              <button
                onClick={() => navigate("/signup")}
                className="btn btn-success w-100 mb-2 py-2"
                style={{ borderRadius: "30px" }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 vh-100 row align-items-center justify-content-start m-0 p-0">
        <div
          className="col-xl-6 col-lg-11 col-md-11 py-5 px-4 bg-success d-flex align-items-center"
          style={{ height: "550px" }}
        >
          <form onSubmit={formik.handleSubmit} className="w-100">
            <h1 className="text-light">
              <i className="fa fa-user"></i> Login
            </h1>
            <div className="mt-5 pt-4">
              <b className="text-light">
                <i className="fa fa-envelope"></i> Email
              </b>
              <input
                name="email"
                type="email"
                className={`form-control mt-2 mb-2 text-light ${
                  formik.errors.email && formik.touched.email ? "is-invalid" : ""
                }`}
                style={{
                  background: "transparent",
                  borderRadius: "none",
                  outline: "none",
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                  borderBottom: "2px solid white",
                }}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="text-danger bg-light rounded px-2" style={{ marginTop: "-4px" }}>
                  <b>{formik.errors.email}</b>
                </div>
              )}

              <b className="text-light">
                <i className="fa fa-lock"></i> Password
              </b>
              <input
                name="password"
                type="password"
                className={`form-control mt-2 mb-2 ${
                  formik.errors.password && formik.touched.password ? "is-invalid" : ""
                }`}
                style={{
                  background: "transparent",
                  borderRadius: "none",
                  outline: "none",
                  borderTop: "none",
                  borderRight: "none",
                  borderLeft: "none",
                  borderBottom: "2px solid white",
                }}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password && (
                <div className="text-danger bg-light rounded px-2" style={{ marginTop: "-4px" }}>
                  <b>{formik.errors.password}</b>
                </div>
              )}

              <p className="text-light mb-4">
                <u>Forgot Password?</u>
              </p>
              <button type="submit" className="btn btn-light w-100 py-2" style={{ borderRadius: "30px" }}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
