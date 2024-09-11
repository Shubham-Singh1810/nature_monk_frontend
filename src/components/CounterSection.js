import React from "react";
import CountUp from "react-countup";
function CounterSection() {
  return (
    <section id="stats-counter" className="stats-counter">
      <div className="container" data-aos="zoom-out">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <CountUp end={53} />

              {/* <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" /> */}
              <p>Happy Clients</p>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              {/* <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" /> */}
              <CountUp end={100} />
              <p>Products</p>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              {/* <span data-purecounter-start={0} data-purecounter-end={1453} data-purecounter-duration={1} className="purecounter" /> */}
              <CountUp end={80} />
              <p>Orders</p>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <CountUp end={130} />
              {/* <span data-purecounter-start={0} data-purecounter-end={32} data-purecounter-duration={1} className="purecounter" /> */}
              <p>Blogs</p>
            </div>
          </div>
          {/* End Stats Item */}
        </div>
      </div>
    </section>
  );
}

export default CounterSection;
