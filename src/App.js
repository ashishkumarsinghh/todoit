import React from "react";
import Header from "./Header";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-sm centered">
          <Header />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
