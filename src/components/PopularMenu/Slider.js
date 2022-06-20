import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useCart } from "react-use-cart";

const SliderOne = ({ categoryItem }) => {
  const { addItem } = useCart();

  console.log(addItem);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="container">
        <Slider {...settings}>
          {categoryItem &&
            categoryItem.map((item) => (
              <div className="col " key={item.id}>
                <div className="card mx-2 ">
                  <img
                    src={item.image}
                    height={200}
                    className="rounded-top"
                    alt="..."
                  />
                  <div className="card-body  bg-colored">
                    <p className="card-font">{item.title}</p>
                    <p className="card-font">
                      {item.currency} {item.price}
                    </p>
                    <button
                      className="btn p-0 card-font"
                      onClick={() => addItem(item)}
                    >
                      Add to Cart
                      <ShoppingCartOutlinedIcon
                        className="mx-3"
                        fontSize="small"
                      />
                    </button>
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
