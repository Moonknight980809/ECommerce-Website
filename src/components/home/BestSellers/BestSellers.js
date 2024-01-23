import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Flower Vase"
          price="435.00"
          badge={true}
          des="Elevate your space with our exquisite Clay Flower Vase, a perfect blend of timeless craftsmanship and natural beauty."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Clay vessel"
          price="149.00"
          badge={false}
          des="Timeless elegance meets artisanal craftsmanship in our exquisite clay vessel, adding a touch of rustic charm to your space."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName=" MarbelMortar and pestel"
          price="199.00"
          badge={true}
          des="Experience the timeless elegance and culinary precision with our Clay Marble Mortar and Pestle, a stylish kitchen essential for grinding and blending spices effortlessly."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Clay Pot"
          price="149.00"
          badge={false}
          des="Exquisite craftsmanship meets timeless elegance in our Clay Pot collection, offering versatile and artfully designed pieces to elevate your culinary experience."
        />
      </div>
    </div>
  );
};

export default BestSellers;
