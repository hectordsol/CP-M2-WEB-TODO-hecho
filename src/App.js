import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import AddTodo from "./components/AddTodo/AddTodo";
import Todo from "./components/Todo/Todo";

// En este componente deberias cargar tus rutas.
export function App() {
  return (
    <div className="App">
      <React.Fragment>
      <Route path={"/"}>
        <Nav />
      </Route>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route path={"/add"}>
        <AddTodo />
      </Route>
      <Route path={"/edit/:id"}>
        <Todo/>
      </Route>
      </React.Fragment>
    </div>
  );
}

export default App;
