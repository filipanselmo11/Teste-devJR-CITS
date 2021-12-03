import axios from "axios";
import md5 from "md5";

const publicKey = '67f6888cb834790c22d700c7e9d92a30';
const privateKey = 'e72007d215fe0c9715ba9bbd51acfd02e2465827';

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);



const api = axios.create({
    baseURL : 'https://gateway.marvel.com:443/v1/public',
    method: 'GET',
    params: {
    apikey: publicKey,
    ts,
    hash
  },
  headers: {
     Accept: '*/*'
  }})

export default api;
