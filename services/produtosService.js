import axios from 'axios';
import * as config from '../config/apiConfig';

export const getProdutos = () => {
    return axios.get(config.BASE_URI + '/api/produtos')
        .then(
            response => {
                return response.data;
            }
        )
}