import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
const Input = styled.input`
  :focus {
    outline-color: red;
  }
`;

interface IForm {
  email: string;
  firstName: string;
  lastName?: string;
  username: string;
  password: string;
  password1: string;
}

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        {/* register 함수가 반환하는 객체를 가져다가 input의 props주는 형태임. */}
        <Input
          {...register("email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        ></Input>
        <span style={{ color: "white" }}>
          {/* {errors.Email?.type === "pattern" && "Only naver.com emails allowed"} */}
          {errors?.email?.message}
        </span>
        <input
          {...register("firstName", {
            required: true,
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="firstName"
        ></input>

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
