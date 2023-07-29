import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from "./UserList";
import UserProfile from "./UserProfile";
import './Dashboard.css';
import WeatherWidget from './WeatherWidget';
import WeatherPage from './WeatherPage';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="main-content">
                <div className="widget">
                    <UserProfile />
                </div>
                <div className="widget">
                    <UserList />
                </div>
                <div className="widget">
                    <WeatherWidget />
                </div>
            </div>
            <div className="sidebar">
                <h2>API Details</h2>
                <WeatherPage />
            </div>
        </div>

    );
}

export default Dashboard;