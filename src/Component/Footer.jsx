function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-cont">
          <div className="Top">
            <div className="box">
              <h3>Medilab</h3>
              <p>
                A108 Adam Street
                <br />
                New York, NY 535022
                <br />
                United States
                <br />
                <br />
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>
            <div className="box1">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#about"> About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#services"> Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#"> Terms of Service</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="box1">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Body Surgery</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Child Care</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Major Operation</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Heart Surgery</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Mental Health</a>
                </li>
              </ul>
            </div>

            <div className="newsletter">
              <h4>Join Our Newsletter</h4>
              <p>
                Subscribe to our newsletter to receive health tips, clinic
                updates, and special offers directly to your inbox.
              </p>
              <form>
                <input type="email" name="email" />
                <input className="sub-btn" type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
          <div className="Bottom">
            <div className="left">
              © Copyright <b>Medilab.</b> All Rights Reserved <br />
              Designed by <span className="color-box">Medilab</span>
            </div>
            <div className="right">
              <span>
                <i className="bi bi-twitter"></i>
              </span>
              <span>
                <i className="bi bi-facebook"></i>
              </span>
              <span>
                <i className="bi bi-instagram"></i>
              </span>
              <span>
                <i className="bi bi-linkedin"></i>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
