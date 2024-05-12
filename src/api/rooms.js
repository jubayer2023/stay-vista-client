import { axiosSecure } from "."

// get all rooms data
export const getAllRooms = async () => {
    const { data } = await axiosSecure.get('/rooms');
    return data;
};

// get single room data
export const getSingleRoom = async (id) => {
    const { data } = await axiosSecure.get(`/rooms/${id}`);
    return data;
};


// add rooms
export const addRoom = async (roomData) => {
    const { data } = await axiosSecure.post('/rooms', roomData);
    return data;
};
