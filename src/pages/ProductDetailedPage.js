import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../services/product.service";
function ProductDetailedPage() {
  const params = useParams();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };
  var mobileSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };
  const [productDetails, setProductDetails] = useState();
  const [loader, setLoader] = useState(false);
  const handleGetProductDetails = async (id) => {
    setLoader(true);
    try {
      let response = await getProductDetails(id);
      setProductDetails(response?.data?.data);
      setLoader(false);
      console.log(response?.data?.data);
    } catch (error) {}
  };
  useEffect(() => {
    handleGetProductDetails(params?.id);
  }, [params?.id]);
  return (
    <section
      id="hero"
      className="hero d-flex align-items-center"
      style={{ background: "whitesmoke", marginTop: "-50px" }}
    >
      <div className="container mt-5">
        {loader ? (
         <div className="d-flex justify-content-center align-items-center " style={{height:"70vh"}}>
           <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          </div>
        ) : (
          <div className="row justify-content-center gy-5">
            <div className="col-lg-5 order-2 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
              <h2 data-aos="fade-up" className="mt-md-5 mt-0" data-aos-delay={100}>
                {productDetails?.title}
              </h2>
              <div className="d-flex align-items-center mb-2">
                <h5 className="text-secondary mb-0 me-2">{productDetails?.quantity} for </h5>
                <h4 className="mb-0">
                  <s className="text-secondary me-2">{productDetails?.price} &#x20B9;</s>
                  <b className="" style={{ color: "#198754" }}>
                    {productDetails?.discountedPrice} &#x20B9;
                  </b>
                </h4>
              </div>

              <div
                className="col-12 mb-5 d-md-block d-none  row justify-content-center"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <Slider {...settings}>
                  {productDetails?.productGallery?.map((v, i) => {
                    return (
                      <div className="col-lg-2 col-md-3 col-6">
                        <img
                          src={v}
                          className="img-fluid"
                          alt="img not found"
                          data-aos="zoom-out"
                          data-aos-delay={100}
                          style={{ height: "100px", width: "100px", objectFit: "contain" }}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <div
                className="col-12 mb-5 d-block d-md-none  row justify-content-center"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <Slider {...mobileSettings}>
                  {productDetails?.productGallery?.map((v, i) => {
                    return (
                      <div className="col-lg-2 col-md-3 d-flex justify-content-center col-6">
                        <img
                          src={v}
                          className="img-fluid"
                          alt="img not found"
                          data-aos="zoom-out"
                          data-aos-delay={100}
                          style={{ height: "120px", width: "120px", objectFit: "cover" }}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <p data-aos="fade-up" data-aos-delay={100}>
                {productDetails?.discription.substring(0, 300)}
              </p>

              <div className="d-flex " data-aos="fade-up" data-aos-delay={200}>
                <a href="https://wa.me/+918208334548" target="blank" className="btn-book-a-table">
                  Buy Now
                </a>
                <a href="https://wa.me/+918208334548" target="blank" className="btn-book-a-table bg-warning ms-3">
                  Add to cart
                </a>
              </div>
            </div>
            <div className="col-lg-5 order-1 my-auto  d-flex justify-content-md-start  d-flex justify-content-center   text-center text-lg-start">
              <img
                src={productDetails?.productHeroImg}
                className="img-fluid heroProductImageHeight"
                alt="img not found"
                data-aos="zoom-out"
                data-aos-delay={300}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductDetailedPage;
