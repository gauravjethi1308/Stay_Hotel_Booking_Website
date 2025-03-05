import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Date/date.css"; // Include the custom CSS file

const DateInput = ({ onDateChange, initialDate }) => {
  const [selectedDate, setSelectedDate] = useState(initialDate || new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date); // Pass the updated date to the parent
  };

  return (
    <div className="datepicker-container">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        className="datepicker-input"
        calendarClassName="custom-calendar"
        popperPlacement="bottom"
      />
    </div>
  );
};

export default DateInput;
