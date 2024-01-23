import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Welcome To Clay & Crafts:-</span>{" "}
         <p>
Where tradition meets innovation in the world of exquisite crafts! As a family-driven enterprise, we take pride in curating and bringing to you the finest well-crafted jewelries and clay pottery sets from the culturally rich town of Shantiniketan.

Founded with a passion for preserving and promoting the artisanal heritage of Shantiniketan, our journey is rooted in a legacy of quality and authenticity. We have been dedicated to providing a unique door-to-door service within the societies and neighboring communities in Bangalore.

At Clay & Crafts, we have embarked on an exciting venture to enhance our reach and impact. We are now extending our services to the digital realm. Our commitment is not just to showcase the beauty of Shantiniketan's crafts but to also embrace the potential of technology. Join us on this journey as we blend tradition with innovation, offering you a seamless online experience while supporting the growth of our family business. Thank you for being a part of our World Of Handcrafted Beauty, Where Clay Pottery And Artisanal Products Come Together To Create A Unique And Inspiring Experience. Our Passion Lies In Creating Exquisite Pieces That Will Bring Joy And Elegance To Your Home. Each Product Is Born From A Fusion Of Creativity And Craftsmanship, Using Only The Finest Materials And Techniques. Explore Our Collection And Discover The Magic Of Clay, Where Imagination Takes Form And Artistry Shines story.</p>
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
