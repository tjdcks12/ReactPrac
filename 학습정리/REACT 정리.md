### 강의 24. Map





```javascript
var array = [1,2,3];

array.map(function(number) { return number *2}); // [2,4,6]

//새로운 배열이 반환된다


//JSX 처럼 사용하면 다음과 같이 응용 가능하다
array.map(function(number) { return '<div>' + number + '</div>'});
//["<div>1</div>", "<div>2</div>", "<div>3</div>"]
//JSX배열이기때문에 리액트로 렌더링도 가능하다.
```





```

```

