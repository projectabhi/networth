import "./App.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import { Signup } from "./pages/signup";
import Login from "./pages/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
    </Routes>
  );
}

export default App;
