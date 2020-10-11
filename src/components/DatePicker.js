import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/data-picker/datepicker.scss";

// import { getMonth, getYear } from "date-fns";

export default () => {
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = ({ value, onClick }) => (
    <div>
      <label className="date-picker__label" htmlFor="date_picker">
        Дата
      </label>
      <input
        className="date-picker__input"
        id="date_picker"
        onClick={onClick}
        value={value}
      />
    </div>
  );

  // const CustomToday = () => <div>Сегодня {startDate}</div>;

  return (
    <div className="date-picker">
      <DatePicker
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<CustomInput />}
        // renderCustomHeader={<CustomHeader />}
        todayButton="Сегодня "
        // calendarClassName=""
        // className=""
        // calendarClassName=""
      />
    </div>
  );
};
