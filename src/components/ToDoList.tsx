import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "./atoms";
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
`;

const ToDoUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
`;

function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);

  return (
    <ToDoContainer>
      <ToDoHead>TO DO LIST</ToDoHead>
      <CreateToDo />
      <h2>To Do</h2>
      <ToDoUl>
        {toDo.map((toDo) => (
          // <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ToDoUl>
      <hr />
      <h2>Doing</h2>
      <ToDoUl>
        {doing.map((toDo) => (
          // <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ToDoUl>
      <hr />
      <h2>Done</h2>
      <ToDoUl>
        {done.map((toDo) => (
          // <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ToDoUl>
      <hr />
    </ToDoContainer>
  );
}

export default ToDoList;
