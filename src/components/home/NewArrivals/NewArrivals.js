import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Clay Tea Cups"
            price="249.00"
            badge={true}
            des="Artisan-crafted clay tea cups, a perfect blend of elegance and functionality for a truly sensory tea-drinking experience."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Plant Pot"
            price="199.00"
            badge={true}
            des="Elevate your greenery with our stylish and durable clay plant pots, blending timeless design with premium craftsmanship for a touch of nature in every space."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Cofee Mugs"
            price="169.00"
            badge={true}
            des="Experience the perfect blend of rustic charm and modern elegance with our artisan-crafted clay coffee mugs, combining style and functionality for your daily brew."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Clay Sculpture"
            price="299.00"
            badge={false}
            des="Captivating and intricate clay sculptures, each a unique masterpiece, crafted with skill and passion to bring artistic elegance to your space."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="Plant Pot"
            price="199.00"
            badge={false}
            des="Elevate your greenery with our stylish and durable clay plant pots, blending timeless design with premium craftsmanship for a touch of nature in every space."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
