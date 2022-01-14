import React from 'react'
import { connect } from 'react-redux'
import "./index.css";

const bg = require("../../assets/coj-unsplash.jpg");

const AuthPage = (props:any) => {
    return (
        <div className="w-screen h-screen p-5 bg-gradient-to-r from-teal-100 via-teal-50 to-teal-100">
        <div className='flex justify-between shadow-md rounded-3xl w-100 h-100'>
  
          <div className='justify-center rounded-l-3xl w-50 d-flex align-items-centers bg-light my-container'>
            <img src={bg} alt="Avatar" className="image rounded-l-3xl" />
            <div className="flex flex-col justify-between py-3 overlay rounded-l-3xl">
  
              <h5 className='font-weight-bolder'>
                My Name is John
              </h5>
  
              
              <p>
                and save to reload.
              </p>
              <small className='fw-bold'>
                Look better than this
              </small>
            </div>
  
          </div>
          <div className='flex-col bg-white rounded-r-3xl w-50 d-flex justify-content-around align-items-center'>
            <h4 className='font-extrabold h4'>Login</h4>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white ">
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                  Username
                </label>
                <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                  Password
                </label>
                <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                <p className="text-xs italic text-red-500">Please choose a password.</p>
              </div>
              <div className="flex items-center justify-between">
                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
                  Sign In
                </button>
                <a className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800" href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div >
    )
}


const mapStateToProps = (state:any) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage)
