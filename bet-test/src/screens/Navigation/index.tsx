import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Auth from '../Auth/AuthPage'
import '../../App.css';
import LandingPage from '../Landing/LandingPage';

function Navigation({ loggedIn=false }: any) {
    return (
        <Router>
            <Routes>
                <Route path="/" element={!loggedIn ? <Auth /> : <Navigate to="/home" />} />
                <Route path="/home" element={<LandingPage/>}/>
            </Routes>

        </Router>
    )
}
const mapStateToProps = (state: any) => {
    return {
        loggedIn: state.user.loggedIn
    }
}
export default connect(mapStateToProps)(Navigation);