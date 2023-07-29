import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools } from 'react-icons/fa';
import UserList from "./UserList";
import UserProfile from "./UserProfile";
import './Dashboard.css';
import WeatherWidget from './WeatherWidget';
import WeatherPage from './WeatherPage';
import BitcoinWidget from './BitcoinWidget';
import BitcoinDetails from './BitcoinDetails';
import PopulationDetail from './PopulationDetail';
import PopulationWidget from './PopulationWidget';

const Dashboard = () => {
    return (
        <div className="dashboard">
            {/* Navigation bar */}
            <nav className="navbar">
                <ul>
                    {/* Link to tools page */}
                    <li><Link to="/tools"><FaTools /> Tools</Link></li>
                </ul>
            </nav>
            {/* Main content area */}
            <div className="main-content">
                {/* Widget: User Profile */}
                <div className="widget">
                    <UserProfile />
                </div>
                {/* Widget: User List */}
                <div className="widget">
                    <UserList />
                </div>
                {/* Widget: Weather Widget */}
                <div className="widget">
                    <WeatherWidget />
                </div>
                {/* Widget: Bitcoin Widget */}
                <div className="widget">
                    <BitcoinWidget />
                </div>
                {/* Widget: Population Widget */}
                <div className="widget">
                    <PopulationWidget />
                </div>
            </div>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Heading for API Details */}
                <h2>API Details</h2>
                {/* Weather Details */}
                <WeatherPage />
                {/* Bitcoin Details */}
                <BitcoinDetails />
                {/* Population Details */}
                <PopulationDetail />
            </div>
        </div>
    );
}

export default Dashboard;