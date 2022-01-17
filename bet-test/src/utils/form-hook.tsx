import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/auth/user-actions';
import { handleFormValidation } from './functions';
import { IAuth } from './interfaces';

function FormHook(values={}, type="login") {
    const [state, setState] = useState(values);
    const [inputErrors, setInputErrors] = useState({});
    const dispatch = useDispatch()


    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setState({...state, [event.currentTarget.id]: event.currentTarget.value})
        setInputErrors({...inputErrors, [event.currentTarget.id]:handleFormValidation(event.currentTarget.type, event.currentTarget.value, event.currentTarget.required)})
    }

    function submitForm(event:React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log(event.currentTarget.checkValidity());
        if(event.currentTarget.checkValidity()){
            submit()
        }
    }

    function submit(){
        console.log(state);
        switch (type) {
            case "login":
                dispatch(login(state as IAuth))
                break;
        
            default:
                break;
        }
    }

    return {
        state,
        inputErrors,
        handleInputChange,
        submitForm,
    }
}

export default FormHook;
