import React from "react";
import { useGlobalState } from "../GlobalProvider";
import { useNavigate } from "react-router-dom";
function ProductCard({ v }) {
  const navigate = useNavigate();
  const { setGlobalState, globalState } = useGlobalState();
  return (
    <div className="col-lg-3 col-md-6" onClick={() => navigate("/product/" + v?._id)}>
      <div className="mx-1 my-lg-3 my-md-2 my-0 rounded cardHover shadow bg-light">
        <div className="text-center">
        <img
          src={v?.productHeroImg}
          
          style={{ height: "300px", width: "300px", objectFit: "cover" }}
          className="menu-img img-fluid"
          alt="Image not provided"
        />
        </div>
        <div className="bg-light ms-2 p-1 py-3">
          <div>
            <div className="d-flex align-items-center mb-2">
            <p className="text-secondary mb-0 me-2" style={{ fontSize: "17px" }}>
              {v?.quantity}
            </p>
            <h5 className="text-dark mb-0" style={{ fontSize: "17px" }}>
              <b>{v?.title}</b>
            </h5>
            </div>
            <div className="d-flex align-items-center justify-content-between">
             
                <h6 className="mb-0 w-50">
                  <s className="text-secondary me-1" >
                    {v?.price} &#x20B9;
                  </s>
                  <b className="" style={{ color: "#198754" }}>
                    {v?.discountedPrice} &#x20B9;
                  </b>
                </h6>
              <button className="btn btn-success btn-sm  me-2" style={{width:"33%"}}><b>ADD</b></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
