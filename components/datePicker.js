import { useState } from 'react';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const SelectDate = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const handleDate = (date) => {
    if (props.start) {
      const selectedDate = startDate;
    }
    const selectedDate = endDate;
  }

  return (
    <DatePicker
    showYearDropdown
    selected={selectedDate}
    onChange={handleDate(selectedDate)} />
  );
};

export default SelectDate;