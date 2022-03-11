import { IToDo } from "./atoms";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faCheck, faRunning } from "@fortawesome/free-solid-svg-icons";

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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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

function ToDo({ text, id }: IToDo) {
  return (
    <TodoList key={id}>
      <TodoBox>
        {text}
        <TodoBtnBox>
          <TodoToDo>
            <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
          </TodoToDo>
          <TodoDoing>
            <FontAwesomeIcon icon={faRunning}></FontAwesomeIcon>
          </TodoDoing>
          <TodoDone>
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </TodoDone>
        </TodoBtnBox>
      </TodoBox>
    </TodoList>
  );
}

export default ToDo;
