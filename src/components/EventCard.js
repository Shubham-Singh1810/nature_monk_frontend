import React, { useState } from "react";
import { useGlobalState } from "../GlobalProvider";
import Slider from "react-slick";

function EventCard({ v, i }) {
  const { globalState } = useGlobalState();
  const [currentEvent, setCurrentEvent] = useState(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const handleCardClick = (event) => {
    setCurrentEvent(event);
  };

  const modalId = `modal-${i}`;

  return (
    <>
      <div
        className="col-lg-3 col-md-6 d-flex align-items-stretch"
        data-aos="fade-up"
        data-aos-delay={(i + 1) * 100}
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
        onClick={() => handleCardClick(v)}
      >
        <a className="w-100">
          <div className="chef-member w-100">
            <div className="member-img">
              <img
                src={globalState?.imageBaseUrl + v?.event_image}
                className="img-fluid"
                style={{ height: "250px", width:"100%" }}
                alt="not provided"
              />
            </div>
            <div className="member-info">
              <h4>
                <a href={v?.event_link} target="_blank" rel="noopener noreferrer" className="text-secondary">
                <i className="fa fa-laptop"></i>  Nature Monk Blog
                </a>
              </h4>
              {/* <div className="bg-light text-secondary d-flex justify-content-between p-2">
                <a>
                  <i className="fa text-secondary fa-calendar me-2" />
                  <span>{v?.event_date}</span>
                </a>
                <a>
                  <i className="fa text-secondary fa-home me-2" />
                  <span>{v?.event_venue}</span>
                </a>
              </div> */}
              <p style={{ textAlign: "left" }} className="bg-light p-1">
               A great event title is one that will immediately trigger your audience’s interest...
              </p>
            </div>
          </div>
        </a>
      </div>

      <div
        className="modal fade"
        id={modalId}
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {currentEvent && (
              <>
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    {currentEvent.event_title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <Slider {...settings}>
                    <img
                      src={globalState.imageBaseUrl + currentEvent.event_image}
                      className="d-block w-100"
                      style={{height:"500px"}}
                      alt="..."
                    />
                    <img
                      src={globalState.imageBaseUrl + currentEvent.event_image_opt1}
                      className="d-block w-100"
                      alt="..."
                      style={{height:"500px"}}
                    />
                    <img
                      src={globalState.imageBaseUrl + currentEvent.event_image_opt2}
                      className="d-block w-100"
                      alt="..."
                      style={{height:"500px"}}
                    />
                    <img
                      src={globalState.imageBaseUrl + currentEvent.event_image_opt3}
                      className="d-block w-100"
                      alt="..."
                      style={{height:"500px"}}
                    />
                    <img
                      src={globalState.imageBaseUrl + currentEvent.event_image_opt4}
                      className="d-block w-100"
                      alt="..."
                      style={{height:"500px"}}
                    />
                  </Slider>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCard;
