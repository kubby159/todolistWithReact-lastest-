import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

interface IForm {
  Todo: string;
}

function ToDolist() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>({
    defaultValues: {
      Todo: "hello",
    },
  });
  const onValid = (data: IForm) => {
    setValue("Todo", "");
  };

  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("Todo", {
            required: "Please write something here",
          })}
          placeholder="Please write something here"
        />
        <span>{errors.Todo?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDolist;
