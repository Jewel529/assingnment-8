import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-style">
            <h1>Hacker <span className="text-style">Guardian</span></h1>
            <p className="description">Hire a hacker  who will protect your server from cyber attack</p>
            <h1>Highest Purchase Amount :<span className="text-style">10M</span></h1>
        </div>
    );
};

export default Header;