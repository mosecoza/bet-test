import React from 'react'
import { connect } from 'react-redux'
import "./index.css";
import bg from "../../assets/zebra-bushveld-unsplash.jpg";
import { useNavigate } from 'react-router-dom';
import FormHook from '../../utils/form-hook';
import { handleFormValidation } from '../../utils/functions';
import { login } from '../../redux/slices/auth/user-actions';
import { IAuth } from '../../utils/interfaces';

const AuthPage = (props: any) => {
  const formHook = FormHook({ email: "", password: "" }, 'login')
  return (
    <div className="w-screen h-screen bg-gradient-to-tr from-yellow-50 via-yellow-100 to-yellow-50">
      <div className='flex justify-between shadow-md rw-100 h-100'>

        <div className='justify-center w-50 d-flex align-items-centers bg-light my-container '>
          <img src={bg} alt="Avatar" className="image " />
          <div className="flex flex-col justify-between py-3 overlay ">

            <h5 className='text-yellow-500 font-weight-bolder'>
              My Name is John
            </h5>


            <p className='text-yellow-200'>
              and save to reload.
            </p>
            <small className='text-yellow-200 fw-bold'>
              Look better than this
            </small>
          </div>

        </div>
        <div className='flex-col bg-white w-50 d-flex justify-content-around align-items-center'>
          <h4 className='font-extrabold h4'>Login</h4>
          <form onSubmit={formHook.submitForm} className="px-4 pt-6 pb-8 mb-4 ">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                onInvalid={e =>
                  handleFormValidation(
                    e.currentTarget.type,
                    e.currentTarget.value,
                    e.currentTarget.required
                  )
                    ? e.currentTarget.setCustomValidity(
                      'Email ' +
                      handleFormValidation(
                        e.currentTarget.type,
                        e.currentTarget.value,
                        e.currentTarget.required
                      )
                    )
                    : e.currentTarget.setCustomValidity('')
                } 
                onChange={formHook.handleInputChange}
                pattern='^([a-zA-Z0-9_\\-\\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)'
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email" 
                placeholder="Email Adress"
                required={true}
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                onInvalid={e =>
                  handleFormValidation(
                    e.currentTarget.type,
                    e.currentTarget.value,
                    e.currentTarget.required
                  )
                    ? e.currentTarget.setCustomValidity(
                      'Password ' +
                      handleFormValidation(
                        e.currentTarget.type,
                        e.currentTarget.value,
                        e.currentTarget.required
                      )
                    )
                    : e.currentTarget.setCustomValidity('')
                }
                pattern='^([a-zA-Z0-9@*#]{8,30})$'
                onChange={formHook.handleInputChange}
                className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password" 
                type="password"
                placeholder="*************"
                required={true}
              />
              <p className="text-xs italic text-red-500">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
              <button
                // onClick={()=>navigate("/home")}

                className="px-2 py-2 font-bold text-white bg-yellow-600 rounded hover:bg-yellow-700 focus:outline-none focus:shadow-outline" type="submit">
                Sign In
              </button>
              <a className="inline-block text-sm font-bold text-yellow-500 align-baseline hover:text-yellow-800" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}


const mapDispatchToProps =(dispatch:any)=> {
  return {
  login:(values:IAuth)=>dispatch(login(values))
}
}

export default connect(null, mapDispatchToProps)(AuthPage)
