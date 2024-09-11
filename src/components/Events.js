import React, { useEffect, useState } from "react";
// import { getEvents } from "../services/admin.service";
import { useGlobalState } from "../GlobalProvider";
// import EventCard from "./EventCard";

function Events() {
  // const { setGlobalState, globalState } = useGlobalState();
  // const [eventList, setEventList] = useState([]);
  // const getEventList = async () => {
  //   try {
  //     let response = await getEvents();
  //     setEventList(response.data.events);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getEventList();
  // }, []);
  return(
    <section id="chefs" className="chefs section-bg">
    <div className="container" data-aos="fade-up">
    <div className="section-header">
          <h2>Blogs</h2>
          <p>
            Sharing <span>Our Moments</span> At Nature Monk
          </p>
        </div>
      <div className="row gy-4">
        {/* {eventList?.map((v, i) => {
          return (
            <EventCard v={v} i={i}/>
          );
        })} */}

        
      </div>
      
    </div>
  </section>
  )
  
}

export default Events;
