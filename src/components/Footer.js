import React from "react";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row gy-3">
          <div className="col-lg-3 col-md-6 d-flex">
            <i className="bi bi-geo-alt icon" />
            <div>
              <h4>Address</h4>

              <p className="mb-0">
              191, shiv nagar, tarsa road,  <br />
              kanhan 441401
                <br />
              </p>
              {/* <p>
                Residence : 5B/ 12 Ballygunge Circular Road ,<br />
                Kolkata 700019
                <br />
              </p> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 footer-links d-flex">
            <i className="bi bi-telephone icon" />
            <div>
              <h4>Contacts</h4>
              <div className="d-flex">
                <p>
                  <strong>Phone : </strong>
                </p>
                <p className="ms-1">
                  {" "}
                  8208334548
                  
                </p>
              </div>
              <div className="d-flex">
                <p>
                  <strong>Email : </strong>
                </p>
                <p className="ms-1">
                  {" "}
                  naturemonk01@gmail.com
                  
                </p>
              </div>
              
            </div>
          </div>
          <div className="col-lg-3 col-md-6 footer-links d-flex">
            <i className="bi bi-clock icon" />
            <div>
              <h4>Opening Hours</h4>
              <p>
                <strong>Mon-Sat : </strong> 10AM - 06PM
                <br />
                Sunday : Closed
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Follow Us</h4>
            <div className="social-links d-flex">
              <a href="https://www.instagram.com/avirose_in?igsh=MTdlamVtMmpucWVodg==" target="_blank" className="twitter">
                <i className="bi bi-twitter" />
              </a>
              <a href="https://www.instagram.com/avirose_in?igsh=MTdlamVtMmpucWVodg=="  target="_blank" className="facebook">
                <i className="bi bi-facebook" />
              </a>
              <a href="https://www.instagram.com/avirose_in?igsh=MTdlamVtMmpucWVodg==" target="_blank" className="instagram">
                <i className="bi bi-instagram" />
              </a>
              <a href="https://www.instagram.com/avirose_in?igsh=MTdlamVtMmpucWVodg==" target="_blank" className="linkedin">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>Avirose</span>
          </strong>
          . All Rights Reserved
        </div>

        <h6 className="text-center mt-1 mb-0"><a href="https://softtechgem.com/" target="_blank">Powered By Soft Tech Gem</a></h6>
        
        <div className="credits" style={{visibility:"hidden"}}>
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/ */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
