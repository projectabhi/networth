import "./App.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import { Signup } from "./pages/signup";
import Login from "./pages/login";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Portfolio_pie from "./pages/Portfolio_pie";
import Portfolio_net from "./pages/Portfolio_net";
import Investments from "./pages/Investments";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio_pie" element={<Portfolio_pie />} />
      <Route path="/portfolio_net" element={<Portfolio_net />} />
      <Route path="/investments" element={<Investments />} />
    </Routes>
  );
}

export default App;
