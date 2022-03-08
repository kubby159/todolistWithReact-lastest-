import React, { useState } from "react";
import { useForm } from "react-hook-form";
/*function ToDolist() {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError("");
    setToDo(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("To do should be longer");
    }
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
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
}*/

function ToDolist() {
  //watch는 form의 입력값된 값의 변화를 관찰할 수 있게 해주는 함수임.
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        {/* register 함수가 반환하는 객체를 가져다가 input의 props주는 형태임. */}
        <input
          {...register("Email", { required: true, minLength: 10 })}
          placeholder="Email"
        ></input>
        <input {...register("firstName")} placeholder="firstName"></input>
        <input {...register("lastName")} placeholder="lastName"></input>
        <input {...register("username")} placeholder="username"></input>
        <input {...register("password")} placeholder="password"></input>
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: { value: 5, message: "your password is too short!" },
          })}
          placeholder="password1"
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDolist;
