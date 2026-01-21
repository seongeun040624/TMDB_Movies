import React from 'react';
import { RiMovie2Fill } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';

import './header.scss';

const Header = () => {
    const activeStyle = {color: '#94bd43'}
    
    return (
        <div className='header'>
            <h1 className="logo"><Link to="/"><RiMovie2Fill /></Link></h1>
            <div id="nav">
                <nav>
                    <ul>
                        <li><NavLink style={({isActive}) => (isActive? activeStyle : undefined)} to="/">Home</NavLink></li>
                        <li><NavLink style={({isActive}) => (isActive? activeStyle : undefined)} to="/Drama">Drama</NavLink></li>
                        <li><NavLink style={({isActive}) => (isActive? activeStyle : undefined)} to="/Comedy">Comedy</NavLink></li>
                        <li><NavLink style={({isActive}) => (isActive? activeStyle : undefined)} to="/Romance">Romance</NavLink></li>
                        <li><NavLink style={({isActive}) => (isActive? activeStyle : undefined)} to="/Action">Action</NavLink></li>
                        <li><NavLink style={({isActive}) => (isActive? activeStyle : undefined)} to="/Horror">Horror</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;