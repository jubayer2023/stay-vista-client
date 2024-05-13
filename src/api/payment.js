import { axiosSecure } from "."
// create payment intent and get clientsecret
export const createPaymentIntent = async (price) => {
    const { data } = await axiosSecure.post('/create-payment-intent', price);
    return data;
};

// save booking info
export const saveBookingsInfo = async (paymentInfo) => {
    const { data } = await axiosSecure.post('/bookings', paymentInfo);
    return data;
};

// update status
export const updateStatus = async (id, status) => {
    const { data } = await axiosSecure.patch(`/rooms/status/${id}`, status);
    return data;
};

// get all bookings data for guest
export const getGuestBookings = async (email) => {
    const { data } = await axiosSecure.get(`/bookings?email=${email}`);
    return data;
};

// get all bookings data for host
export const getHostBookings = async (email) => {
    const { data } = await axiosSecure.get(`/bookings/host?email=${email}`);
    return data;
};



