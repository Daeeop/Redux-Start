import axios from "axios";

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

// users에 대한 액션 타입 / 생성자

export const GET_USERS_START = "GET_USERS_START"; // 깃 허브 API 호출을 시작하는 것을 의미
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"; // API 호출에 대한 응답이 성공적으로 돌아온 경우
export const GET_USERS_FAIL = "GET_USERS_FAIL"; //  API 호출에 대한 응답이 실패

export function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}

export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
}

export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}

// thunk 라이브러리
export function getUsersThunk() {
  return async (dispatch) => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
}

// promise 라이브러리
const GET_USERS = "GET_USERS";
// promise 라이브러리가 자동으로 생성해주는 액션 타입 >> 이 타입에 대응되는 리듀서 함수를 만들어야함
export const GET_USERS_PENDING = "GET_USERS_PENDING";
export const GET_USERS_FULFILLED = "GET_USERS_FULFILLED";
export const GET_USERS_REJECTED = "GET_USERS_REJECTED";
export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get("https://api.github.com/users");
      return res.data;
    },
  };
}
