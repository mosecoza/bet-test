import { IAuth } from "./interfaces";
import CONSTANTS from './constants';
const jwt = require('jsonwebtoken');

export const createUser = ({email, password}:IAuth)=>{
    const token = jwt.sign({
        email,
        password
    }, CONSTANTS.SALT, {
        expiresIn: 60 * 60 * 24 * 7 // Expires in a week
    })
    console.log(token);


    window.localStorage.setItem("user", token);
    return token
}

export const  signIn = ({email, password}:IAuth)=>{
    const token = jwt.sign({
        email,
        password
    }, 'sdjfew0ew9kdewoijdewijkoiew98e0kewkmewouew', {
        expiresIn: 60 * 60 * 24 * 7 // Expires in a week
    })
    console.log(token);


    window.localStorage.setItem("user", token);
    return token
}