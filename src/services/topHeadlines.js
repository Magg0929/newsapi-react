import axios from 'axios';
import { BasePath,ApiKey } from './helper';

export const getTopHeadlines = (search) => {

    return new Promise((resolve, reject) => {
        axios.get(`${BasePath}/top-headlines?q=${search}${ApiKey}`,).then(resp => {
            resolve(resp.data)
        })
    })
}
export const getTopHeadlinesFilter = (search,country,category) => {
    const innerCountry = country? `&country=${country}`: ""
    const innerCategory = category? `&category=${category}`: ""
    return new Promise((resolve, reject) => {
        axios.get(`${BasePath}/top-headlines?q=${search}${innerCountry}${innerCategory}${ApiKey}`,).then(resp => {
            resolve(resp.data)
        })
    })
}
