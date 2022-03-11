import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { toDoState } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import styled from "styled-components";

const ToDoContainer = styled.div`
  max-width: 480px;
  height: 100vh;
  margin: 0 auto;
  padding: 2rem;
`;

const ToDoHead = styled.span`
  display: inline-block;
  width: 100%;
  padding: 4rem;
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  border-bottom: 1px solid darkgray;
`;

const ToDoUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoState);

  return (
    <ToDoContainer>
      <ToDoHead>To Dos</ToDoHead>
      <CreateToDo />
      <ToDoUl>
        {toDos.map((toDo) => (
          // <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
          <ToDo {...toDo} />
        ))}
      </ToDoUl>
    </ToDoContainer>
  );
}

export default ToDoList;
