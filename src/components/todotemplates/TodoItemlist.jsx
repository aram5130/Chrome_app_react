import styled from "styled-components";

import TodoItem from "./TodoItem";

function TodoItemlist({ todos, onRemove }) {
  //props로 받은 todos 배열을
  return (
    <TodoItemlistContainer>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </TodoItemlistContainer>
  );
}

export default TodoItemlist;

const TodoItemlistContainer = styled.div``;
//map을 사용하여 새로운 배열을 랜더링 해준다.
//map을 이용해서 comp 변환할때 key props를 전달해주는데,
// todo객체의 고유값인 id를 전달
