import { useSelector } from "react-redux";
import TodoList from "../components/TodoList";

// state를 매개변수로 받아서 props 객체로 만들어 return 해준다..
// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

// connect 함수를 이용하여 연결
// 실행한 결과물이 HOC 함수
// 두번째 함수를 실행한 결과가 Container
// const TodoListContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList);

// mapStateToProps의 리턴 값이 TodoList에 들어간다.

// Hook으로 작성 (많이 씀)
function TodoListContainer() {
  const todos = useSelector((state) => state.todos);
  return <TodoList todos={todos} />;
}

export default TodoListContainer;
