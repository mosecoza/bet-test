import axios from "axios";
import CONSTANTS from "./constants";

export function getNewsApi(endPoint: RequestInfo, options: RequestInit): any {
    return new Promise(async (resolve, reject) => axios.get(`${CONSTANTS.URL}${endPoint}`).then(response => {

        resolve(response.data)
    }).catch(e => {

        reject(null)
    }))
}
export function postAuthApi(endPoint: RequestInfo,data:any): any {
    const headers = {"Content-Type":"application/json"}
   
    return new Promise(async (resolve, reject) => axios.post(`${CONSTANTS.AUTH_URL}${endPoint}`,data,{headers}).then(response => {

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

export function createMarkup(markUp: string) {
    return { __html: `${markUp}` };
}

export function handleFormValidation(type: string, value: any, required = false) {

    if (!required && value.length === 0) return false;
    switch (type) {
        case "password":
            if (required) {
                if (value.length === 0) {
                    return " is required";
                } else if (!/^([a-zA-Z0-9@*#]{8,30})$/.test(value)) {
                    return " is too short";
                }
            } else if (!/^([a-zA-Z0-9@*#]{8,30})$/.test(value)) {
                return "A minimum 8 characters password contains a combination of <strong>uppercase and lowercase letter</strong> and <strong>number</strong>.";
            }
            else return ""
            break;

        case "email":

            if (required) {
                if ((value.length === 0)) {
                    return " is required";
                } else if (!/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(value)) {
                    return " should have a format of example@mail.com"
                }
            } else if ((value.length !== 0)) {
                if (!/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(value)) {
                    return " should have a format of example@mail.com"
                }
            }
            else return ""
            break;

        default:
            break;
    }

}