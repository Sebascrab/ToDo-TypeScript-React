import React from "react";
import { Todo } from "../model";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdDoneOutline } from "react-icons/md";
import "./styles.css";
import TodoList from "./TodoList";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

    // function for marking todo as done
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

//   function to delete todo
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form className="todos__single">
      {todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span className="icon">
          <FaUserEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <RiDeleteBin5Fill />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDoneOutline />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
