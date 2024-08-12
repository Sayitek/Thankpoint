import axios from 'axios';
import { getAuthentication } from './VariableHelper';



export const NoTokenApi = axios.create({
    baseURL: 'https://thankspoint-rebate-api.onrender.com/v1/',

});


export const TokenApi = axios.create({
    baseURL:'https://thankspoint-rebate-api.onrender.com/v1/',
    headers: {
        Authorized: getAuthentication()?.accessToken,
    }
});
