import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-e8ea0-default-rtdb.firebaseio.com/'
});

export default instance;