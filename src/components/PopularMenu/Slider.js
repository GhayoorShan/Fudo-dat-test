import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const SliderOne = ({ categoryItem }) => {
  //   const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div>
      {/* <div>
        <button
          onClick={() => {
            sliderRef.current.slickPrev();
          }}
        >
          <KeyboardArrowLeftIcon />
        </button>
        <button
          onClick={() => {
            sliderRef.current.slickNext();
          }}
        >
          <KeyboardArrowRightIcon />
        </button>
      </div> */}
      <div className="container">
        <Slider {...settings}>
          {categoryItem &&
            categoryItem.map((item) => (
              <div className="col " key={item.id}>
                <div className="card  mx-2">
                  <img
                    src={item.image}
                    height={250}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      {item.currency} {item.price}
                    </p>
                    <button className="btn p-0">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderOne;
