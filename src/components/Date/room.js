import React from "react";
import "../Date/date.css"; // Include the custom CSS file

const Room = ({ selectedRoom, setSelectedRoom }) => {
  const roomOptions = ["1 Room", "2 Rooms", "3 Rooms", "4 Rooms", "5 Rooms"];

  return (
    <div className="dropdown-container">
      <select
        id="room-select"
        className="dropdown-input"
        value={selectedRoom}
        onChange={(e) => setSelectedRoom(e.target.value)}
      >
        <option disabled>Select Room</option>
        {roomOptions.map((room, index) => (
          <option key={index} value={room} 
          style={{
            color: "#000", // Set option text to black
            backgroundColor: "#fff", // Ensure white background
          }}
          >
            {room}
            
          </option>
        ))}
      </select>
    </div>
  );
};

export default Room;
