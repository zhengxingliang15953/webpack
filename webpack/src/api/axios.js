import Axios from 'axios';
import BASEURl from './config.js';


const instance = Axios.create({
    baseURL: BASEURl,
    timeout: 15000
})

let pending = [];
let cancelToken = Axios.CancelToken;
let remove = (val) => {
    for (let i in pending) {
        if (val.url === pending[i]) {
            pending[i].methods();
            pending.splice(i, 1);
        }
    }
}

instance.interceptors.request.use(
    config => {
        // config.headers.Authorization='Bearer';
        // config.headers.Origin="http://localhost:8000"
        console.log(config);
        remove(config);
        config.cancelToken = new cancelToken((c) => {
            pending.push({ url: config.url, methods: c })
        })
        return config;
    },
    err => {
        return err;
    }
)

instance.interceptors.response.use(
    (res, config) => {
        remove(res.config);
        return res;
    },
    err => {
        // const {status}=err.responce;
        return Promise.reject(err);
    }
)

export default instance;