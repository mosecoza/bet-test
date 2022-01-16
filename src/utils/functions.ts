import axios from "axios";
import CONSTANTS from "./constants";

export function getApi(endPoint: RequestInfo, options: RequestInit): any {
    return new Promise(async (resolve, reject) => axios.get(`${CONSTANTS.URL}?${endPoint}`).then(response => {

        resolve(response.data)
    }).catch(e => {

        reject(null)
    }))
}
export function postApi(endPoint: RequestInfo, options: RequestInit): any {
    return new Promise(async (resolve, reject) => axios.post(`${CONSTANTS.URL}?${endPoint}`).then(response => {

        resolve(response.data)
    }).catch(e => {

        reject(null)
    }))
}

export function createMarkup(markUp:string) {
    return { __html: `${markUp}` };
}