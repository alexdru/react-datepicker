import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../DatePicker.scss";

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

  // const CustomHeader = ({ date, changeMonth, changeYear }) => {
  //   const months = [
  //     "Январь",
  //     "Февраль",
  //     "Март",
  //     "Апрель",
  //     "Май",
  //     "Июнь",
  //     "Июль",
  //     "Август",
  //     "Сентябрь",
  //     "Октябрь",
  //     "Ноябрь",
  //     "Декабрь",
  //   ];
  //
  //   const years = new Array(20).fill(null).map((_, i) => 2000 + i);
  //
  //   const handleYearChange = ({ target: { value } }) => changeYear(value);
  //   const handleMonthChange = ({ target: { value } }) => changeMonth(value);
  //
  //   return (
  //     <div className="date-picker__header">
  //       <select onChange={handleMonthChange} value={getMonth(date)}>
  //         {months.map(({ value, label }) => (
  //           <option value={value} key={value}>
  //             {label}
  //           </option>
  //         ))}
  //       </select>
  //
  //       <select onChange={handleYearChange} value={getYear(date)}>
  //         {years.map((year) => (
  //           <option value={year} key={year}>
  //             {year}
  //           </option>
  //         ))}
  //       </select>
  //     </div>
  //   );
  // };

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
