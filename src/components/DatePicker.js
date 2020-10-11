import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/data-picker/datepicker.scss";

import ru from "date-fns/locale/ru";
import { getMonth, getYear } from "date-fns";

export default (props) => {
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = ({ value, onClick }) => (
    <div>
      <label className="date-picker__label" htmlFor="date_picker">
        Дата
      </label>
      <input
        className={
          "date-picker__input " +
          (props.disabled ? "_disabled" : "") +
          (props.invalid ? "_invalid" : "")
        }
        id="date_picker"
        onClick={onClick}
        value={value}
      />
      <div className="date-picker__input-icon" />
    </div>
  );

  const CustomToday = ({ value }) => (
    <div className="date-picker__today-button">Сегодня {value}</div>
  );

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
          // const months = new Array(12).fill(null).map((_, i) => ({
          //   value: i,
          //   label: format(setMonth(new Date(), i), "MMMM", {
          //     locale: ru,
          //   }),
          // }));
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
                  className="date-picker__header-arrow _down"
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                />
                <button
                  className="date-picker__header-arrow _up"
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
      >
        <CustomToday />
      </DatePicker>
    </div>
  );
};
