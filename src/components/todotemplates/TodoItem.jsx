import styled from "styled-components";

function TodoItem({ todo, onRemove }) {
  const { id, text } = todo;
  return (
    <TodoItemContainer>
      <p>{text}</p>
      <button onClick={() => onRemove(id)}>✖</button>
    </TodoItemContainer>
  );
}

export default TodoItem;

const TodoItemContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  line-height: normal;
  :first-child {
    margin-top: 15px;
  }
  p {
    width: 200px;
    height: 20px;
    color: #fff;
    padding-left: 5px;
    text-align: left;
  }
  button {
    width: 20px;
    height: 20px;
    background: none;
    border: none;
    color: #fff;
    font-size: 15px;
  }
`;
