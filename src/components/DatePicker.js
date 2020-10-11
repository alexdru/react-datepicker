import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/data-picker/datepicker.scss";

import ru from "date-fns/locale/ru";
import { getMonth, getYear } from "date-fns";

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
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => {
          const months = [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
          ];

          return (
            <div className="date-picker__header">
              <div className="date-picker__header-title">
                {months[getMonth(date)]} {getYear(date)}
              </div>
              <div className="date-picker__header-buttons">
                <button
                  className="date-picker__header-arrow-down"
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                />
                <button
                  className="date-picker__header-arrow-up"
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                />
              </div>
            </div>
          );
        }}
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<CustomInput />}
        locale={ru}
        todayButton="Сегодня"
      />
    </div>
  );
};
