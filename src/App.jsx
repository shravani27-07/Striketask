import "./App.css";
import Todo from "./Components/Todo";
import { Provider } from "react-redux";
import { store } from "./app/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="container">
          <h1 className="title">StrikeTask – Todo App</h1>
          <Todo />
        </div>
      </Provider>
    </>
  );
}

export default App;
