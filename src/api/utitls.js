import axios from "axios";
import { axiosSecure } from ".";

const img_post_api_key = import.meta.env.VITE_IMGBB_API_KEY;
const img_post_api = `https://api.imgbb.com/1/upload?key=${img_post_api_key}`;

export const imageUploadApi = async (image) => {
    const formData = new FormData();
    formData.append('image', image);

    const { data } = await axios.post(img_post_api, formData);
    return data;
}

// getAdminStat
export const getAdminStat = async () => {
    const { data } = await axiosSecure.get('/admin-stat');
    return data;
};