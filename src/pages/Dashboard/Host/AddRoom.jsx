import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { imageUploadApi } from "../../../api/utitls";
import { addRoom } from "../../../api/rooms";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
  const { user } = useAuth();
  const [uploadButtonText, setUploadButtonText] = useState(
    "Upload Image Here !"
  );
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const form = event.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const to = dates.endDate;
    const from = dates.startDate;
    const price = form.price.value;
    const guests = form.total_guest.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const bedrooms = form.bedrooms.value;
    const image = form.image.files[0];
    // post to imgbb
    const image_url = await imageUploadApi(image);

    // host info
    const host = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    };

    // room data
    const roomData = {
      location,
      category,
      title,
      to,
      from,
      price,
      guests,
      bathrooms,
      description,
      bedrooms,
      image: image_url?.data?.display_url,
      host,
    };

    try {
      const data = await addRoom(roomData);
      console.log(data);
      setUploadButtonText("Uploaded");
      toast.success("Successfully added ");
      navigate("/dashboard/my-listings");
    } catch (error) {
      console.log(error);
      toast.success(error.message);
    } finally {
      setLoading(false);
    }

    console.table(roomData);
  };

  //set Date ranges
  const handleDates = (ranges) => {
    setDates(ranges.selection);
    console.log(ranges);
  };

  //   handle image text
  const handleImageChange = (name) => {
    setUploadButtonText(name);
    // console.log(name);
  };

  return (
    <div>
      <Helmet>
        <title>Dashboard | addRoom</title>
      </Helmet>
      {/* form */}
      <AddRoomForm
        handleSubmit={handleSubmit}
        handleDates={handleDates}
        dates={dates}
        handleImageChange={handleImageChange}
        loading={loading}
        uploadButtonText={uploadButtonText}
      ></AddRoomForm>
    </div>
  );
};

export default AddRoom;
