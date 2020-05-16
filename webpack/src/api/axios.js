import Axios from 'axios';
import BASEURl from './config.js';


const instance=Axios.create({
    baseURL:BASEURl,
    timeout:15000
})

instance.interceptors.request.use(
    config=>{
        // config.headers.Authorization='Bearer';
        return config;
    },
    err=>{
        return err;
    }
)

instance.interceptors.response.use(
    (res,config)=>{
        return res;
    },
    err=>{
        const {status}=err.responce;
        return Promise.reject(err);
    }
)

export default instance;