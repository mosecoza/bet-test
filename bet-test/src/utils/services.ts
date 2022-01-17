import { IAuth, ILoginResponse, IUser } from "./interfaces";
import CONSTANTS from './constants';
import { getNewsApi, postAuthApi } from './functions';
import { AxiosRequestConfig } from "axios";
const jwt = require('jsonwebtoken');

export const createUser = ({email, password}:IAuth)=>{
    const token = jwt.sign({
        email,
        password
    }, CONSTANTS.SALT, {
        expiresIn: 60 * 60 * 24 * 7 // Expires in a week
    })
    console.log(token);
    return token
}

export const  signIn = ({email, password}:IAuth)=>{
    
    
    let response: ILoginResponse | null= postAuthApi('auth/login',JSON.stringify({username:email, password}))

    console.log(response);
    

    return response
}