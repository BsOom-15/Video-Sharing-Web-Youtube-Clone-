import React from 'react'
import './Comment.css';
import avtar_image from '../../assets/img/inageChannel.jpg';
const Comment = () => {
    return (
        <div className='comment-container'>
            <img src={avtar_image} alt="" className="avtar" />
            <div className="details">
                <span className="name">John Dee <span className="date"> 1 day ago</span></span>
                <span className="text">
                    "This video is amazing! I love how detailed and well-explained everything is. 
                    Keep up the great work, looking forward to more content!"
                </span>
            </div>
        </div>
    )
}

export default Comment
