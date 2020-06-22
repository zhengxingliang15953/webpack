import Http from './axios.js';
import qs from 'qs';


export let getNode=()=>{
    return Http.get('/getNode');
}

export let getDeleteStudentBySno=()=>{
    return Http.post('/getDeleteStudentBySno',qs.stringify({sno:'abc'}));
}

