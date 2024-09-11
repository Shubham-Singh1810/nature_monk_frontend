import React from "react";
import {useLocation, useNavigate, useNavigation} from "react-router-dom"
function BottomNavFooter() {
  const location = useLocation();
  const navigate = useNavigate()
  const navItem = [
    {
      icon: "fa fa-home",
      name: "Home",
      link: "/",
    },
    {
      icon: "fa fa-search",
      name: "Search",
      link: "/all-products",
    },
    {
      icon: "fa fa-phone",
      name: "Contact",
      link: "/contact-us",
    },
    {
      icon: "fa fa-shopping-cart",
      name: "Cart",
      link: "/my-cart",
    },
    {
      icon: "fa fa-user",
      name: "Me",
      link: "/my-profile",
    },
  ];
  return (
    <div className="d-md-none d-flex bg-light" style={{position:"fixed", bottom:"0px", width:"100%"}}>
      {navItem?.map((v, i) => {
        return <div onClick={()=>navigate(v?.link)} style={{width:"20%", borderTopWidth:location.pathname==v?.link ? "2px" : "0px", borderColor:"black",borderBlockStyle:"solid", opacity: location.pathname==v?.link ? 1 : 0.6}}  className="pt-2">
            <div className="text-center">
            <h5 className="mb-0 "><i className={v?.icon}></i></h5>
            <p className="mb-3" style={{fontSize:"12px"}}>{v?.name}</p>
                </div>
        </div>;
      })}
    </div>
  );
}

export default BottomNavFooter;
