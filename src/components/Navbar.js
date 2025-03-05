import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopStrip from "./TopStrip";
import { useGlobalState } from "../GlobalProvider";
function Navbar() {
  const { globalState, setGlobalState } = useGlobalState();
  const location = useLocation();
  const navigate = useNavigate();
  const [showMobNav, setShowMobNav] = useState(false);
  const navItem = [
    {
      name: "Home",
      icon: "fa fa-home",
      path: "/",
    },

    {
      name: "Products",
      icon: "fa fa-shopping-cart",
      path: "/products",
      subMenu: [
        {
          name: "Oil",
          path: "Oil",
        },
        {
          name: "Ghee",
          path: "Ghee",
        },
        {
          name: "Super Food",
          path: "SuperFood",
        },
        {
          name: "Dehydrated",
          path: "Dehydrated",
        },
      ],
    },
    {
      name: "About",
      icon: "fa fa-info-circle",
      path: "/about",
    },
    {
      name: "Contact Us",
      icon: "fa fa-phone",
      path: "/contact-us",
    },
  ];
  return (
    <>
      <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center me-auto me-lg-0">
            <img src="/assets/img/favIcon.png" alt />
            <h4 className="mb-0 text-success d-md-block d-none" style={{ position: "relative" }}>
              <b>Nature Monk</b>
              <span>.</span>
            </h4>
            <h6 className="mb-0 d-block d-md-none text-success" style={{ position: "relative" }}>
              <b>Nature Monk</b>
              <span>.</span>
            </h6>
          </Link>
          <nav id="navbar" className="navbar">
            <ul>
              {navItem?.map((v, i) => {
                if (v?.subMenu) {
                  return (
                    <li className="dropdown">
                      <a href="#">
                        <span>
                          <i className={v?.icon + " me-2"}></i>
                          {v?.name}
                        </span>{" "}
                        <i className="bi bi-chevron-down dropdown-indicator" />
                      </a>
                      <ul>
                        {v?.subMenu?.map((v, i) => {
                          return (
                            <li>
                              <Link to={"/products/" + v?.path}>{v?.name}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                } else {
                  return (
                    <li>
                      <Link to={v?.path} className={location?.pathname == v?.path && " text-success"}>
                        {" "}
                        <i className={v?.icon}></i>
                        <span className="ms-2">{v?.name}</span>
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </nav>

          <div className="d-md-flex d-none ms-2">
            <h4 className="mb-0 text-secondary" onClick={() => navigate("/notifications")}>
              <span
                style={{
                  position: "relative",
                  fontSize: "13px",
                  left: "25px",
                  top: "5px",
                  padding: "0px 2px",
                  background: "white",
                  borderRadius: "50%",
                }}
              >
                9
              </span>
              <i className="fa fa-bell " />
            </h4>
            <h4
              className="mb-0 text-secondary me-3"
              onClick={() => navigate(globalState?.user ? "/my-carts" : "/login")}
            >
              <span
                style={{
                  position: "relative",
                  fontSize: "13px",
                  left: "25px",
                  top: "5px",
                  padding: "0px 2px",
                  background: "white",
                  borderRadius: "50%",
                }}
              >
                9
              </span>
              <i className="fa fa-shopping-cart " />
            </h4>

            <h4 className="mb-0" onClick={() => navigate(globalState?.user ? "/my-profile" : "/login")}>
              {globalState?.user?.profileImg ? (
                <img
                  src={globalState?.user?.profileImg}
                  style={{ height: "30px", width: "30px", borderRadius: "50%" }}
                />
              ) : (
                <i className="fa fa-user text-secondary"></i>
              )}
            </h4>

            {/* <i className="fa fa-user mx-4"></i>
          <i className="fa fa-shopping-cart"></i> */}
          </div>
          {/* <i
            className={"mobile-nav-toggle mobile-nav-show bi " + (!showMobNav ? " bi-list" : " bi-x")}
            onClick={() => setShowMobNav(!showMobNav)}
          /> */}
          <h5 className="d-md-none d-block " style={{ opacity: "0.9" }} onClick={() => navigate("/notifications")}>
            <span
              style={{
                position: "relative",
                fontSize: "13px",
                left: "25px",
                top: "5px",
                padding: "0px 2px",
                background: "white",
                borderRadius: "50%",
              }}
            >
              9
            </span>
            <i className="fa fa-bell " />
          </h5>
        </div>
      </header>
      {showMobNav && (
        <div className="vh-100 d-block d-md-none" style={{ background: "#eeeeee" }}>
          <div className="vh-100 mobNavSlide" style={{ background: "#eeeeee" }}>
            <ul className="mt-5 pt-5">
              {navItem?.map((v, i) => {
                if (v?.subMenu) {
                  return (
                    <li className="dropdown" style={{ listStyle: "none" }}>
                      <a className="text-secondary">
                        <span className="">
                          <i className={v?.icon + " me-2"}></i>
                          {v?.name}
                        </span>
                      </a>
                      <ul className="mt-3">
                        {v?.subMenu?.map((v, i) => {
                          return (
                            <li style={{ listStyle: "none" }} className="mb-4 text-secondary">
                              <a>{v?.name}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                }
                return (
                  <li style={{ listStyle: "none" }} className="mb-4">
                    <div
                      onClick={() => {
                        setShowMobNav(false);
                        navigate(v?.path);
                      }}
                      className={location.pathname == v?.path ? " text-dark" : " text-secondary"}
                    >
                      <i className={v?.icon + " me-2"}></i>
                      {v?.name}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
