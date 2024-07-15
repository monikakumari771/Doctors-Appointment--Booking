import CountUp from "react-countup";

function Counter() {
  return (
    <>
      <section className="counter">
        <div className="count-box">
          <div className="doctor-icons">
            <i className="bi bi-person-fill-add"></i>
          </div>
          <span>
            <CountUp end={4500} duration={5} />
          </span>
          <p>Happy Patients</p>
        </div>
        <div className="count-box">
          <div className="doctor-icons">
            <i className="bi bi-person-fill-add"></i>
          </div>
          <span>
            <CountUp end={200} duration={5} />
          </span>
          <p>Hospital Rooms</p>
        </div>
        <div className="count-box">
          <div className="doctor-icons">
            <i className="bi bi-person-fill-add"></i>
          </div>
          <span>
            <CountUp end={450} duration={5} />
          </span>
          <p>Award Win</p>
        </div>
        <div className="count-box">
          <div className="doctor-icons">
            <i className="bi bi-person-fill-add"></i>
          </div>
          <span>
            <CountUp end={20} duration={5} />
          </span>
          <p>Ambulance</p>
        </div>
      </section>
    </>
  );
}

export default Counter;
