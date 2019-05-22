import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    //여기서 {video} 라는 의미는 아래줄의 props.video 를 통해 props를 인자로 받았을때와 동일하다
    // const video = props.video;
    // const onVideoSelect = props.onVideoSelect;

    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>

                </div>
            </div>
        </li>
    );
}

export default VideoListItem;