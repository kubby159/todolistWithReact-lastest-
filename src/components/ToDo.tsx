import { IToDo, toDoState } from "./atoms";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faCheck, faRunning } from "@fortawesome/free-solid-svg-icons";
import { useSetRecoilState } from "recoil";

const TodoList = styled.li`
  padding-bottom: 2rem;
  font-size: 1.5rem;
`;

const TodoBox = styled.div`
  width: 420px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 14px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const TodoBtnBox = styled.div``;

const ToDoBtn = styled.button`
  border: 1px solid transparent;
  border-radius: 50%;
  padding: 12px;
  margin-left: 4px;
  font-size: 14px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  cursor: pointer;
`;

const TodoToDo = styled(ToDoBtn)`
  background-color: #64ffda;
`;
const TodoDoing = styled(ToDoBtn)`
  background-color: #00b0ff;
`;
const TodoDone = styled(ToDoBtn)`
  background-color: #41c301;
`;

function ToDo({ text, id, category }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name };
      console.log(oldToDos, newToDo);
      return oldToDos;
    });
  };
  return (
    <TodoList key={id}>
      <TodoBox>
        {text}
        <TodoBtnBox>
          {category !== "DOING" && (
            <TodoToDo name="DOING" onClick={onClick}>
              <FontAwesomeIcon icon={faRunning}></FontAwesomeIcon>
            </TodoToDo>
          )}

          {category !== "TO_DO" && (
            <TodoDoing name="TO_DO" onClick={onClick}>
              <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
            </TodoDoing>
          )}
          {category !== "DONE" && (
            <TodoDone name="DONE" onClick={onClick}>
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </TodoDone>
          )}
        </TodoBtnBox>
      </TodoBox>
    </TodoList>
  );
}

export default ToDo;
