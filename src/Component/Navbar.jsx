import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [showMediaIcons, SetShowMediaIcons] = useState(false);

  return (
    <>
      <section className="home-sec">
        <div className="header-sec">
          <div className="left">
            <h1>Medilab</h1>
          </div>
          <div className={showMediaIcons ? "show" : "right"}>
            <ul>
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#about">
                <li>About</li>
              </a>
              <a href="#services">
                <li>Services</li>
              </a>
              <a href="#Department">
                <li>Department</li>
              </a>
              <a href="#Doctor">
                <li>Doctors</li>
              </a>
              <a href="#contact">
                <li>Contact</li>
              </a>
            </ul>
            <a href="#appointment">
              <button className="btn">
                <span className="hide-text">Make an</span> Appointment
              </button>
            </a>
            <span className="menu-icon">
              <a href="#" onClick={() => SetShowMediaIcons(!showMediaIcons)}>
                {showMediaIcons ? (
                  <RxCross2 size={30} />
                ) : (
                  <GiHamburgerMenu size={30} />
                )}
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
