import React from "react";
import MyOrderList from "../components/MyOrderList";
import MyAddToCart from "../components/MyAddToCart";
import { useNavigate } from "react-router-dom";
import {useGlobalState} from "../GlobalProvider"
function MyProfile() {
  const {globalState, setGlobalState} = useGlobalState()
  const navigate = useNavigate();
  const navItem = [
    {
      img: "https://cdn-icons-png.flaticon.com/128/9752/9752284.png",
      title: "My Order",
      subTitle: "Tract, return, or buy things again.",
      link: "/my-orders",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/18545/18545231.png",
      title: "My Carts",
      subTitle: "Order now, what you love.",
      link: "/my-cart",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/13521/13521800.png",
      title: "Update Profile",
      subTitle: "Edit name, email, mobile number etc.",
      link: "/edit-profile",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/9062/9062564.png",
      title: "My Address",
      subTitle: "Edit address for order and gifts.",
      link: "my-address",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/18357/18357700.png",
      title: "Update Password",
      subTitle: "Login & Security.",
      link: "/update-password",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/4370/4370113.png",
      title: "Contact Us",
      subTitle: "Contact us for your query.",
      link: "/contact-us",
    },
  ];
  const handleLogoutFunc = () => {
    try {
      const confirmLogout = window.confirm("Are you sure you want to log out?");
      if (confirmLogout) {
        localStorage.removeItem("naturemonk_user");
        localStorage.removeItem("naturemonk_token");
        setGlobalState({
          user: null,
          token: null,
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  return (
    <div className="mt-4">
      <section id="menu" className="menu">
        <div className="container" data-aos="fade-up">
          <div
            className="section-header d-flex justify-content-between align-items-start"
            style={{ textAlign: "left" }}
          >
            <div>
              <h2>My Acount</h2>
              <p>
                <span>{globalState?.user?.fullName}</span>
              </p>
            </div>
            <button className="btn btn-danger" onClick={handleLogoutFunc}>
              Log out <i className="ms-2 fa fa-sign-out"></i>
            </button>
          </div>
          <div className="tab-content" data-aos="fade-up" data-aos-delay={300}>
            <div className="tab-pane fade active show" id="#Home-Linen">
              <div className="row gy-5">
                {navItem?.map((v, i) => {
                  return (
                    <div className=" col-lg-4 col-md-6 col-12">
                      <div
                        className="px-3 py-4 border shadow-sm rounded d-flex align-items-center"
                        style={{ background: "#F0F0F0" }}
                        onClick={() => navigate(v?.link)}
                      >
                        <img src={v?.img} style={{ height: "70px" }} />
                        <div className="ms-3">
                          <h4 className="mb-0">{v?.title}</h4>
                          <p className="mb-0">{v?.subTitle}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyProfile;
