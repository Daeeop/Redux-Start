// todoApp의 state
// ['코딩' , '요리']; 배열

// state 변경
// [{text : '코딩' , done: false}, {text : '운동' , done: false}]

// state 변경
// {todos :  [{text : '코딩' , done: false}, {text : '운동' , done: false}] , filter:'ALL'}
// filter : ALL >> COMPLETE

// 초기값의 상태
const initialState = { todos: [], filter: "ALL" };
const todosInitialState = initialState.todos;
const filterInitialState = initialState.filter;

// 리듀서 함수
// export function todoApp(previousState = initialState, action) {
//   // 초기값을 설정 해주는 부분
//   // if (previousState === undefined) {
//   //   return [];
//   // }

//   // 액션을 받아서 변화가 있으면 newState를 리턴
//   if (action.type === ADD_TODO) {
//     // return [...previousState, action.todo];
//     return {
//       ...previousState,
//       todos: [...previousState.todos, { text: action.text, done: false }],
//     };
//   }

//   if (action.type === COMPLETE_TODO) {
//     return {
//       ...previousState,
//       todos: previousState.todos.map((todo, index) => {
//         if (index === action.index) {
//           return { ...todo, done: true };
//         }
//         return todo;
//       }),
//     };
//   }

//   if (action.type === SHOW_COMPLETE) {
//     return {
//       ...previousState,
//       filter: "COMPLETE",
//     };
//   }

//   if (action.type === SHOW_ALL) {
//     return {
//       ...previousState,
//       filter: "ALL",
//     };
//   }

//   // 아무런 변화가 없으면 previousState를 리턴
//   return previousState;
// }

// 스프레드 문법이나 , rest를 사용하지 않고 push , concat 함수를 사용해서 처리하면 immutable 위배
