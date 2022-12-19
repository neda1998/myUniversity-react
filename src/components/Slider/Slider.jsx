import React from "react";
import "./Slider.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function Slider() {
  return (
    <>
      <div className="container-fluid">
        <div className="container-box">
          <OwlCarousel
            items={1}
            className="owl-theme carousel-slide"
            loop
            nav
            margin={8}
            autoplay={true}
          >
            <div>
              <img
                src="https://myapi.iaun.ac.ir/static/pictures/wesdffsdfs5.png"
                alt="img"
              />
            </div>
            <div>
              <img
                src="https://myapi.iaun.ac.ir/static/pictures/wesdffsdfs4.png"
                alt="img"
              />
            </div>
            <div>
              <img
                src="https://myapi.iaun.ac.ir/static/pictures/wesdffsdfs2.png"
                alt="img"
              />
            </div>
            <div>
              <img
                src="https://myapi.iaun.ac.ir/static/pictures/wesdffsdfs9.png"
                alt="img"
              />
            </div>
            <div>
              <img
                src="https://myapi.iaun.ac.ir/static/pictures/wesdffsdfs3.png"
                alt="img"
              />
            </div>
            <div>
              <img
                src="https://myapi.iaun.ac.ir/static/pictures/wesdffsdfs4.png"
                alt="img"
              />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}

export default Slider;
