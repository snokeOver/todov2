import { useContext } from "react";
import { TodoContext } from "../store/TodoStore";

const DisplayTodo = ({ id, name, date }) => {
  const { deleteTodo } = useContext(TodoContext);
  return (
    <div className="container text-center">
      <div className="row inputRow">
        <div className="col-4">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteTodo(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayTodo;
