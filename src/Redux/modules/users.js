import axios from "axios";
import { push } from "connected-react-router";
import { call, delay, put, takeEvery } from "redux-saga/effects";

// 액션 타입 정의
// users에 대한 액션 타입 / 생성자
const GET_USERS_START = "redux-start/users/GET_USERS_START"; // 깃 허브 API 호출을 시작하는 것을 의미
const GET_USERS_SUCCESS = "redux-start/users/GET_USERS_SUCCESS"; // API 호출에 대한 응답이 성공적으로 돌아온 경우
const GET_USERS_FAIL = "redux-start/users/GET_USERS_FAIL"; //  API 호출에 대한 응답이 실패

// promise 라이브러리
const GET_USERS = "redux-start/users/GET_USERS";
// promise 라이브러리가 자동으로 생성해주는 액션 타입 >> 이 타입에 대응되는 리듀서 함수를 만들어야함
export const GET_USERS_PENDING = "redux-start/users/GET_USERS_PENDING";
export const GET_USERS_FULFILLED = "redux-start/users/GET_USERS_FULFILLED";
export const GET_USERS_REJECTED = "redux-start/users/GET_USERS_REJECTED";

// 액션 생성자 함수
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

// 초기값
const initialState = {
  loading: false,
  data: [],
  error: null,
};

// 리듀서 함수
export default function reducer(state = initialState, action) {
  if (action.type === GET_USERS_START || action.type === GET_USERS_PENDING) {
    return {
      ...state,
      loding: true,
      error: null,
    };
  }

  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      loding: false,
      data: action.data,
    };
  }

  if (action.type === GET_USERS_FULFILLED) {
    return {
      ...state,
      loding: false,
      data: action.payload,
    };
  }

  if (action.type === GET_USERS_FAIL) {
    return {
      ...state,
      loding: false,
      error: action.error,
    };
  }

  if (action.type === GET_USERS_REJECTED) {
    return {
      ...state,
      loding: false,
      error: action.payload,
    };
  }
  return state;
}

function sleep(ms) {
  return new Promise((rseolve) => {
    setTimeout(() => {
      rseolve();
    }, ms);
  });
}

// 리덕스 미들웨어
// thunk 라이브러리
export function getUsersThunk() {
  return async (dispatch, getState, { history }) => {
    try {
      console.log(history);
      dispatch(getUsersStart());
      // sleep
      await sleep(3000);
      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));

      // 페이지 이동
      history.push("/");
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
}

export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get("https://api.github.com/users");
      return res.data;
    },
  };
}

// redux-saga
// generator 생성 함수
function* getUsersSaga(action) {
  try {
    yield put(getUsersStart());
    // sleep
    yield delay(2000);
    const res = yield call(axios.get, "https://api.github.com/users");
    yield put(getUsersSuccess(res.data));
    // 페이지 이동
    yield put(push("/"));
  } catch (error) {
    yield put(getUsersFail(error));
  }
}
// 액션 타입을 정의
const GET_USERS_SAGA_START = "GET_USERS_SAGA_START";

// 액션 생성자 함수
export function getUsersSagaStart() {
  return {
    type: GET_USERS_SAGA_START,
  };
}

export function* usersSaga() {
  yield takeEvery("GET_USERS_SAGA_START", getUsersSaga);
}
