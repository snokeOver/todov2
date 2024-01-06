import { useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const TodoContext = createContext({
  todo: [],
  addTodo: () => {},
  deleteTodo: () => {},
  spinnerShow: false,
  tab: [],
  setTab: () => {},
});

const todoReducer = (currentValue, action) => {
  let newTodo = currentValue;
  if (action.type === "ADD_TODO") {
    newTodo = action.payload.todos;
  }
  return newTodo;
};

const TodoContextProvider = ({ children }) => {
  const [todo, todoDispatcher] = useReducer(todoReducer, []);
  const [fetchDB, setFetchDB] = useState(false);
  const [spinnerShow, setSpinnerShow] = useState(false);
  const [tab, setTab] = useState("Home");
  const navigate = useNavigate();

  // base url is the url provided by the web services like onrender.com after deploy the server side
  const baseUrl = "https://todov2-api.onrender.com";
  // const baseUrl = "http://localhost:8080";

  useEffect(() => {
    setSpinnerShow(true);
    const fetchTodo = async () => {
      try {
        const fetchedData = await axios.get(baseUrl);
        addTodos(fetchedData.data);
        setSpinnerShow(false);
      } catch (err) {
        console.log("Error fetching data from DB", err.message);
      }
    };
    fetchTodo();
    setFetchDB(false);
  }, [fetchDB]);

  const addTodo = async (name, date) => {
    const postData = { todoName: name, dueDate: date };
    try {
      const response = await axios.post(`${baseUrl}/create-post`, postData);
      setFetchDB(true);
      navigate("/");
      console.log("Data Saved Successfully in DB", response.data);
    } catch (err) {
      console.log("Failed to save Todo In DB", err.message);
    }
  };

  const addTodos = (todos) => {
    todoDispatcher({
      type: "ADD_TODO",
      payload: {
        todos,
      },
    });
  };

  const deleteTodo = async (Id) => {
    console.log(Id);
    try {
      const response = await axios.delete(`${baseUrl}/${Id}`);
      setFetchDB(true);
      console.log("Todo deleted successfully", response.data);
    } catch (err) {
      console.log("Error deleting Todo", err.message);
    }
  };

  return (
    <TodoContext.Provider
      value={{ todo, addTodo, deleteTodo, spinnerShow, tab, setTab }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export const SettingHome = () => {
  const currentTab = "Home";
  return currentTab;
};

export const SettingPost = () => {
  const currentTab = "Post";
  return currentTab;
};

export default TodoContextProvider;
