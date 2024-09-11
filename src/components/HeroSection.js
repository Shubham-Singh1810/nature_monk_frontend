import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ReactPlayer from 'react-player';
import { useGlobalState } from "../GlobalProvider";
import { useNavigate, Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function HeroSection() {
  const { globalState } = useGlobalState();
  const [slidesToShow, setSlidesToShow] = useState(7);
  const navigate = useNavigate();

  useEffect(() => {
   

    const handleResize = () => {
      if (window.innerWidth < 500) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(7);
      }
    };

    // Set the initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
  };

  return (
    <section id="hero" className="hero d-flex align-items-center" style={{ background: "white" }}>
      <div className="container">
        <div className="marginTopSlider">
          <Slider {...settings}>
            {globalState?.productList?.length ==0
              ? Array.from({ length: slidesToShow }).map((_, i) => (
                  <div key={i} className="d-flex justify-content-center">
                    <div className="mx-3">
                      <Skeleton height={window.innerWidth < 500 ? 80:  120} width={window.innerWidth < 500 ? 80: 120} style={{ borderRadius: '50%' }} />
                      <Skeleton width={window.innerWidth < 500 ? 80:  120} height={window.innerWidth < 500 ? 15:  20} className="mt-2" />
                    </div>
                  </div>
                ))
              : globalState?.productList?.map((v, i) => {
                  return (
                    <div
                      className="d-flex justify-content-center"
                      key={i}
                      onClick={() => navigate(`/product/${v?._id}`)}
                    >
                      <div className="mx-3">
                        <img
                          src={v?.productHeroImg}
                          style={{ objectFit: "cover" }}
                          className="img-fluid storyImage"
                          alt="Product"
                        />
                        <p className="mt-2 text-center fontSize12">
                          <b className="fontSize12">
                            {v?.title.length > 15 ? v?.title.substring(0, 12) + "..." : v?.title}
                          </b>
                        </p>
                      </div>
                    </div>
                  );
                })}
          </Slider>
        </div>

        <div className="row justify-content-between gy-5">
          <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
            <h2 data-aos="fade-up">
               Delivering the finest from nature
              <br />
            </h2>
            <p data-aos="fade-up" data-aos-delay={100}>
              
                At Nature Monk, we believe in the power of nature to nourish and heal. We offer a range of organic products that are free from preservatives and delivered to you in their pure, natural form.
              
            </p>
            <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
              <Link to="/contact-us" className="btn-book-a-table">
                Contact Us
              </Link>
              <a
                href="https://www.facebook.com/reel/865469085404815"
                className="glightbox btn-watch-video d-flex align-items-center"
                target="blank"
              >
                <i className="bi bi-play-circle" />
                <span>Watch Video</span>
              </a>
            </div>
          </div>
          <div className="col-lg-5 order-1 d-flex justify-content-lg-end order-lg-2 text-center text-lg-start">
            
              <img
                src="https://res.cloudinary.com/dynnd29fq/image/upload/v1724891797/owqvf1c1cggf0bghdxvw.jpg"
                className="img-fluid"
                alt="Nature Monk"
                data-aos="zoom-out"
                data-aos-delay={300}
              />
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
