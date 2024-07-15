function Contact() {
  return (
    <>
      <section id="contact" className="contact-sec">
        <div className="section-title">
          <h2>Contact</h2>
          <h3>
            We are here to help you with all your healthcare needs. Whether you
            have questions, need to schedule an appointment, or want to learn
            more about our services, feel free to reach out to us.
          </h3>
        </div>
        <div>
          <iframe
            width="100%"
            height="300"
            border="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
        </div>

        <div className="container">
          <div className="left">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>

                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>
            </div>
          </div>
          <div className="right">
            <form className="form1">
              <div className="name-email">
                <div className="input-box">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="input-box">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <br />
              <div className="input-box">
                <input
                  type="text"
                  className="form-control"
                  name="Subject"
                  placeholder="Your Subject"
                  required
                />
              </div>
              <br />
              <textarea
                cols={20}
                rows={5}
                className="form-control"
                placeholder="Message"
              ></textarea>
              <br />
              <a href="#">
                <button className="btn">Send Message</button>
              </a>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
