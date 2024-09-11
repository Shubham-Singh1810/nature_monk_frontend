import React from "react";

function WhyChooseUs() {
  const data = [
    {
      title: "Our Philosophy",
      para: "At Nature Monk, we believe in the power of natural processes. We use sustainable practices to ensure that our products, like A2 milk and bilona ghee, remain pure and free from additives. We prioritize the well-being of our Gir cows, allowing them to graze freely and live stress-free, which reflects in the quality of our milk.",
    },
    {
      title: "Our Products",
      para: "From kachi ghani oils to organic honey, each item is carefully crafted to deliver health and taste. We take pride in offering products that support your well-being and enhance your culinary experiences.",
    },
    {
      title: "Community and Environment",
      para: "We work closely with local farmers, supporting sustainable agriculture and promoting eco-friendly practices. Our commitment to the environment is as strong as our dedication to quality.",
    },
    {
      title: "Join Us",
      para: `Explore our range of natural products and taste the difference that tradition and purity bring. Connect with us on our journey towards healthier living, and experience the Nature Monk difference.`,
    },
  ];
  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4 " >
          
          {/* End Why Box */}
          <div className="col-lg-12 my-3 d-flex align-items-center">
            <div className="row gy-4">
              {data?.map((v, i) => {
                return (
                  <div className="col-xl-3 shadow" data-aos="fade-up" data-aos-delay={(i + 1) * 200}>
                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                      {/* <i className="bi bi-clipboard-data" /> */}
                      <h4>{v?.title}</h4>
                      <p style={{textAlign:"justify"}}>{v?.para}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
