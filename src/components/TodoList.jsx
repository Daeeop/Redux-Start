// import useReduxState from "../hooks/useReduxState";

// export default function TodoList() {
//   const state = useReduxState();
//   return (
//     <ul>
//       {state.todos.map((todo, index) => {
//         return <li key={index}>{todo.text}</li>;
//       })}
//     </ul>
//   );
// }

export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => {
        return <li key={index}>{todo.text}</li>;
      })}
    </ul>
  );
}
