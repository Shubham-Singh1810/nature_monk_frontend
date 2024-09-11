import React from "react";
import Typewriter from "typewriter-effect";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useGlobalState } from "../GlobalProvider";
function BestSeller() {
  const { setGlobalState, globalState } = useGlobalState();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <section id="testimonials" className="testimonials bg-light">
      <div className="container" data-aos="fade-up">
      <h1 className="text-center text-secondary mb-5" style={{ fontFamily: "monospace" }}>
          Our Best Seller
        </h1>
        <Slider {...settings}>
          {globalState?.productList?.filter((v, i)=>{
            return v?.subCategory.includes("Best Seller")
          })?.map((v, i) => {
            return (
              <div className="testimonial-item">
                <div className="row gy-4 justify-content-center">
                <div className="col-lg-5 order-2 order-lg-2 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                <h2><span className="text-secondary">{v?.quantity}</span> {v?.title}</h2>
                <h3 className="mb-4 w-50">
                  <s className="text-secondary me-1" >
                    {v?.price} &#x20B9;
                  </s>
                  <b className="" style={{ color: "#198754" }}>
                    {v?.discountedPrice} &#x20B9;
                  </b>
                </h3>
                <p data-aos="fade-up" data-aos-delay={100}>
                  {v?.discription?.substring(0, 200)}
                </p>
                <button className="btn btn-success w-100 w-md-50">Buy Now</button>
              </div>
              <div className="col-lg-5 order-1 order-lg-1 d-flex justify-content-center text-center text-lg-start">
                <img
                   src={v?.productHeroImg}
                   style={{height:"300px" , width:"300px", objectFit:"cover"}}
                  className="img-fluid"
                  alt="img not found"
                />
              </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
  return (
    <section id="hero" className="hero d-flex align-items-center bg-light">
      <div className="container">
        <h1 className="text-center text-secondary" style={{ fontFamily: "monospace" }}>
          <Typewriter
            options={{
              strings: ["Our Best Seller", "Ordered by more than 100 times"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        
        {[1, 2, 3, 4].map((v, i) => {
          return (
           <div className="testimonial-item">
             <div className="row gy-4 justify-content-center">
              <div className="col-lg-5 order-1 order-lg-2 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                <h2>A2 Gir</h2>
                <p>
                  <span className="btn btn-sm btn-outline-success">2000 &#x20B9;</span>
                </p>
                <p data-aos="fade-up" data-aos-delay={100}>
                  Made from the finest Gir cow milk using the traditional Bilona method. Rich in nutrients and flavor.
                </p>
                <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
                  <a href="https://wa.me/+918208334548" target="_blank" className="btn-book-a-table">
                    Buy Now
                  </a>
                </div>
              </div>
              <div className="col-lg-5 order-2 order-lg-1 d-flex justify-content-center text-center text-lg-start">
                <img
                  src="/assets/img/image.png"
                  className="img-fluid"
                  alt="img not found"
                  data-aos="zoom-out"
                  data-aos-delay={300}
                  style={{ height: "400px" }}
                />
              </div>
            </div>
            </div>
          );
        })}
       
        
      </div>
    </section>
  );
}

export default BestSeller;
