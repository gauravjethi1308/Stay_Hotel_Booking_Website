import React from "react";

const SendToWhatsApp = ({ checkInDate, checkOutDate, roomSelection, guestSelection }) => {
  const handleSendMessage = () => {
    // Format data
    const formattedCheckIn = checkInDate
      ? checkInDate.toLocaleDateString("en-GB")
      : "Not Selected";
    const formattedCheckOut = checkOutDate
      ? checkOutDate.toLocaleDateString("en-GB")
      : "Not Selected";
    const formattedRoom = roomSelection || "Not Selected";
    const formattedGuest = guestSelection || "Not Selected";

  // Create WhatsApp message
const message = `Hello, I want to book a stay:

Check-in Date: ${formattedCheckIn} ,
Check-out Date: ${formattedCheckOut},
Room: ${formattedRoom},
Guest: ${formattedGuest}
`;

    // WhatsApp URL with your number
    const whatsappURL = `https://wa.me/917536048295?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <button
      onClick={handleSendMessage}
      className="w-[180px] h-[50px]  md:w-[140px] md:h-[45px] border border-black text-black md:border-white md:text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300"
    >
      Book Now
    </button>
  );
};

export default SendToWhatsApp;
