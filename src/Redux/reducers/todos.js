import { ADD_TODO, COMPLETE_TODO } from "../action";

// 각각 다른 initialState가 들어가야함
// [{text : '코딩' , done: false}, {text : '운동' , done: false}]
// const todosInitialState = initialState.todos;

const initialState = [];

export default function todos(previousState = initialState, action) {
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
