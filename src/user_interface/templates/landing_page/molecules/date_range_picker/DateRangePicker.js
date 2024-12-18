import { Fragment, memo, useEffect, useState } from "react";
import "./DateRangePicker.css";
import "./DateRangePickerMobile.css";
import { useAdaptiveResponsiveContext } from "../../../../../business_logic/wrappers/AdaptiveResponsive";
import formatDate from "../../../../../business_logic/util/formatDate";
import useCourses from "../../../../../business_logic/hooks/useCourses";
import { CircularProgress } from "@mui/material";

function DateRangePicker() {
  const { device } = useAdaptiveResponsiveContext();

  const [dates, selectedDate, isLoading, setSelectedDate] = useCourses();

  const desktopLayout = (
    <div className="date-range-picker">
      <h1>Vyberte si turnus</h1>
      {isLoading ? (
        <CircularProgress color="black" size="5vw" />
      ) : (
        <Fragment>
          <div className="date-range-picker-container">
            <div className="range-picker">
              {dates.map((date, index) => (
                <div
                  className={`range ${
                    selectedDate?.id === date.id ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => setSelectedDate(date)}
                >
                  <h5>{date.name}</h5>
                </div>
              ))}
            </div>
            <div className="selected-range">
              {selectedDate && (
                <div className="course-info">
                  <h1>{selectedDate.name}</h1>
                  <div>
                    <span>od: </span>
                    {formatDate(selectedDate.starts_at)}
                  </div>
                  <div>
                    <span>do: </span>
                    {formatDate(selectedDate.ends_at)}
                  </div>
                  <div>
                    <span>místo:</span>
                    {selectedDate.location}
                  </div>
                  <div>
                    <span>sjezdovka:</span>
                    {selectedDate.hill}
                  </div>
                  <img src={selectedDate.img} alt="sjezdovka" />
                </div>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );

  const mobileLayout = (
    <div className="mobile-date-range-picker">
      <h1>Vyberte si turnus</h1>
      {isLoading ? (
        <CircularProgress color="black" size="5vw" />
      ) : (
        <Fragment>
          <div className="mobile-date-range-picker-container">
            <div className="mobile-range-picker">
              {dates.map((date, index) => (
                <div
                  className={`mobile-range ${
                    selectedDate?.id === date.id ? "mobile-selected" : ""
                  }`}
                  key={index}
                  onClick={() => setSelectedDate(date)}
                >
                  <h5>{date.name}</h5>
                </div>
              ))}
            </div>
            <div className="mobile-selected-range">
              {selectedDate && (
                <div className="mobile-course-info">
                  <h1>{selectedDate.name}</h1>
                  <div>
                    <span>od: </span>
                    {formatDate(selectedDate.starts_at)}
                  </div>
                  <div>
                    <span>do: </span>
                    {formatDate(selectedDate.ends_at)}
                  </div>
                  <div>
                    <span>místo:</span>
                    {selectedDate.location}
                  </div>
                  <div>
                    <span>sjezdovka:</span>
                    {selectedDate.hill}
                  </div>
                  <img src={selectedDate.img} alt="sjezdovka" />
                </div>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );

  return device === "mobile" ? mobileLayout : desktopLayout;
}

export default memo(DateRangePicker);
