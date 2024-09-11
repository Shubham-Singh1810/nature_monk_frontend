import React from "react";

function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>About Us</h2>
          <p>
            Learn More <span>About Us</span>
          </p>
        </div>
        <div className="row gy-4">
          <div
            className="col-lg-7 position-relative about-img"
            style={{ backgroundImage: "url(https://tse4.mm.bing.net/th?id=OIP.FsjIW13T_mMTlDDZEjMmRgHaEc&pid=Api&P=0&h=180)" , backgroundSize:"100%, 100%", backgroundRepeat:"no-repeat"}}
            data-aos="fade-up"
            data-aos-delay={150}
          >
            <div className="call-us position-absolute">
              <h4>Contact Us</h4>
              <p>+91 9434386623</p>
            </div>
          </div>
          <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay={300}>
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
              Welcome to Nature Monk, where tradition meets purity. We are committed to providing you with the finest organic products, crafted using age-old methods that preserve nature's goodness. Our journey began with a passion for healthy living and a desire to bring back the authentic taste of traditional foods.
              </p>
              {/* <ul>
                <li>
                  <i className="bi bi-check2-all" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i className="bi bi-check2-all" /> Duis aute irure dolor in reprehenderit in voluptate velit.
                </li>
                <li>
                  <i className="bi bi-check2-all" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla
                  pariatur.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident
              </p> */}
              <div className="position-relative mt-4">
                <img src="https://tse2.mm.bing.net/th?id=OIP.vzrWbmKpaR2_Tx_GxWUaVQHaGN&pid=Api&P=0&h=180" className="img-fluid w-100" alt />
                <a href="https://www.facebook.com/100064732718856/posts/838598358307914/?mibextid=bgAApDAIfEsnpeLk" target="_blank" className="glightbox play-btn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
