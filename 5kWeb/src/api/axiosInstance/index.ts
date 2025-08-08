import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL || 'http://192.168.5.100:3009';

const axiosInstance = axios.create({
    baseURL: apiUrl,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
