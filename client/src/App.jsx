import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthRouter from "./components/AuthRouter";

import NoteList from "./components/NoteList";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="folders/:folderId" element={<NoteList />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
