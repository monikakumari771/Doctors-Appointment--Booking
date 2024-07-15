import image from "../assets/Images/about.jpg";
function About() {
  return (
    <>
      <section id="about" className="about-sec">
        <div className="about-head">
          <div className="left">
            <img className="img" src={image} />
          </div>
          <div className="right">
            <h1>About Us</h1>
            <p>
              Welcome to Medilab, where your health and well-being are our top
              priorities. Our clinic is dedicated to providing the highest
              quality of medical care in a compassionate and friendly
              environment.
            </p>
            <div className="bottom-sec">
              <div className="box1">
                <div className="icons">
                  <i className="bi bi-fingerprint"></i>
                </div>
                <div className="heading">
                  <h3>Excellence</h3>
                  <p>
                    We strive for excellence in every aspect of our practice,
                    ensuring the highest standards of medical care and patient
                    satisfaction.
                  </p>
                </div>
              </div>

              <div className="box1">
                <div className="icons">
                  <i className="bi bi-gift"></i>
                </div>
                <div className="heading">
                  <h3>Experienced Professionals</h3>
                  <p>
                    Our team of highly skilled and compassionate doctors,
                    nurses, and healthcare professionals is committed to
                    offering you personalized and effective medical care.
                  </p>
                </div>
              </div>

              <div className="box1">
                <div className="icons">
                  <i className="bi bi-ui-radios-grid"></i>
                </div>
                <div className="heading">
                  <h3>Patient-Centered Care</h3>
                  <p>
                    Your health and well-being are our top priorities. We focus
                    on providing personalized care that meets your unique needs
                    and preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
