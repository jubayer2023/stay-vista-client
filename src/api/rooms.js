import { axiosSecure } from "."

// get all rooms data
export const getAllRooms = async () => {
    const { data } = await axiosSecure.get('/rooms');
    return data;
};
// get specific rooms for host
export const getHostRooms = async (email) => {
    const { data } = await axiosSecure.get(`/rooms/${email}`)
    return data;
};

// get single room data
export const getSingleRoom = async (id) => {
    const { data } = await axiosSecure.get(`/room/${id}`);
    return data;
};


// add rooms
export const addRoom = async (roomData) => {
    const { data } = await axiosSecure.post('/rooms', roomData);
    return data;
};
