import React from "react";
import "./styles.css";
import ITodo from "../const/todo";
import SingleTodo from "./SingleTodo";

interface Propos {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoList: React.FC<Propos> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          todos={todos}
          key={todo.id}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
