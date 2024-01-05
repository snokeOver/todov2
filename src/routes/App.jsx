import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EmptyMessage from "../components/EmptyMessage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import TodoHeading from "../components/TodoHeading";
import TodoContextProvider from "../store/TodoStore";
import Spinner from "../components/Spinner";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <TodoContextProvider>
      <Header></Header>
      <div className="bodyContainer">
        <SideBar></SideBar>
        <div className="bodySection">
          <TodoHeading></TodoHeading>
          <Spinner></Spinner>
          <Outlet />
          <EmptyMessage></EmptyMessage>
        </div>
      </div>
      <Footer></Footer>
    </TodoContextProvider>
  );
}

export default App;
