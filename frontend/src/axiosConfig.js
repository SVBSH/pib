import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:4000',
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (config.url !== '/login' && token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        console.error('Error intercepting request:', error);
        return Promise.reject(error);
    }
);

export const isLoggedIn = () => {
    return !!localStorage.getItem('token');  
  };

export default api;
