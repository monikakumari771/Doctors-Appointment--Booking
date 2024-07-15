import gallery1 from "../assets/Images/gallery-1.jpg";
import gallery2 from "../assets/Images/gallery-2.jpg";
import gallery3 from "../assets/Images/gallery-3.jpg";
import gallery4 from "../assets/Images/gallery-4.jpg";
import gallery5 from "../assets/Images/gallery-5.jpg";
import gallery6 from "../assets/Images/gallery-6.jpg";
import gallery7 from "../assets/Images/gallery-7.jpg";
import gallery8 from "../assets/Images/gallery-8.jpg";
function Gallery() {
  return (
    <>
      <section className="gallery">
        <div className="section-title">
          <h2>Gallery</h2>
          <h3>
            We invite you to explore our gallery and see firsthand the high
            standards of care and the welcoming environment we maintain at
            Medilab. Your health and comfort are our priorities, and we look
            forward to serving you.
          </h3>
        </div>
        <div className="images-box">
          <div className="img-box">
            <img className="img" src={gallery1} />
          </div>
          <div className="img-box">
            <img className="img" src={gallery2} />
          </div>
          <div className="img-box">
            <img className="img" src={gallery3} />
          </div>
          <div className="img-box">
            <img className="img" src={gallery4} />
          </div>
          <div className="img-box">
            <img className="img" src={gallery5} />
          </div>
          <div className="img-box">
            <img className="img" src={gallery6} />
          </div>
          <div className="img-box">
            <img className="img" src={gallery7} />
          </div>
          <div className="img-box">
            <img className="img" src={gallery8} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
