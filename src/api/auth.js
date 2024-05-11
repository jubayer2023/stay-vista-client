import { axiosSecure } from "."



export const saveUser = async (user) => {

    const currentUser = {
        email: user?.email,
        role: 'guest',
        status: 'Verified',
    }

    const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);
    return data;
    // console.log("somthing")
};


export const setCookie = async (user) => {
    const userEmail = {
        email: user?.email
    };

    const { data } = await axiosSecure.post('/jwt', userEmail);
    return data;
};


export const clearCookie = async () => {
    const { data } = await axiosSecure.get('/logout');
    return data;
};