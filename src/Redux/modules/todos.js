// 각각 다른 initialState가 들어가야함
// [{text : '코딩' , done: false}, {text : '운동' , done: false}]
// const todosInitialState = initialState.todos;

// 액션 타입 정의
const ADD_TODO = "redux-start/todos/ADD_TODO";
const COMPLETE_TODO = "redux-start/todos/COMPLETE_TODO"; // 할일 완료 했을때 사용하기위한 액션 타입

// 액션 생성자 함수 정의
// return : {type : ADD_TODO , text : 'text}
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

// {type : COMPLETE_TODO , index : 3}
export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}
// 액션 초기값 정의
const initialState = [];

// 리듀서 함수
export default function reducer(previousState = initialState, action) {
  if (action.type === ADD_TODO) {
    return [...previousState, { text: action.text, done: false }];
  }

  if (action.type === COMPLETE_TODO) {
    return previousState.map((todo, index) => {
      if (index === action.index) {
        return { ...todo, done: true };
      }
      return todo;
    });
  }
  return previousState;
}
