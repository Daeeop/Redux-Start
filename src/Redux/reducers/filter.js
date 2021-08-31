import { SHOW_COMPLETE, SHOW_ALL } from "../action";
// 리듀서 함수
// const filterInitialState = initialState.filter;

const initialState = "ALL";

export default function filter(previousState = initialState, action) {
  if (action.type === SHOW_COMPLETE) {
    return "COMPLETE";
  }

  if (action.type === SHOW_ALL) {
    return "ALL";
  }

  return previousState;
}
