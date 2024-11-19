import React from 'react'
import './Cards.css';
import background_tube from '../../assets/img/bgYoutube.jpg';
import image_channel from '../../assets/img/inageChannel.jpg'
import { Link } from 'react-router-dom';


const Cards = ({ type }) => {
    return (
        <Link to='/video/test' style={{textDecoration: 'none', color: 'inherit'}}>
        <div className={`cards-container ${type === 'sm' ? 'small' : ''}`}>
        
            <div className={`img-bg ${type === 'sm' ? 'small' : ''}`}>
                <img className= {`img ${type === 'sm' ? 'small' : ''}`} src={background_tube} alt="" />
                <div className={`detail ${type === 'sm' ? 'small' : ''}`}>
                <img className= {`channelImage ${type === 'sm' ? 'small' : ''} `}src={image_channel} alt="img-channel" />
                <div className={`text ${type === 'sm' ? 'small' : ''}`}>
                    <h1 className={`title ${type === 'sm' ? 'small' : ''}`}>How To Set up Your Node.js Development Environment With Typescript, Nodemon and Docker </h1>
                    <h2 className={`channelName ${type === 'sm' ? 'small' : ''}`}>BsOom Dev</h2>
                    <div className={`info ${type === 'sm' ? 'small' : ''}`}>660,908 views . 2 days ago</div>
                </div>

                </div>
            </div>
        </div>
        </Link>
    )
}

export default Cards
