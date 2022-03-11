import { IToDo } from "./atoms";

function ToDo({ text, id }: IToDo) {
  return (
    <li key={id}>
      <span>{text}</span>
      <button>To Do</button>
      <button>Doing</button>
      <button>Done</button>
    </li>
  );
}

export default ToDo;
