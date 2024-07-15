import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from "../assets/Images/testimonials-1.jpg";
import photo from "../assets/Images/testimonials-2.jpg";
import img from "../assets/Images/testimonials-3.jpg";
import picture from "../assets/Images/testimonials-4.jpg";
import img1 from "../assets/Images/testimonials-5.jpg";

function Caursol() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        <div className="carousel-box">
          <img className="img" src={image} />
          <h1>Dr. John Doe</h1>
          <h2>Pediatrics</h2>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Working with children and their families is a privilege. I am
            committed to creating a welcoming and reassuring environment where
            children feel comfortable and parents feel confident in the care we
            provide. Watching our young patients grow and thrive is one of the
            greatest joys of my career.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
        <div className="carousel-box">
          <img className="img" src={photo} />
          <h1>Dr. Emily Johnson,</h1>
          <h2>Women’s Health</h2>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Womens health is a dynamic and ever-evolving field. At [Your Clinics
            Name], I am proud to offer comprehensive care that addresses all
            stages of a womans life.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
        <div className="carousel-box">
          <img className="img" src={img} />
          <h1>Dr. Sarah Martinez</h1>
          <h2>Mental Health</h2>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Mental health is an integral part of overall health. At Medilab, we
            take a comprehensive approach to mental wellness, offering support
            and treatment for a wide range of conditions.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
        <div className="carousel-box">
          <img className="img" src={picture} />
          <h1>Dr. Michael Lee,</h1>
          <h2>Cardiology</h2>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Heart health is paramount, and at Medilab, we are equipped with the
            latest technology and treatments to manage and prevent
            cardiovascular diseases.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
        <div className="carousel-box">
          <img className="img" src={img1} />
          <h1>Dr. Jane Smith,</h1>
          <h2>Family Medicine</h2>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            At Medilab, our focus is always on providing holistic and
            personalized care to each patient. We understand that every
            individual is unique, and we strive to create treatment plans that
            are tailored to their specific needs.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
      </Carousel>
      ;
    </>
  );
}

export default Caursol;
