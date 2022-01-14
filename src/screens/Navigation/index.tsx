import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Auth from '../Auth'
import '../../index.css';

function Navigation({ loggedIn }: any) {
    return (
        <div className="min-vh-100 min-vw-100">
        <Router>
            <Routes>
                <Route path="/" element={!loggedIn ? <Auth /> : <Navigate to="/home" />} />
            </Routes>

        </Router>

        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        loggedIn: state.auth.loggedIn
    }
}
export default connect(mapStateToProps)(Navigation);