import React, { Component } from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem onVideoSelect = {props.onVideoSelect} key={video.etag} video={video} />
    );
  })
  return (
    <ul className="col-md-4 list-group"> 
      {videoItems} 
    </ul>
    // {videoItems}  리액트는 이렇게 표현된거를 컴포넌트 배열로 인식한다
  );
}

// class VideoList extends Component {
//   constructor(props) {
//     super(props);

//   }
//   render() {
//     return  (
//     <ul className = "col-md-4 list-group">
//       {this.props.videos.length}
//     </ul>
//     );
//   }
// }

export default VideoList;
