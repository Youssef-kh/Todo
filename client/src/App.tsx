import React, { useState,useEffect } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";
import TodoService from "./services/TodoService";
import ITodo from "./const/todo";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    var newTodo : any;
    newTodo = {
      done:0,
      todo:todo,
    }
    if (todo) {
      await TodoService.create(newTodo)
      fetchData();
      setTodo("");
    }
  };
  const fetchData = async () =>{
    let res : any = await TodoService.getAll();
    console.log(res.data)
    setTodos((prev)=> res.data)
  }
  useEffect(() => {
    console.log("useEffect")
    fetchData();

  }, [])

  
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
