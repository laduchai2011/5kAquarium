import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL || 'http://192.168.5.100:3006';

const axiosInstance = axios.create({
    baseURL: apiUrl,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

export default axiosInstance;
