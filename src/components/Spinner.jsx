import { useContext } from "react";
import { TodoContext } from "../store/TodoStore";

const Spinner = () => {
  const { spinnerShow } = useContext(TodoContext);
  return (
    spinnerShow && (
      <div className="d-flex justify-content-center">
        <div
          className="spinner-border"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  );
};

export default Spinner;
