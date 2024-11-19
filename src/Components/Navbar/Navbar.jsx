import React, { useEffect, useState } from 'react'
import './Navbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { Link } from 'react-router-dom';
const Navbar = () => {

    return (
        <div className='navbar-container'>

                <div className="box">

                <div className="search">
                    <input placeholder='Search Here...' />
                    <SearchIcon />
                </div>

                <div className="box-notification">
                <div className="notification ">
                <NotificationsIcon/>
                </div>

                <div className="add-video">
                <VideoCallIcon/>
                </div>
                </div>

                <Link to={'/signin'} style={{textDecoration: 'none', color: 'inherit'}} >
                <div className="sign-in">
                <button>
                <AccountCircleIcon />
                SIGN IN
                </button>
            </div>
                </Link>


                </div>


            </div>
    )
}

export default Navbar
