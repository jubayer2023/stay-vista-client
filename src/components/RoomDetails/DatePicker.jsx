import { DateRange } from "react-date-range";

const DatePicker = ({ value, handleSelect }) => {
  return (
    <DateRange
      rangeColors={["#F43F5E"]}
      direction="vertical"
      ranges={[value]}
      showDateDisplay={false}
    />
  );
};

export default DatePicker;
