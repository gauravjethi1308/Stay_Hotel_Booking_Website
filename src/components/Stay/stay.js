import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import Content from "../Content/content.json";
import DateInput from "../Date/index";
import SendToWhatsApp from "../Date/whatsapp";
import Room from "../Date/room";
import Guest from "../Date/guest";
import a from "../../../public/assets/room1.jpg";
import b from "../../../public/assets/room2.jpg";
import c from "../../../public/assets/room3.jpg";
import { Helmet } from "react-helmet";

const Stay = () => {
  const defaultCheckInDate = new Date();
  const defaultCheckOutDate = new Date(new Date().setDate(new Date().getDate() + 1));
  const defaultRoomSelection = "1 Room";
  const defaultGuestSelection = "1 Adult";

  const [checkInDate, setCheckInDate] = useState(defaultCheckInDate);
  const [checkOutDate, setCheckOutDate] = useState(defaultCheckOutDate);
  const [roomSelection, setRoomSelection] = useState(defaultRoomSelection);
  const [guestSelection, setGuestSelection] = useState(defaultGuestSelection);

  return (
    <div className="overflow-x-hidden">
      {/* Page Metadata */}
      <Helmet>
        <title>Stay Page</title>
        <meta
          name="description"
          content="Escape to a world of relaxation and luxury with our exquisite rooms and suites. Enjoy top-notch amenities, impeccable service, and unforgettable stays."
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative"
        style={{
          backgroundImage: "url(/assets/stay.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "110vh",
          width: "100vw",
        }}
      >
        <div className="h-full w-full text-center">
          {/* Hero Content */}
          <div className="font-primaryType text-primaryFont flex flex-col items-center pt-48 md:pt-64 px-4">
            <h1 className="text-5xl md:text-6xl">Book Now</h1>
            <p className="text-xl font-normal font-secondaryType md:text-2xl mt-3">
              Escape to a world of relaxation and luxury.
            </p>
          </div>

          {/* Availability Check Section (Visible only on medium screens and above) */}
          <div className="hidden absolute top-[63%] w-full px-4 md:flex md:justify-center md:gap-10 md:text-primaryFont font-primaryType">
            <div className="flex flex-col items-center">
              <h2 className="mb-2 text-lg">Check In</h2>
              <DateInput onDateChange={setCheckInDate} />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="mb-2 text-lg">Check Out</h2>
              <DateInput onDateChange={setCheckOutDate} />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="mb-2 text-lg">Room</h2>
              <Room selectedRoom={roomSelection} setSelectedRoom={setRoomSelection} />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="mb-2 text-lg">Guest</h2>
              <Guest selectedGuest={guestSelection} setSelectedGuest={setGuestSelection} />
            </div>
          </div>

          {/* Book Now Button (Visible only on medium screens and above) */}
          <div className="hidden md:flex absolute bottom-28 w-full justify-center">
            <SendToWhatsApp
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
              roomSelection={roomSelection}
              guestSelection={guestSelection}
            />
          </div>
        </div>
      </section>

      {/* Check Availability Section and Book Now Button (Visible only on small screens) */}
      <div className="md:hidden bg-white py-14 px-4">
        {/* Check Availability Section */}
        <div className="flex flex-col items-center gap-4 font-primaryType">
          <div className="flex flex-col items-center">
            <h2 className="mb-2 text-lg">Check In</h2>
            <DateInput onDateChange={setCheckInDate} />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="mb-2 text-lg">Check Out</h2>
            <DateInput onDateChange={setCheckOutDate} />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="mb-2 text-lg">Room</h2>
            <Room selectedRoom={roomSelection} setSelectedRoom={setRoomSelection} />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="mb-2 text-lg">Guest</h2>
            <Guest selectedGuest={guestSelection} setSelectedGuest={setGuestSelection} />
          </div>
        </div>

        {/* Book Now Button */}
        <div className="flex justify-center mt-10">
          <SendToWhatsApp
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            roomSelection={roomSelection}
            guestSelection={guestSelection}
          />
        </div>
      </div>

      {/* Content Section */}
      <section className="min-h-[50vh] px-4 py-6">
        {Content.Staysection2.map((section, index) => (
          <div key={index} className="text-center">
            <p className="text-[#B99D75] font-medium font-secondaryType text-lg md:text-xl">
              {section.main}
            </p>

            <div className="md:flex flex-col items-center font-primaryType tracking-widest text-[#1A1B1A] mt-6">
              <h1 className="text-2xl md:text-3xl">{section.heading1}</h1>
              <h1 className="text-2xl md:text-3xl">{section.heading2}</h1>
            </div>

            <div className="text-[#333632] mt-6 tracking-wider font-secondaryType">
              <p className="text-xl md:text-2xl">{section.para1}</p>
              <p className="text-xl md:text-2xl">{section.para2}</p>
              <p className="text-xl md:text-2xl">{section.para3}</p>
              <div className="text-xl gap-2 md:text-lg text-[#B99D75] mt-6 flex flex-row items-center justify-center">
                <FaRegClock />
                <h1>{section.checkin}</h1>
                <h1>|</h1>
                <FaRegClock />
                <h1>{section.checkout}</h1>
              </div>
            </div>
          </div>
        ))}

        {/* Room Listings */}
        <div className="flex flex-col font-primaryType md:grid md:grid-cols-2 md:place-items-center gap-10 mt-16 px-4">
          {[a, b, c].map((image, index) => (
            <div key={index} className="flex flex-col gap-2 items-start">
              <img
                src={image}
                className="h-[300px] w-full md:w-[500px] object-cover"
                alt={`Room ${index + 1}`}
              />
              {Content.Staysection3.map((roomDetails, subIndex) => (
                <div key={subIndex} className="ml-3 text-sm mt-4">
                  <p>{roomDetails.para1}</p>
                  <p>{roomDetails.para2}</p>
                  <p>{roomDetails.para3}</p>
                </div>
              ))}
              <p className="ml-3 text-base md:text-lg underline decoration-[#B99D75] underline-offset-8">
                Discover More
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stay;