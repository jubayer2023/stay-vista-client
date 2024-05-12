import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Loader from "../Shared/Loader";
import Heading from "../Shared/Heading";
import { getAllRooms } from "../../api/rooms";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllRooms().then((data) => {
      if (category) {
        const filtered = data.filter((room) => room.category === category);
        setRooms(filtered);
      } else {
        setRooms(data);
      }
      setLoading(false);
    });
  }, [category]);

  if (loading) {
    return (
      <div>
        <Loader></Loader>
      </div>
    );
  }

  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {rooms.map((room) => (
            <Card key={room._id} room={room}></Card>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[calc(100vh-280px)] ">
          <Heading
            title={"No rooms avialable in this category !"}
            subtitle={"Please select other categories ."}
            center={true}
          ></Heading>
        </div>
      )}
    </Container>
  );
};

export default Rooms;
