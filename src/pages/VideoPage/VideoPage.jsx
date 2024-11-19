import React from 'react';
import './VideoPage.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ReplyIcon from '@mui/icons-material/Reply';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import photo_channel from '../../assets/img/inageChannel.jpg';
import Comments from '../../Components/Comments/Comments';
import Cards from '../../Components/Cards/Cards';
// import Cards from '../../Components/Cards/Cards'
const VideoPage = () => {
    return (
        <div className='video-container'>
            <div className="content">
            <div className="videoWrapper">
            <iframe 
            width="100%" 
            height="420"
            src="https://www.youtube.com/embed/fBER2mXaRPU?si=-GrEauPIT1meaxyu" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            style={{borderRadius: '3px'}}
            >
            </iframe>
            </div>
            <h1 className='title-video'>Test Video</h1>
            <div className="details-video">
                <span className="info">7,948,145 views . Jan 22, 2022</span>
                <div className="buttons">

                    <div className="button">
                    <ThumbUpOffAltIcon/>123
                    </div>

                    <div className="button">
                    <ThumbDownOffAltIcon/>Disslike
                    </div>

                    <div className="button">
                    <ReplyIcon/>Share
                    </div>

                    <div className="button">
                    <SaveAltIcon/>Save
                    </div>


                </div>
            </div>
            <div className="line" id='line'></div>
            <div className="channel-video">
                <div className="channelInfo-video">
                <img src={photo_channel} alt="" className="channelImage-video" />
                <div className="chanellDetails-video">
                    <span className="channelName-video">BsOom Dev</span>
                    <span className="channelCounter-video">700k subscribers</span>
                    <p className="channelDescripe-video">
                    BsOom Dev is a tech-oriented YouTube channel that offers tutorials, 
                    programming guides, and software development tips. 
                    Whether you're a beginner looking to get started with coding or an experienced developer seeking to enhance your skills, 
                    this channel covers a wide range of topics, including web development, app development, 
                    and coding best practices. Join us on this learning journey and become part of the BsOom Dev community!
                    </p>
                </div>
                </div>
                    <button className="subscribe">SUBSCRIBE</button>
            </div>
            <div className="line" id='line'></div>
            <Comments />
            </div>
            <div className="recommindation">
            <Cards type={'sm'} />
            <Cards type={'sm'} />
            <Cards type={'sm'} />
            <Cards type={'sm'} />
            <Cards type={'sm'} />
            <Cards type={'sm'} />
            <Cards type={'sm'} />
            <Cards type={'sm'} />
            <Cards type={'sm'} />
            <Cards type={'sm'} />
            <Cards type={'sm'} />
            <Cards type={'sm'} />
            <Cards type={'sm'} />
            <Cards type={'sm'} />
            <Cards type={'sm'} />
            <Cards type={'sm'} />
            <Cards type={'sm'} />
            <Cards type={'sm'} />
            </div>

        </div>
    )
}

export default VideoPage
