import React from "react";

const Footer = () => {
  return (
    <div class="mt-5">
      <div id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Technical Communication</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Marketing Communication</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Information Architecture</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  Saratoga, California, United States
                  <br /> <strong>Phone:</strong> +1 5589 55488 55
                  <br /> <strong>Email:</strong> info@example.com
                  <br />
                </p>
                <div class="social-links mt-3">
                  <a href="#" class="twitter">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" class="facebook">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#" class="linkedin">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 footer-info">
                <p>
                  <strong>
                    Content Creators
                    <br />
                    • Technical • Digital • Creative <br />• Literary
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            ©2021 All content on this site is the property of Trivadi, Inc.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
