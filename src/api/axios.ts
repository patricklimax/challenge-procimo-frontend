import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://api.citybik.es/v2'
});
