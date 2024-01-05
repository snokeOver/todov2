import { useContext, useEffect, useRef } from "react";
import { TodoContext } from "../store/TodoStore";
import { useLoaderData } from "react-router-dom";

const TodoInput = () => {
  const { addTodo, tab, setTab } = useContext(TodoContext);
  const tabName = useLoaderData();
  useEffect(() => {
    setTab(tabName);
  }, [tabName]);

  const nameRef = useRef();
  const dateRef = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    addTodo(nameRef.current.value, dateRef.current.value);
    nameRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    tab === "Post" && (
      <div className="container text-center">
        <form className="row inputRow" onSubmit={handleOnSubmit}>
          <div className="col-4">
            <input
              type="text"
              ref={nameRef}
              placeholder="Enter your todo"
              required
            ></input>
          </div>
          <div className="col-4">
            <input type="date" ref={dateRef} required></input>
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-primary">
              ADD
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default TodoInput;
