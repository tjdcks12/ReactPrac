import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({ // 여기에 스테이트를 매핑한다.
  books: BooksReducer
  //books라는 프로퍼티(스테이트 값) 값으로 booksReudcer 이름의 리듀서를 갖는것.
});

export default rootReducer;
