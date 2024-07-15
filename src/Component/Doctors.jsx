import doctors1 from "../assets/Images/doctors-1.jpg";
import doctors2 from "../assets/Images/doctors-2.jpg";
import doctors3 from "../assets/Images/doctors-3.jpg";
import doctors4 from "../assets/Images/doctors-4.jpg";
function Doctors() {
  return (
    <>
      <section id="Doctor" className="Doctor">
        <div className="section-title">
          <h2>Doctors</h2>
          <p>
            At Medilab, we take pride in our team of highly skilled and
            compassionate doctors. Each member of our medical team is dedicated
            to providing exceptional care and personalized treatment plans to
            meet the unique needs of every patient.
          </p>
        </div>

        <div className="container">
          <div className="box1">
            <div className="left">
              <img className="img" src={doctors1} />
            </div>
            <div className="right">
              <h1>Walter White</h1>
              <p>Chief Medical Officer</p>
              <h2 className="para">
                Explicabo voluptatem mollitia et repellat qui dolorum quasi
              </h2>
              <span>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="box1">
            <div className="left">
              <img className="img" src={doctors2} />
            </div>
            <div className="right">
              <h1>Walter White</h1>
              <p>Chief Medical Officer</p>
              <h2 className="para">
                Explicabo voluptatem mollitia et repellat qui dolorum quasi
              </h2>
              <span>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="box1">
            <div className="left">
              <img className="img" src={doctors3} />
            </div>
            <div className="right">
              <h1>Walter White</h1>
              <p>Chief Medical Officer</p>
              <h2 className="para">
                Explicabo voluptatem mollitia et repellat qui dolorum quasi
              </h2>
              <span>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="box1">
            <div className="left">
              <img className="img" src={doctors4} />
            </div>
            <div className="right">
              <h1>Walter White</h1>
              <p>Chief Medical Officer</p>
              <h2 className="para">
                Explicabo voluptatem mollitia et repellat qui dolorum quasi
              </h2>
              <span>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Doctors;
