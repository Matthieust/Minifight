import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/users';

const getMyFighter = () => {
    return axios.get(`${API_URL}/my-fighter`, { headers: authHeader() });
};

export default {
    getMyFighter
};
