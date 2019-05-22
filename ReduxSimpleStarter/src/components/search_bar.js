import React, { Component } from 'react';

// { ~~ } 문법적 Sugar라고 표현

// const Component = React.Component;와 같은 의미를 지님

//괄호 의미는 react라이브럴리를 불러와 Component라는 이름을 붙임

// == const Component = React.Componenty

//JSX를 평범한 JS로 변환할때마다 React.createElement와 같은 함수가 실행되므로 React 임포트가 필요함
// const SearchBar = () => {
//   return <input />;
// }

// 함수 선언형 컴포넌트의 경우 재사용성이 없음 + 추가기능을 넣기 힘듬
// 때문에 클래스기반 컴퓨너티를 많이 사용

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};
  }
  render() {
    return <div className="search-bar">
      <input onChange = {(event) => this.onInputChange(event.target.value)} />
    </div>;
  }


  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

//이것이 스테이트를 정의하거나 재 초기화 하는 방법 (여기서만 이런식으로 변화 가능) 다른 컴포넌트에서는 this.setState를 해야함
// 함수형 컴포넌트는 스테이트를 가지지않으며, 비요율적
// 생성자는 인스턴스 생성될때마다 불려진다 (변수값 초기화 등에 주로 이용)
// 우리가 정의 컴포넌트 기반의 각 클래스는 그 자체의 스테이트 객체를 가진다
// 컴포넌트 스테이트가 바뀔때마다 컴포넌트는 즉시 리렌더링하고
// 자식 요소들에게 리렌더링하도록 명령한다
// render() 함수가 재 실행되는것이다.


export default SearchBar;

//이 어플리케이션의 어느곳에서도 SearchBar를 사용가능하다
