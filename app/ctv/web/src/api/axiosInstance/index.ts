import axios from 'axios';

const apiUrl = process.env.API_URL || 'http://localhost:3002';

const axiosInstance = axios.create({
    baseURL: apiUrl,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
