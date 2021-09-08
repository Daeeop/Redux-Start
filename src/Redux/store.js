import { applyMiddleware, createStore } from "redux";
import reducer from "./modules/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import history from "../history";
import { routerMiddleware } from "connected-react-router";

// 미들 웨어(함수)
// next : 현재 미들웨어가 아니고 다음 미들웨어를 지칭
// function middleWare1(store) {
//   console.log("middleward1", 0);
//   return (next) => {
//     console.log("middleware1", 1, next);
//     return (action) => {
//       console.log("middleward1", 2);
//       const returnValue = next(action);

//       console.log("middleward1", 3);
//       return returnValue;
//     };
//   };
// }
// 액션이 dispatch 될때마다 2,3 번이 로그에 찍힌다.

// function middleWare2(store) {
//   console.log("middleward2", 0);
//   return (next) => {
//     console.log("middleware2", 1, next);
//     return (action) => {
//       console.log("middleward2", 2);
//       const returnValue = next(action);

//       console.log("middleward2", 3);
//       return returnValue;
//     };
//   };
// }

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({ history }),
      promise,
      routerMiddleware(history)
    )
  )
);

export default store;
