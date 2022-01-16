import React from 'react'
import { connect } from 'react-redux'
import "./index.css";
import bg from "../../assets/zebra-bushveld-unsplash.jpg";
import { useNavigate } from 'react-router-dom';

const AuthPage = (props:any) => {
  let navigate = useNavigate();
    return (
        <div className="w-screen h-screen  bg-gradient-to-tr from-yellow-50 via-yellow-100 to-yellow-50">
        <div className='flex justify-between shadow-md rw-100 h-100'>
  
          <div className='justify-center w-50 d-flex align-items-centers bg-light my-container'>
            <img src={bg} alt="Avatar" className="image " />
            <div className="flex flex-col justify-between py-3 overlay ">
  
              <h5 className='font-weight-bolder text-yellow-500'>
                My Name is John
              </h5>
  
              
              <p className='text-yellow-200'>
                and save to reload.
              </p>
              <small className='fw-bold text-yellow-200'>
                Look better than this
              </small>
            </div>
  
          </div>
          <div className='flex-col bg-white w-50 d-flex justify-content-around align-items-center'>
            <h4 className='font-extrabold h4'>Login</h4>
            <form className="px-4 pt-6 pb-8 mb-4 ">
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
                <button onClick={()=>navigate("/home")} className="px-2 py-2 font-bold text-white bg-yellow-600 rounded hover:bg-yellow-700 focus:outline-none focus:shadow-outline" type="button">
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


const mapStateToProps = (state:any) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage)
