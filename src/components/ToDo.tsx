import { IToDo } from "./atoms";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const TodoList = styled.li`
  padding-bottom: 2rem;
  font-size: 1.5rem;
`;

const TodoBox = styled.div`
  width: 420px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 4px;
`;

const TodoBtnBox = styled.div``;

const ToDoBtn = styled.button`
  border: 1px solid #000;
  border-radius: 50%;
  padding: 12px;
  margin-left: 2px;
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
          <TodoToDo>To Do</TodoToDo>
          <TodoDoing>Doing</TodoDoing>
          <TodoDone>
            <FontAwesomeIcon icon={{fa-faCheckCircle}}></FontAwesomeIcon>
          </TodoDone>
        </TodoBtnBox>
      </TodoBox>
    </TodoList>
  );
}

export default ToDo;
