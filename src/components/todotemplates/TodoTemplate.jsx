import { useState, useRef } from "react";
import styled from "styled-components";

import TodoInsret from "./TodoInsert";
import TodoItemlist from "./TodoItemlist";

function TodoTemplate() {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(0);
  // .current의 기본값을 0으로 지정
  const handleSudmit = (text) => {
    //setTodos([...todos, text]);
    const todo = {
      id: nextId.current,
      text,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1; //nextId 1씩 더하기
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodotempContainer>
      <h1>To Do List</h1>
      <TodoInsret onSubmit={handleSudmit} />
      <TodoItemlist todos={todos} onRemove={onRemove} />
    </TodotempContainer>
  );
}

export default TodoTemplate;

const TodotempContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 0;
  text-align: center;
  color: #fff;
  h1 {
    font-size: 20px;
    font-weight: 600;
  }
`;
