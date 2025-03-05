import React from "react";

const Guest = ({ selectedGuest, setSelectedGuest }) => {
  const guestOptions = [
    "1 Adult",
    "1 Adult, 1 Child",
    "2 Adults",
    "2 Adults, 1 Child",
    "3 Adults, 2 Children",
  ];

  return (
    <div className="dropdown-container">
      <select
        id="guest-select"
        className="dropdown-input"
        value={selectedGuest}
        onChange={(e) => setSelectedGuest(e.target.value)}
      >
        <option disabled>Select Guest</option>
        {guestOptions.map((guest, index) => (
          <option key={index} value={guest}
          style={{
            color: "#000", // Set option text to black
            backgroundColor: "#fff", // Ensure white background
          }}
          >
            {guest}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Guest;
