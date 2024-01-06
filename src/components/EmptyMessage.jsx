import { useContext } from "react";
import { TodoContext } from "../store/TodoStore";

const EmptyMessage = () => {
  const { todo, spinnerShow } = useContext(TodoContext);
  return !spinnerShow && todo.length === 0 && <h2>Enjoy your day!!</h2>;
};

export default EmptyMessage;
