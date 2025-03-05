import React from "react";
import image1 from "../../../public/assets/Services1.jpg";
import image2 from "../../../public/assets/Services2.jpg";
import Slider from "../Slider";
import { Helmet } from "react-helmet";
import { MdOutlineLocalCarWash, MdOutlineEmojiFoodBeverage, MdOutlineLocalLaundryService } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { TbMapPin2 } from "react-icons/tb";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import Content from "../Content/content.json";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>--Home page--</title>
        <meta
          name="description"
          content="Find your perfect retreat with our curated selection of luxurious hotels and rooms. Book now and indulge in unparalleled comfort and hospitality."
        />
      </Helmet>
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <section
          style={{

            backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/assets/bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
            overflow: "hidden",
          }}
          className="relative"
        >
          <div className="flex items-center justify-center mt-[105px] h-full w-full text-center px-2 md:px-4  md:mt-24">
            {Content.middleContent.map((middleContent) => (
              <div key={middleContent.content1} className="font-primaryType text-white w-full tracking-wider md:px-4 px-6">
                <h2 className="text-[12px] md:text-xs font-semibold ">
                  {middleContent.content1}
                </h2>
                <h1 className="text-4xl pt-2 md:tracking-normal md:text-7xl font-normal md:pt-6">
                  {middleContent.content2}
                </h1>
                <h1 className="text-4xl pt-0 md:tracking-normal sm:text-3xl md:text-7xl font-normal md:pt-6">
                  {middleContent.content3}
                </h1>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="text-center mt-28 px-10">
          <div className="font-primaryType">
            <p className="text-[rgb(185,157,117)] font-secondaryType text-lg md:text-xl font-medium">
              Swiss Heritage Meets Modern Luxury
            </p>
            <div className="mt-3 sm:mt-5">
              <h1 className="text-2xl md:text-4xl">
                Stay.Iriafarm in the heart of the mountains is an architectural
              </h1>
              <h1 className="text-2xl md:text-4xl">
                masterpiece offering contemporary accommodations
              </h1>
              <h1 className="text-2xl md:text-4xl">
                with experience.
              </h1>
            </div>
          </div>
          <div className="pt-20 md:mt-12">
            <Slider />
          </div>
        </section>

        {/* Services Section */}
        <section className="mt-28 px-10">
          <div className="font-primaryType items-start flex flex-col md:items-start md:ml-9">
            <p className="text-sm md:text-base text-[rgb(185,157,117)] font-semibold">
              DISCOVER THE SERVICES WE OFFERED
            </p>
            <h1 className="text-3xl md:text-[48px] text-slate-900 mt-4 font-normal font-primaryType">
              THE ESSENTIALS
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:gap-x-16 mt-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-4">
              {[
                { icon: MdOutlineLocalCarWash, title: "Pick-up Service" },
                { icon: FaWifi, title: "Wifi & Internet" },
                { icon: MdOutlineEmojiFoodBeverage, title: "Breakfast in Bed" },
                { icon: LiaHandHoldingHeartSolid, title: "Housekeeper Services" },
                { icon: MdOutlineLocalLaundryService, title: "Beautiful View" },
                { icon: TbMapPin2, title: "Tour and Activity" },
              ].map(({ icon: Icon, title }, index) => (
                <div key={index} className="flex items-start gap-3 p-2">
                  <Icon className="text-7xl md:text-5xl text-[rgb(185,157,117)]" />
                  <div>
                    <h2 className="text-xl md:text-xl font-normal font-primaryType">
                      {title}
                    </h2>
                    <p className="text-base md:text-sm text-slate-700 mt-2 font-primaryType">
                      Lorem ipsum proin gravida velit auctor sde re sit amet space.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Images Section */}
            <div className="md:flex flex-col px-2 md:flex-row items-center md:gap-3 pt-10 md:mr-28">
              <img
                src={image2}
                className="md:h-[390px] md:w-[250px] h-[390px] w-full "
                alt="Service Image 2"
              />
              <img
                src={image1}
                className="md:h-[360px] md:w-[240px] h-[360px] w-full mt-8"
                alt="Service Image 1"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
