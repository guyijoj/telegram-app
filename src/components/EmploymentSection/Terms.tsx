import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IconComponents } from "../Icon/IconComponents";

interface TermsProps {
  text: string;
  date: Date | null;
  onChange: (date: Date) => void;
}

export const Terms = ({ text, date, onChange }: TermsProps) => {
  const handleInput = (newDate: Date | null) => {
    if (newDate) onChange(newDate);
  };

  return (
    <div className="">
      <div className="relative inline-block  ">
        <p className="text-2xl text-mainText inline mr-2.5 ">{text}</p>
        <DatePicker
          selected={date}
          onChange={handleInput}
          dateFormat="dd / MM / yyyy"
          minDate={new Date()}
          className="text-2xl  p-2 pb-1.5 text-subText border-b-1 border-mainColor focus:outline-none focus:border-lightMainColor"
        ></DatePicker>

        <div className="absolute right-1 top-2.5 pointer-events-none">
          <IconComponents name="calendar" size={30} color="#8774e1" />
        </div>
      </div>
    </div>
  );
};
