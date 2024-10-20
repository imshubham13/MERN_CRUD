import "./App.css";
import CreateStudent from "./component/CreateStudent";
import DisplayStudent from "./component/DisplayStudent";
import { Routes, Route, NavLink } from "react-router-dom";
import Header from "./component/Header";
import UpdateStudent from "./component/UpdateStudent";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<DisplayStudent />} exact/>
        <Route path="/Display" element={<DisplayStudent />} exact />
        <Route path="/AddStudent" element={<CreateStudent />} exact/>
        <Route path="/UpdateStudent/:id" element={<UpdateStudent />} exact/>
      </Routes>
    </>
  );
}

export default App;
