import styled from "styled-components";

import { useState, useRef, useEffect } from "react";

function TodoInsert(props) {
  const [content, setContent] = useState("");
  const ref = useRef();

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) return;
    props.onSubmit(content);
    setContent("");
  };

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <TodoInsertContainer>
      <form>
        <input
          ref={ref}
          type="text"
          name="text"
          placeholder="todo itam"
          value={content}
          onChange={handleChange}
          autoFocus
        />
        <button
          type="submit"
          onClick={handleSubmit}
          onKeyPress={handleKeyPress}
        >
          Submit
        </button>
      </form>
    </TodoInsertContainer>
  );
}

export default TodoInsert;

const TodoInsertContainer = styled.div`
  form {
    input {
      background: none;
      border: none;
      border-bottom: 1px solid #d1d1d1;
      margin-right: 10px;
      color: #fff;
    }
    button {
      background: none;
      border: none;
      color: #ffffff;
    }
  }
`;
