import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// import {getTestimonials} from "../services/admin.service"
function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  // const [testimonialListArr, setTestimonialListArr] = useState([]);
  // const getTestimonialsList = async () => {
  //   try {
  //     let response = await getTestimonials();
  //     if (response.status == 200) {
  //       setTestimonialListArr(response?.data?.testimonials);
  //     }
  //   } catch (error) {
  //     // toast.error("Something went wrong");
  //   }
  // };
  // useEffect(() => {
  //   getTestimonialsList();
  // }, []);
  const StarRating = (number) => {
    console.log(number);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<i key={i} className={i < number ? "bi bi-star-fill" : "fa fa-star-o"} aria-hidden="true"></i>);
    }

    return <div className="star-container">{stars}</div>;
  };
  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Testimonials</h2>
          <p>
            What Are They <span>Saying About Us</span>
          </p>
        </div>
        <Slider {...settings}>
          {[1, 2, 3, 4, 5]?.map((v, i) => {
            return (
              <div className="testimonial-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-6">
                    <div className="testimonial-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left" />
                        babel-preset-react-app is part of the create-react-app project, which is not maintianed anymore.
                        It is thus unlikely that this bug will ever be fixed. Add
                        "@babel/plugin-proposal-private-property-in-object" to your devDependencies to work around this
                        error. This will make this message go away.
                        <i className="bi bi-quote quote-icon-right" />
                      </p>
                      <h3>Shubham Singh</h3>
                      <h4>Patna, Bihar</h4>
                      <div className="stars">{StarRating(3)}</div>
                    </div>
                  </div>
                  <div className="col-lg-2 my-auto text-center">
                    <img src="/assets/img/user.png" className="img-fluid testimonial-img" alt />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
