import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "./atoms";
import styled from "styled-components";

const ToDoForm = styled.form`
  padding: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToDoInput = styled.input`
  display: inline-block;
  width: 70%;
  height: 2rem;
  border: 1px solid transparent;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  outline-style: none;
  padding: 4px;
`;

const ToDoAddBtn = styled.button`
  width: 42px;
  height: 32px;
  margin-left: 4px;
  border-radius: 12px;
  border: transparent;
  background-color: #41c301;
  color: #fff;
  cursor: pointer;
`;

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <ToDoForm onSubmit={handleSubmit(handleValid)}>
      <ToDoInput
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <ToDoAddBtn>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </ToDoAddBtn>
    </ToDoForm>
  );
}

export default CreateToDo;
