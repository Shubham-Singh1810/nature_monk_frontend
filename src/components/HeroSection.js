import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ReactPlayer from 'react-player';
import { useGlobalState } from "../GlobalProvider";
import {useNavigate, Link} from "react-router-dom";

function HeroSection() {
  const { setGlobalState, globalState } = useGlobalState();
  const [slidesToShow, setSlidesToShow] = useState(7);
  const navigate = useNavigate()
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
  const storyData = [
    {
    videoUrl:"https://www.youtube.com/watch?v=KjIipEvgjrE",
    title:"Oil",
    imgUrl:"https://tse2.mm.bing.net/th?id=OIP.5M59F2tXW_2Q7sLm2RmVggHaEh&pid=Api&P=0&h=180"
  },
  {
    videoUrl:"https://www.youtube.com/watch?v=KjIipEvgjrE",
    title:"A2 Milk",
    imgUrl:"https://tse2.mm.bing.net/th?id=OIP.vzrWbmKpaR2_Tx_GxWUaVQHaGN&pid=Api&P=0&h=180"
  },
  {
    videoUrl:"https://www.youtube.com/watch?v=KjIipEvgjrE",
    title:"Ghee",
    imgUrl:"https://tse4.mm.bing.net/th?id=OIP.FsjIW13T_mMTlDDZEjMmRgHaEc&pid=Api&P=0&h=180"
  },
  {
    videoUrl:"https://www.youtube.com/watch?v=KjIipEvgjrE",
    title:"Jaggery",
    imgUrl:"https://tse1.explicit.bing.net/th?id=OIP.PZjdxWJnO-cinH0VWs9QdwHaHa&pid=Api&P=0&h=180"
  },
  {
    videoUrl:"https://www.youtube.com/watch?v=KjIipEvgjrE",
    title:"Pulses",
    imgUrl:"https://tse4.mm.bing.net/th?id=OIP.jkv3y6Ot2SgqIQ8Kj2r8dwHaEr&pid=Api&P=0&h=180"
  },
  {
    videoUrl:"https://www.youtube.com/watch?v=KjIipEvgjrE",
    title:"Oil",
    imgUrl:"https://tse2.mm.bing.net/th?id=OIP.5M59F2tXW_2Q7sLm2RmVggHaEh&pid=Api&P=0&h=180"
  },
  {
    videoUrl:"https://www.youtube.com/watch?v=KjIipEvgjrE",
    title:"A2 Milk",
    imgUrl:"https://tse2.mm.bing.net/th?id=OIP.vzrWbmKpaR2_Tx_GxWUaVQHaGN&pid=Api&P=0&h=180"
  },
  {
    videoUrl:"https://www.youtube.com/watch?v=KjIipEvgjrE",
    title:"Ghee",
    imgUrl:"https://tse4.mm.bing.net/th?id=OIP.FsjIW13T_mMTlDDZEjMmRgHaEc&pid=Api&P=0&h=180"
  },
  {
    videoUrl:"https://www.youtube.com/watch?v=KjIipEvgjrE",
    title:"Jaggery",
    imgUrl:"https://tse1.explicit.bing.net/th?id=OIP.PZjdxWJnO-cinH0VWs9QdwHaHa&pid=Api&P=0&h=180"
  },
  {
    videoUrl:"https://www.youtube.com/watch?v=KjIipEvgjrE",
    title:"Pulses",
    imgUrl:"https://tse4.mm.bing.net/th?id=OIP.jkv3y6Ot2SgqIQ8Kj2r8dwHaEr&pid=Api&P=0&h=180"
  },
 
]
  return (
    <section id="hero" className="hero d-flex align-items-center " style={{background:"white"}}>
      <div className="container">
        <div className="marginTopSlider">
        <Slider {...settings}>
          {globalState?.productList?.map((v, i) => {
            return (
              <div className=" d-flex justify-content-center" onClick={()=>navigate(`/product/${v?._id}`)}>
                <div className=" mx-3">
                  <img src={v?.productHeroImg} style={{objectFit: "cover"}} className="img-fluid storyImage" alt />
                  {/* <iframe width="100" height="100" src="https://www.youtube.com/embed/WhOrIUlrnPo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                  {/* <ReactPlayer style={{borderRadius:"50%"}} muted={true}  playing={true} height="100" width="100" url={v?.videoUrl} /> */}

                  <p className="mt-2 text-center fontSize12">
                    <b className="fontSize12">{v?.title.length>15 ? v?.title.substring(0, 12) + "...": v?.title}</b>
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
              Delivering to finest
              <br />
              from nature
            </h2>
            <p data-aos="fade-up" data-aos-delay={100}>
              At Nature Monk, we believe in the power of nature to nourish and heal. We offer a range of organic
              products that are free from preservatives and delivered to you in their pure, natural form.
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
          <div className="col-lg-5 order-1  d-flex justify-content-lg-end  order-lg-2 text-center text-lg-start">
            <img
              // src="/assets/img/image.png"
              src="https://res.cloudinary.com/dynnd29fq/image/upload/v1724891797/owqvf1c1cggf0bghdxvw.jpg"
              className="img-fluid"
              alt="img not found"
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
