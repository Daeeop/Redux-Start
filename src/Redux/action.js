// App 에서 사용하는 모든 액션을 정의하고 액션 생성 함수를 만든다.

// Action 타입을 정의하여 변수로 빼는 단계
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO"; // 할일 완료 했을때 사용하기위한 액션 타입
export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";

// ADD_TODO 타입을 이용하는 액셩 생성 함수
// 할일을 입력 받아야 하기때문에 todo 프로퍼티 추가 (payload가 있는 액션)
// export function addTodo(todo) {
//   return {
//     type: ADD_TODO,
//     todo, // todo: todo

//   };
// }

// conbinedReducers
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

// 매개변수를 처리해줄 필요 딱히 없음
export function showAll() {
  return {
    type: SHOW_ALL,
  };
}

export function showComplete() {
  return {
    type: SHOW_COMPLETE,
  };
}
