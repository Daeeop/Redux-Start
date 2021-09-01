import logo from "./logo.svg";
import "./App.css";
// import TodoList from "./components/TodoList";
// import TodoForm from "./components/TodoForm";
import TodoFormContainer from "./containers/TodoFormContainer";
import TodoListContainer from "./containers/TodoListContainer";

// function App({ store }) {
//   const [state, setState] = useState(store.getState());

//   // props로 내려온 store을 useEffect를 이용하여 라이프 사이클 구현
//   useEffect(() => {
//     const unsubscribe = store.subscribe(() => {
//       setState(store.getState());
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, [store]);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {JSON.stringify(state)}
//         <button onClick={click}>추가</button>
//       </header>
//     </div>
//   );

//   function click() {
//     store.dispatch(addTodo("리덕스"));
//   }
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TodoForm />
        <TodoList /> */}
        <TodoListContainer />
        <TodoFormContainer />
      </header>
    </div>
  );
}

export default App;
