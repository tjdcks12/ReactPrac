import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyAhPYlCj2r5vtPcpo9eMtzYSc70IhM-ZcY';

// Create a new component, This component should produce
// some HTML
//App은 클래스
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
     };
    this.videoSearch('surfBoards');

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() { 
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); //내부 함수가 300밀리초마다 호출됨
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/> 
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} /> 
    </div>);
  };
};

ReactDOM.render(<App/>, document.querySelector('.container'));

// <div>Hi!</div>와 같은
// JSX 라고 불린다. HTML 형태의 템플릿 표면적으로 보여지지 않는 자바스크립트를 말함.
// JSX에 의해 해석되지 못한다
// 그렇다면 왜 JSX를 활용하는가?
// 실제로 HTML에 변환되어 제공되기때문. 컴포넌트를 렌더링할때(컴포넌트를 HTML 페이지에 올리는 과정


// Take this component's generated HTML and put
// on the page (in the DOM)


// YOUTUBE API key
// AIzaSyAhPYlCj2r5vtPcpo9eMtzYSc70IhM-ZcY


// ## 13장 export, state
//
