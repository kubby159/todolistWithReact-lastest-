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
  extraError?: string;
}

function ToDolist() {
  //watch는 form의 입력값된 값의 변화를 관찰할 수 있게 해주는 함수임.
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError("password1", { message: "Password are not the same" });
    }
    //ExtraError는 form 전체에 적용되는 에러임.
    setError("extraError", { message: "Server offline." });
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
            required: "write here",
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "no nicos allowed" : true,
              noMay: (value) =>
                value.includes("may") ? "no may allowed" : true,
            },
          })}
          placeholder="firstName"
        ></input>
        <span>{errors.firstName?.message} </span>

        <input {...register("lastName")} placeholder="lastName"></input>
        <input {...register("username")} placeholder="username"></input>
        <input
          {...register("password", {
            required: "Write Here",
            minLength: 5,
          })}
          placeholder="password"
        ></input>
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: { value: 5, message: "your password is too short!" },
          })}
          placeholder="password1"
        ></input>
        <span> {errors.password1?.message}</span>
        <button>Add</button>
        <span>{errors.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDolist;
