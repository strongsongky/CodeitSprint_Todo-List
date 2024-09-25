"use client";

import React, { useState } from "react";
import useTodos from "../hooks/useTodos";
import TodoList from "../components/TodoList";
import Input from "../components/Input";
import Button from "../components/Button";
import styles from "./page.module.css";

export default function Home() {
  const [newTodo, setNewTodo] = useState("");
  const { todos, addTodo, toggleTodo } = useTodos();

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          src="/logo.png"
          alt="로고"
          className={styles.logo}
          onClick={() => window.location.reload()}
        />
        <Input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="할 일을 입력해주세요"
        />
        <Button onClick={handleAddTodo}>+ 추가하기</Button>
      </header>

      <div className={styles.todoWrapper}>
        <TodoList
          title="TO DO"
          todos={todos.filter((todo) => !todo.completed)}
          toggleTodo={toggleTodo}
        />
        <TodoList
          title="DONE"
          todos={todos.filter((todo) => todo.completed)}
          toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
}
