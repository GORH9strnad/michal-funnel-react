import { Fragment, memo, useState } from "react";
import "./DateRangePicker.css";
import { useAdaptiveResponsiveContext } from "../../../../../business_logic/wrappers/AdaptiveResponsive";
import formatDate from "../../../../../business_logic/util/formatDate";

function DateRangePicker() {
  const { device } = useAdaptiveResponsiveContext();

  const [selectedDate, setSelectedDate] = useState(null);

  const dates = [
    {
      label: "1. Turnus",
      start: "2022-01-01",
      end: "2022-01-05",
      location: "Hlinsko",
      hill: "Hlína",
      img: "https://via.placeholder.com/150",
      selected: () =>
        dates[0].start === selectedDate?.start &&
        dates[0].end === selectedDate?.end,
    },
    {
      label: "2. Turnus",
      start: "2022-01-06",
      end: "2022-01-10",
      location: "Hlinsko",
      hill: "Hlína",
      img: "https://via.placeholder.com/150",
      selected: () =>
        dates[1].start === selectedDate?.start &&
        dates[1].end === selectedDate?.end,
    },
    {
      label: "3. Turnus",
      start: "2022-01-11",
      end: "2022-01-15",
      location: "Hlinsko",
      hill: "Hlína",
      img: "https://via.placeholder.com/150",
      selected: () =>
        dates[2].start === selectedDate?.start &&
        dates[2].end === selectedDate?.end,
    },
    {
      label: "4. Turnus",
      start: "2022-01-16",
      end: "2022-01-20",
      location: "Hlinsko",
      hill: "Hlína",
      img: "https://via.placeholder.com/150",
      selected: () =>
        dates[3].start === selectedDate?.start &&
        dates[3].end === selectedDate?.end,
    },
  ];

  return (
    <div className="date-range-picker">
      <h1>Vyberte si turnus</h1>
      <div className="date-range-picker-container">
        <div className="range-picker">
          {dates.map((date, index) => (
            <div
              className={`range ${date.selected() ? "selected" : ""}`}
              key={index}
              onClick={() => setSelectedDate(date)}
            >
              {date.label}
            </div>
          ))}
        </div>
        <div className="selected-range">
          {selectedDate && (
            <div className="course-info">
              <h1>{selectedDate.label}</h1>
              <div>
                <span>od: </span>
                {formatDate(selectedDate.start)}
              </div>
              <div>
                <span>do: </span>
                {formatDate(selectedDate.end)}
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
    </div>
  );
}

export default memo(DateRangePicker);
