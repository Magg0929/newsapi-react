import axios from 'axios';
import { BasePath,ApiKey } from './helper';

export const getAllNotices = (search) => {

    return new Promise((resolve, reject) => {
        axios.get(`${BasePath}/everything?q=${search}${ApiKey}`,).then(resp => {
            resolve(resp.data)
        })
    })
}





