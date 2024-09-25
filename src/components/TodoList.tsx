import React from "react";
import styles from "./styles//TodoList.module.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  title: string;
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ title, todos, toggleTodo }) => {
  return (
    <div className={styles.todoList}>
      <h2>{title}</h2>
      {todos.map((todo) => (
        <div key={todo.id} className={styles.todoItem}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className={todo.completed ? styles.completed : ''}>
            {todo.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
