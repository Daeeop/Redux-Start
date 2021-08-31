import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/store";
import { addTodo, completeTodo, showComplete, SHOW_ALL } from "./Redux/action";

// console.log(store);
// console.log(store.getState()); // 현재의 state 상태 출력
// // [] createStore 함수에서 preloadedState를 매개변수로 넣지 않으면 빈배열 출력

// store의 상태를 변화
// 매개변수로 액션 객체 or 액션 생성 함수
// console.log(store.getState()); // ["coding"]

// 위의 코드를 store의 subscribe 코드를 활용하여 다시 작성
// subscribe 구독하다 , 매개변수로 함수를 넣는다.
// store의 상태가 변경되면 매개변수 안에 들어있는 함수가 호출
// subscribe 함수의 리턴은 unsubscribe 하는 함수가 리턴 된다.
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo("lunch"));
store.dispatch(completeTodo(0));
store.dispatch(showComplete());
// unsubscribe();
// store.dispatch(addTodo("exercise")); // unscribe(); 이후에는 state 값이 변경 되어도 출력 안된다. 하지만 실제로 추가는 되어있음

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
