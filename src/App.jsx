import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import style from "./App.module.css";
import Home from "./components/Home/Home";
import Counsellors from "./components/Counsellors/Counsellors";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Navigate to="/counselling" />} /> */}
        {/* <Route path="/counselling" element={<Home className={style.main} />} /> */}
        <Route path="/experts" element={<Counsellors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
