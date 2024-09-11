import React, {useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addContactQuery } from "../services/user.service";
import { useNavigate } from "react-router-dom";
function ContactUs() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_name: '',
    contact: '',
    subject: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      let response = await addContactQuery(formData);
      if (response.data.message == "Your query submitted successfully!") {
        toast.success("Your query submitted successfully!");
        setTimeout(() => {
          setFormData({
            user_name: "",
            contact: "",
            subject: "",
            query: "",
          });
          navigate("/");
        }, 1500);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Contact</h2>
          <p>
            Need Help? <span>Contact Us</span>
          </p>
        </div>
        <div className="mb-3">
          <iframe
            style={{ border: 0, width: "100%", height: 350 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.7650141166987!2d88.35328402498803!3d22.53081257952162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02777fe1714fb5%3A0x9f7e1117b710131d!2sThe%20Residence!5e1!3m2!1sen!2sin!4v1716106633156!5m2!1sen!2sin"
            frameBorder={0}
            allowFullScreen
          />
          {/* <iframe src="" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> */}
        </div>
        {/* End Google Maps */}
        <div className="row gy-4">
          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-map flex-shrink-0" />
              <div>
                <h3>Our Address</h3>
                <p>
                  Office : 1C/2 Fourth floor, Chowbaga Road ,Kolkata 700039 <br /> Residence : 5B/ 12 Ballygunge
                  Circular Road , Kolkata 700019
                </p>
              </div>
            </div>
          </div>
          {/* End Info Item */}
          <div className="col-md-6">
            <div className="info-item d-flex align-items-center">
              <i className="icon bi bi-envelope flex-shrink-0" />
              <div>
                <h3>Email Us</h3>
                <p>
                  contact@avirose.in <br />
                  rits2807@gmail.com
                </p>
              </div>
            </div>
          </div>
          {/* End Info Item */}
          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-telephone flex-shrink-0" />
              <div>
                <h3>Call Us</h3>
                <p>
                  +91 9434386623 <br />
                  +1 (848256-6622)
                </p>
              </div>
            </div>
          </div>
          {/* End Info Item */}
          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-share flex-shrink-0" />
              <div>
                <h3>Opening Hours</h3>
                <div>
                <strong>Mon-Sat : </strong> 10AM - 06PM
                <br />
                Sunday : Closed
                </div>
              </div>
            </div>
          </div>
          {/* End Info Item */}
        </div>
        <form className="php-email-form p-3 p-md-4" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xl-6 form-group">
          <input
            type="text"
            name="user_name"
            className="form-control"
            id="name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-xl-6 form-group">
          <input
            type="text"
            className="form-control"
            name="contact"
            id="phone"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="subject"
          id="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          name="query"
          rows={5}
          placeholder="Message"
          value={formData.query}
          onChange={handleChange}
          required
        />
      </div>
      <div className="my-3">
        <div className="loading">Loading</div>
        <div className="error-message" />
        <div className="sent-message">Your message has been sent. Thank you!</div>
      </div>
      <div className="text-center">
        <button type="submit">Send Message</button>
      </div>
    </form>
        {/*End Contact Form */}
      </div>
      <ToastContainer />
    </section>
  );
}

export default ContactUs;
