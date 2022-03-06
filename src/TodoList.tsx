import React, { useState } from "react";

function ToDolist() {
  const [toDo, setToDo] = useState("");
  //타입스크립트를 사용할 때 input을 사용한다면 React.FormEvent<HTMLInputElement> 추가해주기.
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Write a to do"
          onChange={onChange}
          value={toDo}
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDolist;
