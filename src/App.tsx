import { useEffect } from "react";
import { Routes, HashRouter, Route, useLocation } from "react-router-dom";
import Login from "./components/Login";
import UploadVideo from "./components/Upload";
import VideoPlay from "./components/Video";
function App() {
  const arr = new Array(5).fill("我是谁");
  const token = localStorage.getItem('token')

  return (
    <HashRouter>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="/upload" element={<UploadVideo />}></Route>
        <Route path="/play" element={<VideoPlay />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
