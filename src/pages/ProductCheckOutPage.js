import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductDetails } from "../services/product.service";
import { placeOrderServ } from "../services/order.service";
import { useGlobalState } from "../GlobalProvider";

const ProductCheckOutPage = () => {
  const { globalState, setGlobalState } = useGlobalState();
  const params = useParams();
  const [productDetails, setProductDetails] = useState();
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentScreenShot: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, paymentScreenShot: e.target.files[0] });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const finalFormData = new FormData();
    finalFormData.append("fullName", formData.fullName)
    finalFormData.append("email", formData.email)
    finalFormData.append("contactNumber", formData.contactNumber)
    finalFormData.append("paymentScreenShot", formData.paymentScreenShot)
    finalFormData.append("address", formData.address)
    finalFormData.append("pincode", formData.pincode)
    finalFormData.append("state", formData.state)
    finalFormData.append("city", formData.city)
    finalFormData.append("userId", globalState?.user?._id)
    finalFormData.append("productId", params.id)
    try {
      let response = await placeOrderServ(finalFormData)
    } catch (error) {
      
    }
    
  };

  const handleGetProductDetails = async (id) => {
    setLoader(true);
    try {
      let response = await getProductDetails(id);
      setProductDetails(response?.data?.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };

  useEffect(() => {
    handleGetProductDetails(params?.id);
  }, [params?.id]);

  return (
    <div className="container py-5 mt-5">
      <h3 className="mb-4 fontMono">Checkout</h3>
      <div className="row">
        <div className="col-md-6">
          <h5>Billing Address</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">Contact Number</label>
              <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="paymentScreenShot" className="form-label">Payment Screenshot</label>
              <input type="file" id="paymentScreenShot" name="paymentScreenShot" onChange={handleFileChange} className="form-control" required />
            </div>
            <hr/>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="pincode" className="form-label">Pincode</label>
              <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3">
              <label htmlFor="state" className="form-label">State</label>
              <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} className="form-control" required />
            </div>
            <button type="submit" className="btn btn-success btn-block">Place Order</button>
          </form>
        </div>
        <div className="col-md-6">
          <img src={productDetails?.productHeroImg} className="img-fluid" style={{ height: "200px" }} />
          <h5 className="my-4">Order Summary</h5>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">{productDetails?.title}</h6>
                <small className="text-muted">{productDetails?.quantity}</small>
              </div>
              <span className="text-muted">&#x20B9; {productDetails?.discountedPrice}</span>
            </li>
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/shipping-policy"><u>Shipping Policy</u></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckOutPage;