import { useContext, useEffect } from "react";
import DisplayTodo from "./DisplayTodo";
import { TodoContext } from "../store/TodoStore";
import { useLoaderData } from "react-router-dom";

const DisplayTodos = () => {
  const { todo, tab, setTab } = useContext(TodoContext);
  const tabName = useLoaderData();
  useEffect(() => {
    setTab(tabName);
  }, [tabName]);
  return (
    tab === "Home" && (
      <>
        {todo.map((item) => (
          <DisplayTodo
            key={item._id}
            name={item.todoName}
            date={item.dueDate}
            id={item._id}
          />
        ))}
      </>
    )
  );
};

export default DisplayTodos;
