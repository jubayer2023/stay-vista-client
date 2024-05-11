import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import DatePicker from "./DatePicker";
import { useState } from "react";

const RoomReservation = ({ room }) => {
  const totalDays = parseInt(
    formatDistance(new Date(room?.to), new Date(room?.from)).split(" ")[0]
  );

  const totalPrice = totalDays * room?.price;
  // console.log(totalPrice)

  const [value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: "selection",
  });

  return (
    <div className="rounded-xl border-[1px] border-neutral-200   overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <h3 className="text-xl font-bold ">$ {room?.price}</h3>
        <h4 className="text-neutral-700 font-light ">night</h4>
      </div>
      <hr />
      <div className="flex justify-center">
        <DatePicker value={value}></DatePicker>
      </div>
      <hr />
      <div className="p-4">
        <Button label={"Reserve"}></Button>
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between text-lg font-bold">
        <h3>Total</h3>
        <h3>${totalPrice}</h3>
      </div>
    </div>
  );
};

export default RoomReservation;
