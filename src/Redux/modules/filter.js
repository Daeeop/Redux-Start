import { createActions, handleActions } from "redux-actions";

// console.log(createAction("Hello")); // 함수가 나옴
// console.log(createAction("Hello")()); // 액션 객체가 생성 됨 { type: "HELLO" }
// console.log(createAction("Hello")("HI")); // {type: "Hello", payload: "HI"}

// 액션 생성자 함수 바로 추출
export const { showAll, showComplete } = createActions(
  "SHOW_ALL",
  "SHOW_COMPLETE",
  {
    prefix: "redux-start/filter",
  }
);

// // 액션 타입 정의
// const SHOW_ALL = "redux-start/filter/SHOW_ALL";
// const SHOW_COMPLETE = "redux-start/filter/SHOW_COMPLETE";

// 액션 생성자 정의
// 매개변수를 처리해줄 필요 딱히 없음
// export function showAll() {
//   return {
//     type: SHOW_ALL,
//   };
// }

// export function showComplete() {
//   return {
//     type: SHOW_COMPLETE,
//   };
// }

// 초기값
const initialState = "ALL";

// 리듀서(redux-actions 라이브러리 )
const reducer = handleActions(
  {
    SHOW_ALL: (state, action) => "ALL",
    SHOW_COMPLETE: () => "COMPLETE",
  },
  initialState,
  { prefix: "redux-start/filter" }
);

// 리듀서 함수
// const filterInitialState = initialState.filter;
// export default function reducer(previousState = initialState, action) {
//   if (action.type === SHOW_COMPLETE) {
//     return "COMPLETE";
//   }

//   if (action.type === SHOW_ALL) {
//     return "ALL";
//   }

//   return previousState;
// }

export default reducer;
