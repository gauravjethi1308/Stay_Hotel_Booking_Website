import React from "react";
import { Helmet } from "react-helmet";
import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import googleMap from "../../../public/assets/googlemap.png";

const About = () => {
  const { pathname } = useLocation();
  const containerClass = ` ${
    pathname == "/about" ? "text-black" : "text-primaryFont"
  }`;

  return (
    <>
      <Helmet>
        <title>--About page--</title>
        <meta
          name="description"
          content="Discover the art of hospitality with our hotel group. Learn about our history, mission, and values that drive us to deliver exceptional guest experiences."
        />
      </Helmet>

      {/* Hero Section */}
<section
  style={{
    backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/about.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "110vh",
    width: "100vw",
  }}
  className="relative"
>
  <div className="h-full w-full text-center pt-14 overflow-x-hidden">
    <div
      className={`flex-wrap font-primaryType ${containerClass} md:flex flex-col place-items-center mt-14 px-4`}
    >
      <div>
        <h1 className="text-3xl mt-44 md:text-6xl font-6xl text-white">
          About The Hotel
        </h1>
      </div>
      <div>
        <p className="text-lg md:text-xl pt-4 font-secondaryType text-white">
          Welcome to Stay.Iriafarm, a boutique resort in the heart of Swiss Alps
        </p>
      </div>
    </div>
  </div>
</section>
      {/* Content Section */}
      <section className="min-h-[100vh] py-16 px-4">
        <div className="text-center">
          <p className="text-[#B99D75] font-medium font-thirdType text-sm md:text-lg">
            Swiss Heritage Meets Modern Luxury
          </p>

          <div className="md:flex flex-col items-center font-primaryType tracking-wide text-[#1A1B1A] mt-3">
            <h1 className="text-lg md:text-3xl">
              Stay.Iriafarm in the heart of the mountains is an architectural
            </h1>
            <h1 className="text-lg md:text-3xl">
              masterpiece offering contemporary accommodations
            </h1>
            <h1 className="text-lg md:text-3xl">
              with unrivalled ski and hiking trails.
            </h1>
          </div>

          <div className="text-[#333632] mt-3 tracking-wider font-thirdType">
            <div className="md:flex flex-col items-center">
              <p className="text-sm md:text-lg">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor
              </p>
              <p className="text-sm md:text-lg">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-16 px-4">
          <div className="text-lg font-bold text-[#B99D75] text-center mb-4">
            Book an appointment to visit our place at -
          </div>
          <div className="mt-8">
            <Link to="https://maps.app.goo.gl/PuUPyhF9MczURRkJ9?g_st=aw">
              <img src={googleMap} alt="Google Map" className="w-full h-auto" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;