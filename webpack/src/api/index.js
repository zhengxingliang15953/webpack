import Http from './axios.js';
import qs from 'qs';

export let getAllBook=(isbn,start)=>{
    return Http.get(`api/getAllBook?isbn=${isbn}&start=${start}`);
}