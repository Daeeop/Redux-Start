import logo from "./logo.svg";
import "./App.css";
import { Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Todos from "./pages/Todos";
import history from "./history";
import { ConnectedRouter } from "connected-react-router";

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
    // <Router history={history}>
    //   <Route path="/" exact component={Home} />
    //   <Route path="/todos" exact component={Todos} />
    //   <Route path="/users" exact component={Users} />
    // </Router>

    <ConnectedRouter history={history}>
      <Route path="/" exact component={Home} />
      <Route path="/todos" exact component={Todos} />
      <Route path="/users" exact component={Users} />
    </ConnectedRouter>
  );
}

export default App;
