import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { useGlobalState } from "../GlobalProvider";
function HeroSection2() {
  const { setGlobalState, globalState } = useGlobalState();
  const [productDetails, setProductDetails] = useState(globalState?.productList);

  return (
    <section id="hero" className="hero d-flex align-items-center" style={{ background: "whitesmoke", paddingTop:"50px" }}>
      <div className="container">
        <h1 className="text-center mb-5" style={{ fontFamily: "monospace" }}>
          <Typewriter
            options={{
              strings: ["Deal of the day", "Order now to get 40% off"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        {globalState?.productList
          ?.filter((v, i) => {
            return v?.subCategory.includes("Deal Of the Day");
          })
          .slice(0, 1).map((v, i) => {
            return (
              <div className="row justify-content-center gy-5">
                <div className="col-lg-5 order-2 order-lg-2 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                <h2><span className="text-secondary my-5">{v?.quantity}</span> {v?.title}</h2>
                <h3 className="mb-4 w-50">
                  <s className="text-secondary me-1" >
                    {v?.price * 1.2} &#x20B9;
                  </s>
                  <b className="" style={{ color: "#198754" }}>
                    {v?.price} &#x20B9;
                  </b>
                </h3>
                  <p data-aos="fade-up" data-aos-delay={100}>
                  {v?.discription?.substring(0, 200)}
                  </p>
                  <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
                    <a href="https://wa.me/+918208334548" target="blank" className="btn-book-a-table">
                      Buy Now
                    </a>
                    {/* <a
                href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                className="glightbox btn-watch-video d-flex align-items-center"
              >
                <i className="bi bi-play-circle" />
                <span>Watch Video</span>
              </a> */}
                  </div>
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
            );
          })}
      </div>
    </section>
  );
}

export default HeroSection2;
