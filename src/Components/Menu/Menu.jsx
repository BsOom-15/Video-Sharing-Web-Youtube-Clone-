import React, { useEffect, useState } from 'react';
import './Menu.css'
import youtube_logo from '../../assets/img/youtube.png';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import RestoreIcon from '@mui/icons-material/Restore';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieIcon from '@mui/icons-material/Movie';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Menu = () => {

    const line = document.querySelector('.line');
    const navbarContainer = document.querySelector('.navbar-container');
    const notification = document.querySelector('.notification');
    const addVideo = document.querySelector('.add-video'); 
    const wrapperSignin = document.querySelector('.wrapper-signin');

    const [theme, setTheme] = useState(false);

    const toggleTheme = () => {
        setTheme(!theme);   
    }

    useEffect(() => {

        if( !navbarContainer || !notification || !addVideo || !line || !wrapperSignin ) return;
        if (theme == true) {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            line.style.borderColor = '#f5f5f5';
            navbarContainer.style.backgroundColor = '#f9f9f9';
            notification.style.color = '#606060';
            addVideo.style.color = '#606060';
            wrapperSignin.style.backgroundColor = '#f9f9f9';
        } else {
            document.body.style.backgroundColor = '#2A2626';
            document.body.style.color = '#fff';
            line.style.borderColor = '#aaaa';
            navbarContainer.style.backgroundColor = '#201c1d';
            notification.style.color = '#ffff';
            addVideo.style.color = '#ffff';
            wrapperSignin.style.backgroundColor = '#201c1d';
        }
    });
    

    
    return (
        <div className='menu-container' style={{
            backgroundColor: theme ? '#f9f9f9' : '#201c1d',
            color: theme ? '#606060' : '#fff'
        }}>
            <Link to='/' style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="menu-img">
                <img src={youtube_logo} alt="" />
                <h2 className='title-header'>BsOomTube</h2>
            </div>
            </Link>
            <div className="menu-items">
                <div className="items-video">
                <HomeIcon />
                <p>Home</p>
                </div>

            <div className="items-video">
            <ExploreIcon />
            <p>Explore</p>
            </div>

            <div className="items-video">
            <SubscriptionsIcon />
            <p>Subscriptions</p>
            </div>

            <div className="line"></div>

            <div className="items-video">
            <VideoLibraryIcon />
            <p>Library</p>
            </div>

            <div className="items-video">
            <RestoreIcon />
            <p>History</p>
            </div>

            <div className="line"></div>
            <div className="sign-in">
                <p>Sign in to like videos, comment, and subscribe.</p>
                <Link to={'/signin'} style={{textDecoration: 'none', color: 'inherit'}} >
                <button>
                <AccountCircleIcon />
                SIGN IN
                </button>
                </Link>
            </div>
            <div className="line"></div>

            <h2 className='title-h2'>Best Of BsOomTube</h2>
            <div className="items-video">
            <LibraryMusicIcon />
            <p>Music</p>
            </div>

            <div className="items-video">
            <SportsBasketballIcon/>
            <p>Sports</p>
            </div>

            <div className="items-video">
            <SportsEsportsIcon />
            <p>Gaming</p>
            </div>

            <div className="items-video">
            <MovieIcon />
            <p>Movies</p>
            </div>

            <div className="items-video">
            <ArticleIcon />
            <p>News</p>
            </div>

            <div className="items-video">
            <LiveTvIcon />
            <p>Live</p>
            </div>

            <div className="line"></div>

            <div className="items-video">
            <SettingsIcon />
            <p>Setting</p>
            </div>

            <div className="items-video">
            <FlagIcon />
            <p>Report</p>
            </div>

            <div className="items-video">
            <HelpOutlineIcon />
            <p>Help</p>
            </div>

            <div className="items-video" onClick={toggleTheme}>
            <SettingsBrightnessIcon />
            <p>{theme ? 'Dark Mode' : 'Light Mode'}</p>
            </div>


            </div>
        </div>
    )
}

export default Menu
