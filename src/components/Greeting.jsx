import { useState } from "react";

function PaintGreeting() {
  let [name, setName] = useState("");
  let [savedName, setSavedName] = useState("");
  let localStorage = window.localStorage;

  return (
    <div>
      <div>
        {savedName ? (
          <h1>Hello, {name}</h1>
        ) : (
          <div>
            <input
              type="text"
              size={10}
              placeholder="What is your name?"
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
              submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaintGreeting;
