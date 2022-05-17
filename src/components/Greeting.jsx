import { useState } from "react";
import styled from "styled-components";

function PaintGreeting() {
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");
  const localStorage = window.localStorage;

  return (
    <GreetingBox>
      {savedName ? (
        <h1>Hello, {name}</h1>
      ) : (
        <div>
          <input
            type="text"
            size={15}
            placeholder="What is your name?"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            onClick={() => {
              localStorage.setItem("name", name);
              setSavedName(localStorage.getItem("name"));
            }}
          >
            Submit
          </button>
        </div>
      )}
    </GreetingBox>
  );
}

export default PaintGreeting;

const GreetingBox = styled.div`
  position: absolute;
  top: 50%;
  left: -50%;
  right: -50%;
  div {
    input {
      width: 250px;
      height: 30px;
      border: none;
      border-bottom: 1px solid #d1d1d1;
      margin: 50px 15px 0 20px;
      background: none;
      color: #fff;
      font-size: 23px;
      font-weight: 700;
    }
    button {
      width: 80px;
      height: 30px;
      font-size: 20px;
      font-weight: 600;
      color: #fff;
      border: none;
      background: none;
      text-shadow: 2px 2px 3px #000;
    }
  }
  h1 {
    color: #fff;
    font-size: 50px;
    font-weight: 600;
    margin-top: 30px;
    text-shadow: 2px 2px 3px #000;
  }
`;
