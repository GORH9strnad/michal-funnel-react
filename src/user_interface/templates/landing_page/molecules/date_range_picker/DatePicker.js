import { memo, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays, isSameDay } from "date-fns";
import { cs } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./DatePicker.css";

function DatePicker() {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const predefinedRanges = [
    {
      label: "1. Turnus",
      range: () => ({
        startDate: new Date(),
        endDate: new Date(),
      }),
      isSelected: (range) =>
        isSameDay(range.startDate, new Date()) &&
        isSameDay(range.endDate, new Date()),
    },
    {
      label: "2. Turnus",
      range: () => ({
        startDate: addDays(new Date(), -7),
        endDate: new Date(),
      }),
      isSelected: (range) =>
        isSameDay(range.startDate, addDays(new Date(), -7)) &&
        isSameDay(range.endDate, new Date()),
    },
    {
      label: "3. Turnus",
      range: () => ({
        startDate: addDays(new Date(), -30),
        endDate: new Date(),
      }),
      isSelected: (range) =>
        isSameDay(range.startDate, addDays(new Date(), -30)) &&
        isSameDay(range.endDate, new Date()),
    },
  ];

  const handleSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;

    const isValidSelection = predefinedRanges.some((range) => {
      const { startDate: predefinedStart, endDate: predefinedEnd } =
        range.range();
      return (
        isSameDay(startDate, predefinedStart) &&
        isSameDay(endDate, predefinedEnd)
      );
    });

    if (isValidSelection) {
      setSelectionRange(ranges.selection);
      console.log("Valid selection:", ranges.selection);
    } else {
      console.log("Invalid selection. No changes made.");
    }
  };

  return (
    <div className="date-picker">
      <h1>Vyberte si turnus</h1>
      <DateRangePicker
        ranges={[selectionRange]}
        staticRanges={predefinedRanges}
        onChange={handleSelect}
        inputRanges={[]}
        locale={cs}
      />
    </div>
  );
}

export default memo(DatePicker);
