import React from 'react';
import './Comments.css';
import avtar_image from '../../assets/img/inageChannel.jpg';
import Comment from './Comment';

const Comments = () => {
    return (
        <div className='comments-container'>
            <div className="newComments">
                <img src={avtar_image} alt="" className="avtar" />
                <input type="text" placeholder='Add a comment...' />
            </div>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}

export default Comments
