import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import DatePicker from "./DatePicker";
import { useState } from "react";
import BookingModal from "../Modal/BookingModal";
import useAuth from "../../hooks/useAuth";

const RoomReservation = ({ room }) => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const totalDays = parseInt(
    formatDistance(new Date(room?.to), new Date(room?.from))
  );

  const totalPrice = totalDays * room?.price;
  // console.log(totalPice)

  const [value, setValue] = useState({
    startDate: new Date(room?.from),
    endDate: new Date(room?.to),
    key: "selection",
  });

  const closeModal = () => {
    setIsOpen(false);
  };

  const [bookingInfo, setBookingInfo] = useState({
    guest: {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    },
    host: room?.host?.email,
    location: room?.location,
    price: totalPrice,
    to: value?.endDate,
    from: value?.startDate,
    title: room?.title,
    roomId: room?._id,
    image: room?.image,
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
      <div onClick={() => setIsOpen(true)} className="p-4">
        <Button
          disabled={room?.host?.email === user?.email || room?.booked}
          label={"Reserve"}
        ></Button>
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between text-lg font-bold">
        <h3>Total</h3>
        <h3>${totalPrice}</h3>
      </div>
      {/* Booking modal */}
      <BookingModal
        closeModal={closeModal}
        isOpen={isOpen}
        bookingInfo={bookingInfo}
      ></BookingModal>
    </div>
  );
};

export default RoomReservation;
