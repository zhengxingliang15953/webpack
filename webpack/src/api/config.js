// process.env.NODE_ENV = 'developemnt';
// console.log(process.env.NODE_ENV);
var BASEURl = '';
if (process.env.NODE_ENV == "development") {
    BASEURl = 'http://localhost:8081/';
} else {
    BASEURl = 'http://localhost:8081/'
}


export default BASEURl;