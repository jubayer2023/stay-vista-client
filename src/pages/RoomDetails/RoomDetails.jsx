import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReservation from "../../components/RoomDetails/RoomReservation";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredRoom = data.find((room) => room._id === id);
        setRoom(filteredRoom);
        setLoading(false);
      });
  }, []);
  //   console.log(room);
  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <Helmet>
        <title>StayVista | {room?.title}</title>
      </Helmet>
      {room && (
        <div className=" max-w-screen-lg mx-auto">
          <div className="flex flex-col gap-6 ">
            {/* header */}
            <Header room={room}></Header>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-7 mt-16">
            {/* Room Info */}
            <RoomInfo room={room}></RoomInfo>

            {/* calender and other things here */}
            <div className="md:col-span-3 order-first md:order-last">
              <RoomReservation room={room} />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default RoomDetails;
